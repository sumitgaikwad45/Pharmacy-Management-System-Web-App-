package com.pms.models;

import org.springframework.data.annotation.Id;

public class Order {
	@Id
	private long id;
	private String doctor;
	private String name;
	private int price;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Order(long id, String doctor, String name, int price) {
		super();
		this.id = id;
		this.doctor = doctor;
		this.name = name;
		this.price = price;
	}
	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
