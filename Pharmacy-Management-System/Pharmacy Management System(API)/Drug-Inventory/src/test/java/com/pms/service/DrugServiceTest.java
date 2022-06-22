package com.pms.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.pms.models.Drug;
import com.pms.repository.DrugRepository;

@SpringBootTest
class DrugServiceTest {

	@Mock
	private DrugRepository drugRepository;

	@InjectMocks
	private DrugService drugService;

	@Test
	void showAllDrugsTest() {
		List<Drug> drug = new ArrayList<>();

		drug.add(new Drug(6L, "Pheno", 90));
		drug.add(new Drug(11L, "Reno", 45));

		when(drugRepository.findAll()).thenReturn(drug);
		List<Drug> expected = drugService.showAllDrugs();
		assertEquals(expected, drug);
	}
	
	@Test
	public void addDrugTest() throws ParseException {
		Drug drug = new Drug(1L, "crocine", 10);
		when(drugRepository.save(drug)).thenReturn(drug);
		assertEquals(drug, drugService.saveDrug(drug));
	}

	@Test
	void deleteDrugTest() {
		Drug drug = new Drug(25L, "crocine", 55);
		when(drugRepository.findById(drug.getId())).thenReturn(Optional.of(drug));
		drugService.deleteDrug(drug.getId());
		verify(drugRepository).deleteById(drug.getId());
	}

	@Test
	public void findByIdTest() {
		Drug drug = new Drug(25L, "crocine", 55);
		drugService.saveDrug(drug);
		
		verify(drugRepository).findById(drug.getId());
	}

	@Test
	public void updateDrugTest() {
		Drug drug = new Drug(1L, "crocine", 55);
		drugService.saveDrug(drug);
		drug.setId(1L);
		drug.setName("VitB");
		drug.setPrice(55);
		drugService.updateDrug(drug );
		Assertions.assertThat(drug.getName()).isEqualTo("VitB");
	}
	


}
