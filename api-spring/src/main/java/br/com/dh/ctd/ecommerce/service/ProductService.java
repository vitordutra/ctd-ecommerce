package br.com.dh.ctd.ecommerce.service;

import br.com.dh.ctd.ecommerce.dto.CategoryDto;
import br.com.dh.ctd.ecommerce.dto.ProductDto;
import br.com.dh.ctd.ecommerce.model.Category;
import br.com.dh.ctd.ecommerce.model.Product;
import br.com.dh.ctd.ecommerce.repositories.CategoryRepository;
import br.com.dh.ctd.ecommerce.repositories.ProductRepository;
import br.com.dh.ctd.ecommerce.service.exceptions.BDExcecao;
import br.com.dh.ctd.ecommerce.service.exceptions.RecursoNaoEncontrado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public Page<ProductDto> buscarTodos(PageRequest pageRequest) {
        Page<Product> list = productRepository.findAll(pageRequest);
        return list.map(x -> new ProductDto(x, x.getCategories()));
    }

    @Transactional(readOnly = true)
    public ProductDto findById(Integer id) {
        Optional<Product> obj = productRepository.findById(id);
        //Products entidade = obj.get();
        Product entidade = obj.orElseThrow(() -> new RecursoNaoEncontrado(
                "RECURSO NÃO ENCONTRADO"));
        return new ProductDto(entidade, entidade.getCategories());
    }

    @Transactional
    public ProductDto insert(ProductDto dto) {
        Product entity = new Product();
        copyToEntity(dto, entity);
        entity = productRepository.save(entity);
        return new ProductDto(entity);
    }

    @Transactional
    public ProductDto update(Integer id, ProductDto dto) {
        try {
            Product entity = productRepository.getById(id.intValue());
            copyToEntity(dto, entity);
            entity = productRepository.save(entity);
            return new ProductDto(entity);
        }
        catch (EntityNotFoundException e) {
            throw new RecursoNaoEncontrado("ID NÃO ENCONTRADO: " + id);
        }
    }

    public void delete(Integer id) {
        try {
            productRepository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new RecursoNaoEncontrado("ID NÃO ENCONTRADO:" + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new BDExcecao("VIOLAÇÃO DE INTEGRIDADE.");
        }
    }

    private void copyToEntity(ProductDto dto, Product entity) {
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setImage(dto.getImage());
        entity.setFeatured(dto.getFeatured());
        entity.setBannerImage(dto.getBannerImage());

        for (CategoryDto catDto : dto.getCategories()) {
            Category category = categoryRepository.getById(catDto.getId());
            entity.getCategories().add(category);
        }
    }
}
