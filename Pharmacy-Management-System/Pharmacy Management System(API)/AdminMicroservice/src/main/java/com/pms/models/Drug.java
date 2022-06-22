package com.pms.models;

import org.springframework.data.annotation.Id;

public class Drug {
	@Id
	private long id;
	private String name;
	private int price;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Drug [id=" + id + ", name=" + name + ", price=" + price + "]";
	}

	public Drug(long id, String name, int price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
	}

	public Drug() {
		super();

	}
}
