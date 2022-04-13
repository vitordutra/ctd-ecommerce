package br.com.dh.ctd.ecommerce.dto;

import br.com.dh.ctd.ecommerce.model.Products;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProductDto {

    private Integer id;
    private String title;
    private String description;
    private Double price;
    private String image;

    private List<CategoryDto> categories = new ArrayList<>();

    public ProductDto() {
    }

    public ProductDto(Integer id, String title, String description, Double price, String image, List<CategoryDto> categories) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
    }

    public ProductDto(Products products) {
        id = products.getId();
        title = products.getTitle();
        description = products.getDescription();
        price = products.getPrice();
        image = products.getImage();
        categories = products.getCategories().stream().
        map(x -> new CategoryDto(x)).collect(Collectors.toList());
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

    public void setCategories(List<CategoryDto> categories) {
        this.categories = categories;
    }
}
