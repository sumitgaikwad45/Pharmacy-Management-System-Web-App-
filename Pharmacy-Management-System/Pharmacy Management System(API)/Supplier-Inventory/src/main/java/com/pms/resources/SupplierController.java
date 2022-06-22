package com.pms.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pms.models.Supplier;
import com.pms.services.SupplierService;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

	@Autowired
	SupplierService supplierService;

	@GetMapping("/show")
	public List<Supplier> view() {
		return supplierService.showAllSupplier();
	}

	@PostMapping("/add")
	public Supplier addSupplier(@RequestBody Supplier supplier) {
		return supplierService.saveSupplier(supplier);
	}

	@DeleteMapping("/delete/{id}")
	public String deleSupplier(@PathVariable int id) {
		supplierService.deleteSupplier(id);
		return "Supplier deleted successfully";
	}
	
	
	@GetMapping("/find/{name}")
	public Supplier findDrugByName(@PathVariable String name){
		return supplierService.searchByName(name);
	}
}
