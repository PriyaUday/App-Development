package com.example.demo.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class CarBooking {
@Id
private String name;
private String phone;
private String pickupDate;
private String returnDate;
private String carMake;
private String carModel;
private String registrationNumber;

}