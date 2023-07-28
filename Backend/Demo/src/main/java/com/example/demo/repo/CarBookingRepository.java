package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.CarBooking;



public interface CarBookingRepository extends JpaRepository<CarBooking, String> {

}