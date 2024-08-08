package com.nichoscode.medicare.repository;

import com.nichoscode.medicare.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public Product findByName(String name);
    public Iterable<Product> findByNameContainingIgnoreCase(String name);
}
