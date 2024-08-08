package com.nichoscode.medicare.entity;

import jakarta.persistence.*;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Transactional
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String address;
    private String email;
    private String phone;
    private LocalDateTime date;
    private Integer quantity;
    private Double totalAmount;
    private Long[] productIDs;

    public Order() {
    }

    public Order(String fullName, String address, String email, String phone, LocalDateTime  date, Integer quantity, Double totalAmount, Long[] productIDs) {
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.productIDs = productIDs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDateTime  getDate() {
        return date;
    }

    public void setDate(LocalDateTime  date) {
        this.date = date;
    }

    public Integer getQuantity() {
//        this.setQuantity();
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Long[] getProductIDs() {
        return productIDs;
    }

    public void setProductIDs(Long[] productIDs) {
        this.productIDs = productIDs;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", date=" + date +
                ", quantity=" + quantity +
                ", totalAmount=" + totalAmount +
                ", productIDs=" + productIDs +
                '}';
    }
}
