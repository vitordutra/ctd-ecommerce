package br.com.dh.ctd.ecommerce.repository;

import br.com.dh.ctd.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
