package com.pms.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.models.Drug;
import com.pms.service.DrugService;

@CrossOrigin("*")
@RestController
@RequestMapping("/drug")
public class DrugController {

	@Autowired
	private DrugService drugService;

	@GetMapping("/view")
	public List<Drug> show() {
		return drugService.showAllDrugs();
	}

	@PutMapping("/edit")
	public Drug updateDrug(@RequestBody Drug drug) {
		return drugService.updateDrug(drug);
	}

	@PostMapping("/add")
	public Drug addDrug(@RequestBody Drug drug) {
		return drugService.saveDrug(drug);
	}

	@DeleteMapping("/delete/{id}")
	public String deleDrug(@PathVariable long id) {
		drugService.deleteDrug(id);
		return "Drug deleted successfully";
	}
	
	@GetMapping("/find/{name}")
	public Drug findDrugByName(@PathVariable String name){
		return drugService.searchByName(name);
	}
	
	@GetMapping("/findbyId/{id}")
	public Optional<Drug> findbyid(@PathVariable long id) {
		return drugService.findDrugById(id);
		
	}
}
