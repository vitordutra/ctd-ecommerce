package br.com.dh.ctd.ecommerce.controller;

import br.com.dh.ctd.ecommerce.model.Product;
import br.com.dh.ctd.ecommerce.service.CategoryService;
import br.com.dh.ctd.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;
    private CategoryService categoryService;

    @Autowired
    public ProductController(ProductService productService, CategoryService categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        categoryService.saveCategory(product.getCategory());
        return ResponseEntity.ok(productService.saveProduct(product));
    }
}
