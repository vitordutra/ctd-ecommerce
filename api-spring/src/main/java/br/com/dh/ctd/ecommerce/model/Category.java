package br.com.dh.ctd.ecommerce.model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.*;

@Entity
@Table(name = "categories")
public class Category implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    // Timestamps automáticos
    @CreationTimestamp
    private Instant criado;
    @UpdateTimestamp
    private Instant atualizado;

    @PrePersist
    public void AntesDeSalvar() {
        criado = Instant.now();
    }

    @PreUpdate
    public void AntesDeAtualizar() {
        atualizado = Instant.now();
    }

    public Category() {
    }

    public Category(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Category(String name) {
        this.name = name;
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

    public Instant getCriado() {
        return criado;
    }

    public Instant getAtualizado() {
        return atualizado;
    }
}
