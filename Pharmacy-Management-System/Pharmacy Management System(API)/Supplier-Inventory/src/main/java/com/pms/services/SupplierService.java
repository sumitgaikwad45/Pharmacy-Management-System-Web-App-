package com.pms.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pms.exception.SupplierAlreadyExistException;
import com.pms.exception.SupplierNotFoundException;
import com.pms.models.Supplier;
import com.pms.repository.SupplierRepository;

@Service
public class SupplierService {

	@Autowired
	private SupplierRepository supplierRepository;

	public List<Supplier> showAllSupplier() {
		return supplierRepository.findAll();
	}

	public Supplier saveSupplier(Supplier supplier) {
		Optional<Supplier> supplier1 = supplierRepository.findById(supplier.getId());
		if (!supplier1.isPresent()) {
			return supplierRepository.save(supplier);
		} else {
			throw new SupplierAlreadyExistException("Supplier Already exist");
		}

	}

	public void deleteSupplier(long id) {
		Optional<Supplier> supplier1 = supplierRepository.findById(id);
		if (!supplier1.isPresent()) {
			throw new SupplierNotFoundException("Supplier does not exist " + id);
		} else {
			supplierRepository.deleteById(id);
		}
	}

	public Supplier searchByName(String name) {
		Supplier supplier1 = supplierRepository.findByName(name);
		if (supplier1 != null) {
			return supplier1;
		} else {
			throw new SupplierNotFoundException("Supplier does not exist " + name);
		}
	}

	public Optional<Supplier> findSupplierById(long id) {
		Optional<Supplier> supplier1 = supplierRepository.findById(id);
		if (!supplier1.isPresent()) {
			throw new SupplierNotFoundException("Supplier does not exist " + id);
		} else {
			return supplierRepository.findById(id);
		}
	}
}
