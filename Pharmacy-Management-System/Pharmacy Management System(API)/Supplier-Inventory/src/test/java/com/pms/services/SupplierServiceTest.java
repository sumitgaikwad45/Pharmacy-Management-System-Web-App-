package com.pms.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.pms.models.Supplier;
import com.pms.repository.SupplierRepository;


@SpringBootTest
class SupplierServiceTest {

	@Mock
	private SupplierRepository supplierRepository;

	@InjectMocks
	private SupplierService supplierService;

	@Test
	void showAllSupplierTest() {
		List<Supplier> supplier = new ArrayList<>();

		supplier.add(new Supplier(6L, "Mr.Joy", "joy@gmail.com", "1425485698", "aspirin", 90));
		supplier.add(new Supplier(7L, "Mr.Joe", "joe@gmail.com", "1425545698", "acetelon", 40));

		when(supplierRepository.findAll()).thenReturn(supplier);
		List<Supplier> expected = supplierService.showAllSupplier();
		assertEquals(expected, supplier);
	}
	
	@Test
	public void addSupplierTest()  {
		Supplier supplier = new Supplier(6L, "Mr.Joy", "joy@gmail.com", "1425485698", "aspirin", 90);
		when(supplierRepository.save(supplier)).thenReturn(supplier);
		assertEquals(supplier, supplierService.saveSupplier(supplier));;
	}

	@Test
	void deleteSupplierTest() {
		Supplier supplier = new Supplier(6L, "Mr.Joy", "joy@gmail.com", "1425485698", "aspirin", 90);
		when(supplierRepository.findById(supplier.getId())).thenReturn(Optional.of(supplier));
		supplierService.deleteSupplier(supplier.getId());
		verify(supplierRepository).deleteById(supplier.getId());
	}

	
	
}
