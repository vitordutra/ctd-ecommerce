package br.com.dh.ctd.ecommerce.dto;

import br.com.dh.ctd.ecommerce.model.Categories;

public class CategoryDto {

    private Integer id;
    private String name;

    public CategoryDto() {
    }

    public CategoryDto(Integer id, String nome) {
        this.id = id;
        this.name = name;
    }

    public CategoryDto(Categories categories) {
        id = categories.getId();
        name = categories.getName();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}