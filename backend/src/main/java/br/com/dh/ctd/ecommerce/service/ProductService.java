package br.com.dh.ctd.ecommerce.service;

import br.com.dh.ctd.ecommerce.model.Product;
import br.com.dh.ctd.ecommerce.repository.CategoryRepository;
import br.com.dh.ctd.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {


    ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> showAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> showById(Integer id){
        return productRepository.findById(id);
    }

    public void delete(Integer id){
        productRepository.deleteById(id);
    }

    public Product update(Product product){
        return productRepository.save(product);
    }

}
