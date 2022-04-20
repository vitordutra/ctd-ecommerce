package br.com.dh.ctd.ecommerce.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private Double price;
    private String image;
    private Boolean featured;
    private String bannerImage;

    // Timestamps automáticos
    @CreationTimestamp
    private Instant criado;
    @UpdateTimestamp
    private Instant atualizado;

    @PrePersist
    public void AntesDeSalvar() {
        criado = Instant.now();
    }

    @PreUpdate
    public void AntesDeAtualizar() {
        atualizado = Instant.now();
    }

    @ManyToMany
    @JoinTable(name = "productscategories",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn (name = "category_id"))
    Set<Category> categories = new HashSet<>();

    public Product() {
    }

    public Product(Integer id, String title, String description, Double price, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public String getBannerImage() {
        return bannerImage;
    }

    public void setBannerImage(String bannerImage) {
        this.bannerImage = bannerImage;
    }

    public Instant getCriado() {
        return criado;
    }

    public Instant getAtualizado() {
        return atualizado;
    }
}
