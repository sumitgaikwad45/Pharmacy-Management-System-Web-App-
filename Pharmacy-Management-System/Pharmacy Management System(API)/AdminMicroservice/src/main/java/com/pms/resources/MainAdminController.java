package com.pms.resources;

import java.util.Arrays;
import java.util.List;

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
import org.springframework.web.client.RestTemplate;

import com.pms.models.Drug;
import com.pms.models.PickOrder;
import com.pms.models.Supplier;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class MainAdminController {

	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/viewdrugs")
	public List<Object> viewAllDrugs() {
		String url = "http://drug-inventory-service/drug/view";
		Object[] drug = restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(drug);
	}

	@GetMapping("/viewbyId/{id}")
	public Object ViewById(@PathVariable long id) {
		String url = "http://drug-inventory-service/drug/findbyId/" + id;
		return restTemplate.getForObject(url, Object.class);

	}

	@PostMapping("/adddrugs")
	public String addDrug(@RequestBody Drug drug) {
		String url = "http://drug-inventory-service/drug/add";
		String addedDrug = restTemplate.postForObject(url, drug, String.class);
		return addedDrug;
	}

	@PutMapping("/editdrugs")
	public void updateDrug(@RequestBody Drug drug) {
		String url = "http://drug-inventory-service/drug/edit";
		restTemplate.put(url, drug);
	}

	@DeleteMapping("/deletedrug/{id}")
	public String deleteDrugs(@PathVariable long id) {
		String url = "http://drug-inventory-service/drug/delete/{id}";
		restTemplate.delete(url, id);
		return "Drug deleted successfully";
	}

	@GetMapping("/viewdrugs/{name}")
	public Object getDrugByName(@PathVariable String name) {
		String url = "http://drug-inventory-service/drug/find/" + name;
		return restTemplate.getForObject(url, Object.class);
	}

	@GetMapping("/viewsuppliers")
	public List<Object> viewAllSuppliers() {
		String url = "http://supplier-service/supplier/show";
		Object[] supplier = restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(supplier);
	}

	@PostMapping("/addsuppliers")
	public String addSupplier(@RequestBody Supplier supplier) {
		String url = "http://supplier-service/supplier/add";
		String addedSupplier = restTemplate.postForObject(url, supplier, String.class);
		return addedSupplier;
	}

	@DeleteMapping("/deletesupplier/{id}")
	public String deleteSupplier(@PathVariable long id) {
		String url = "http://supplier-service/supplier/delete/{id}";
		restTemplate.delete(url, id);
		return "Supplier deleted successfully";
	}

	@GetMapping("/viewsupplier/{name}")
	public Object getSupplierByName(@PathVariable String name) {
		String url = "http://supplier-service/supplier/find/" + name;
		return restTemplate.getForObject(url, Object.class);
	}

	@DeleteMapping("/deleteOrder/{id}")
	public String deleteOrders(@PathVariable long id) {
		String url = "http://order-service/order/delete/{id}";
		restTemplate.delete(url, id);
		return "order deleted successfully";
	}

	@PostMapping("/ordertopick")
	public String addtopickup(@RequestBody PickOrder pickOrder) {
		String url = "http://pickup-service/pickup/add";
		String addedpickup = restTemplate.postForObject(url, pickOrder, String.class);
		return addedpickup;
	}

	@GetMapping("/getorder/{id}")
	public Object orderById(@PathVariable long id) {
		String url = "http://order-service/order/findbyId/" + id;
		return restTemplate.getForObject(url, Object.class);

	}

	@GetMapping("/pickuplist")
	public List<Object> viewPickUpList() {
		String url = "http://pickup-service/pickup/view";
		Object[] pickuplist = restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(pickuplist);
	}

	@GetMapping("/viewOrders")
	public List<Object> viewOrders() {
		String url = "http://order-service/order/getall";
		Object[] order = restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(order);
	}
}
