package com.nichoscode.medicare.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;

@Entity
@Transactional
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imageUrl;
    private String brand;
    private String description;
    @JsonProperty("isStocked")
    private Boolean isStocked;
    private Double price;

    public Product() {
    }

    public Product(String name, String imageUrl, String brand, String description, Boolean isStocked, Double price) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.brand = brand;
        this.description = description;
        this.isStocked = isStocked;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getStocked() {
        return isStocked;
    }

    public void setStocked(Boolean stocked) {
        isStocked = stocked;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", brand='" + brand + '\'' +
                ", description='" + description + '\'' +
                ", isStocked=" + isStocked +
                ", price=" + price +
                '}';
    }
}
