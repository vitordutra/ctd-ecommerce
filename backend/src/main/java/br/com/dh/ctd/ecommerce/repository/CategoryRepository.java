package br.com.dh.ctd.ecommerce.repository;

import br.com.dh.ctd.ecommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
