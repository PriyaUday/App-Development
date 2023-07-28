package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.CarBooking;
import com.example.demo.repo.CarBookingRepository;



@Service

public class CarBookingService {
@Autowired

public CarBookingRepository repo;


public CarBookingService(CarBookingRepository carBookingRepository) {
    this.repo = carBookingRepository;
}

public CarBooking addDetails(CarBooking carBooking) {
    // Perform any additional checks or validation on the carBooking object if needed
    // For example, you can check if the booking dates are valid, carMake, carModel, etc.

    // Save the CarBooking entity to the database
    return repo.save(carBooking);
}

public List<CarBooking> getAllDetails() {
	// TODO Auto-generated method stub
	return repo.findAll();
}


}