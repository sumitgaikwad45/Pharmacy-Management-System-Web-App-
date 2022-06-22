package com.pms.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pms.models.Supplier;


@SpringBootTest
class SupplierRepositoryTest {

	@Autowired
	private SupplierRepository supplierRepository;
	
	 @BeforeEach
	    void initUseCase() {
			Supplier supplier = new Supplier(6L, "Mr.Joy", "joy@gmail.com", "1425485698", "aspirin", 90);
			supplierRepository.save(supplier);
	    }

	    @AfterEach
	    public void destroyAll(){
	    	supplierRepository.deleteById(6L);
	    }
	
	@Test
	void findByNameTest() {
		Supplier findByName = supplierRepository.findByName("Mr.Joy");
		assertThat(findByName.getName()).isEqualTo("Mr.Joy");
	}


}
