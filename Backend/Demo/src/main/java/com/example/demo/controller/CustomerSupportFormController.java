//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.service.CustomerSupportFormService;
//import com.school.demo.entity.CustomerSupportForm;
//
//
//@RestController
//
//@CrossOrigin(origins="*")
//
//public class CustomerSupportFormController {
//
//@Autowired
//public CustomerSupportFormService service;
//
//@PostMapping("/cust")
//public CustomerSupportForm  postDetails(@RequestBody CustomerSupportForm CustomerSupportForm) {
//return service.addDetails(CustomerSupportForm);
//}
//
//}