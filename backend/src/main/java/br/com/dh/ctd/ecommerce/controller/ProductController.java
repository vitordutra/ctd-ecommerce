package br.com.dh.ctd.ecommerce.controller;

import br.com.dh.ctd.ecommerce.model.Product;
import br.com.dh.ctd.ecommerce.service.CategoryService;
import br.com.dh.ctd.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<Product>> showAllProducts(){
        return ResponseEntity.ok(productService.showAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> showProductById(@PathVariable Integer id){
        return  ResponseEntity.ok(productService.showById(id).orElse(null));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer id){
        String string = null;
        if (productService.showById(id).isPresent()){
            string = "Deletado";
            productService.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(string);
        } else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public ResponseEntity<Product> update(@RequestBody Product product){
        if (product.getId() != null && productService.showById(product.getId()).isPresent()){
            return ResponseEntity.ok(productService.update(product));
        } else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
