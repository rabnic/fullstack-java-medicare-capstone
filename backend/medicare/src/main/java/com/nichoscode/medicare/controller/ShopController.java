package com.nichoscode.medicare.controller;

import com.nichoscode.medicare.entity.Order;
import com.nichoscode.medicare.entity.Product;
import com.nichoscode.medicare.service.OrderService;
import com.nichoscode.medicare.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/shop")
@CrossOrigin
public class ShopController {


    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) {
        Product product = productService.findProductById(id).get();
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(@RequestBody Order orderRequest) {
        try {
            orderRequest.setDate(LocalDateTime.now());
            Order savedOrder = orderService.saveOrder(orderRequest);
            return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/getOrders")
//    public ResponseEntity<?> getAllOrders(){
//        List<Order> orders = this.orderService.getOrders();
//        if(orders.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }
//        else {
//            return ResponseEntity.ok(orders);
//        }
//    }

//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteOrder(@PathVariable("id") String id){
//        this.orderService.deleteOrder(id);
//        return ResponseEntity.status(HttpStatus.OK).build();
//    }

    @GetMapping("/getProduct/{name}")
    public ResponseEntity<?> getProducts(@PathVariable("name") String name){
        List<Product> products = this.productService.findAllByName(name);
        if(products.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }else {
            return ResponseEntity.ok(products);
        }
    }

//    @GetMapping("/getOrder/{id}")
//    public ResponseEntity<?> getOrder(@PathVariable("id") String id){
//        Order order = this.orderService.getOrder(id);
//        if(order==null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        }else {
//            return ResponseEntity.ok(order);
//        }
//    }
}
