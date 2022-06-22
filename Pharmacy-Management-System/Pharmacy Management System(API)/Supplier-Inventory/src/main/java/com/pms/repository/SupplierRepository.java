package com.pms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.models.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long>{

	Supplier findByName(String name);

}
