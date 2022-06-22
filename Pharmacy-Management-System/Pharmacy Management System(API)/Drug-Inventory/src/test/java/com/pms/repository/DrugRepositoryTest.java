package com.pms.repository;


import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pms.models.Drug;

@SpringBootTest
class DrugRepositoryTest {

	@Autowired
	private DrugRepository drugRepository;
	
	 @BeforeEach
	    void initUseCase() {
		 Drug drug = new Drug(201L, "xyz", 45);
			drugRepository.save(drug);
	    }

	    @AfterEach
	    public void destroyAll(){
	    	drugRepository.deleteById(201L);
	    }
	
	@Test
	void findByNameTest() {
		Drug findByName = drugRepository.findByName("xyz");
		assertThat(findByName.getName()).isEqualTo("xyz");
	}

}
