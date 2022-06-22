package com.pms.models;

import org.springframework.data.annotation.Id;

public class PickOrder {
	
	@Id
	private long id;
	private String drname;
	private String name;
	private int price;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDrname() {
		return drname;
	}
	public void setDrname(String drname) {
		this.drname = drname;
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
	public PickOrder() {
		super();
	}
	
	
	
}
