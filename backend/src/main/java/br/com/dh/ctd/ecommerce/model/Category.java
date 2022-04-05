package br.com.dh.ctd.ecommerce.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private Set<Product> products = new HashSet<>();

    public Category() {
    }

    public Category(String nome) {
        this.nome = nome;
    }

    public Category(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Categories{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
