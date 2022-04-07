package br.com.dh.ctd.ecommerce.controller;

import br.com.dh.ctd.ecommerce.model.Category;
import br.com.dh.ctd.ecommerce.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<Category> saveCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @GetMapping
    public ResponseEntity<List<Category>> findAllCategories() {
        return ResponseEntity.ok(categoryService.findAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> findCategoryById(@PathVariable Integer id) {
        return ResponseEntity.ok(categoryService.findCategoryById(id).orElse(null));
    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) {
        ResponseEntity<Category> response = null;
        if (category.getId() != null && categoryService.findCategoryById(category.getId()).isPresent()) {
            response = ResponseEntity.ok(categoryService.updateCategory(category));
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

}
