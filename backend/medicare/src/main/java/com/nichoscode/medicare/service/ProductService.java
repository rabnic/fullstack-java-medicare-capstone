package com.nichoscode.medicare.service;

import com.nichoscode.medicare.entity.Product;
import com.nichoscode.medicare.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        return this.productRepository.save(product);
    }

    public List<Product> findAllProducts(){
        return this.productRepository.findAll();
    }
    public void deleteProduct(Long id) {
        this.productRepository.deleteById(id);
    }

    public Product updateProduct(Product updateProduct) {
       return  this.productRepository.save(updateProduct);
    }


    public Optional<Product> findProductById(Long id) {
        return this.productRepository.findById(id);
    }

    public List<Product> findAllByName(String name){
        Iterable<Product> products = this.productRepository.findByNameContainingIgnoreCase(name);
        return Streamable.of(products).toList();
    }
}
