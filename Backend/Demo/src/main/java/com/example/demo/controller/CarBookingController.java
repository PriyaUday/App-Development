package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.CarBooking;

import com.example.demo.service.CarBookingService;



@RestController

@CrossOrigin(origins="*")

public class CarBookingController {

@Autowired
public CarBookingService service;

@GetMapping("/getbooking")
public List< CarBooking> getDetails(){
	return service.getAllDetails();
}

@PostMapping("/addbook")
public CarBooking  postDetails(@RequestBody CarBooking CarBooking) {
return service.addDetails(CarBooking);
}

}