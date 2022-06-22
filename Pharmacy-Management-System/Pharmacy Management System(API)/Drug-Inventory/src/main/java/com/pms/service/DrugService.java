package com.pms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.exception.DrugAlreadyExistException;
import com.pms.exception.DrugNotFoundException;
import com.pms.models.Drug;
import com.pms.repository.DrugRepository;

@Service
public class DrugService {

	@Autowired
	private DrugRepository drugRepository;

	public Drug saveDrug(Drug drug) {
		Optional<Drug> drug1 = drugRepository.findById(drug.getId());
		if (!drug1.isPresent()) {
			return drugRepository.save(drug);
		} else {
			throw new DrugAlreadyExistException("Drug Already exist");
		}
	}

	public Drug updateDrug(Drug drug) {
		return drugRepository.save(drug);
	}

	public void deleteDrug(long id) {
		Optional<Drug> drug1 = drugRepository.findById(id);
		if (!drug1.isPresent()) {
			throw new DrugNotFoundException("Drug does not exist " + id);
		} else {
			drugRepository.deleteById(id);
		}
	}

	public Drug searchByName(String name) {
		Drug drug1 = drugRepository.findByName(name);
		if (drug1 != null) {
			return drug1;
		} else {
			throw new DrugNotFoundException("Drug does not exist " + name);
		}

	}

	public Optional<Drug> findDrugById(long id) {
		Optional<Drug> drug1 = drugRepository.findById(id);
		if (!drug1.isPresent()) {
			throw new DrugNotFoundException("Drug does not exist " + id);
		} else {
			return drugRepository.findById(id);
		}
	}

	public List<Drug> showAllDrugs() {

		return drugRepository.findAll();
	}

}
