package br.com.dh.ctd.ecommerce.service;

import br.com.dh.ctd.ecommerce.model.Product;
import br.com.dh.ctd.ecommerce.repository.CategoryRepository;
import br.com.dh.ctd.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    CategoryRepository categoryRepository;
    ProductRepository productRepository;

    @Autowired
    public ProductService(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
