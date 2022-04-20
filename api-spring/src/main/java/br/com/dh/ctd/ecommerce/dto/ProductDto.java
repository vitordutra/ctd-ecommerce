package br.com.dh.ctd.ecommerce.dto;

import br.com.dh.ctd.ecommerce.model.Category;
import br.com.dh.ctd.ecommerce.model.Product;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ProductDto implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer id;
    private String title;
    private String description;
    private Double price;
    private String image;
    private Boolean featured;
    private String bannerImage;

    private List<CategoryDto> categories = new ArrayList<>();

    public ProductDto() {
    }

    public ProductDto(Integer id, String title, String description, Double price, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    public ProductDto(Product entity) {
        id = entity.getId();
        title = entity.getTitle();
        description = entity.getDescription();
        price = entity.getPrice();
        image = entity.getImage();
    }

    // Outro construtor que recebe o objeto e a lista de categorias
    public ProductDto(Product entity, Set<Category> categories) { // 0 1 2 cat
        this(entity);
        categories.forEach(cat -> this.categories.add(new CategoryDto(cat)));
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

    public List<CategoryDto> getCategories() {
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
}
