package com.pms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.models.PickOrder;


public interface PickUpRepository extends JpaRepository<PickOrder, Long> {
	
	PickOrder findByName(String name);	
}
