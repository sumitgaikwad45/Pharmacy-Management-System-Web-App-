package com.pms.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.pms.models.Order;
import com.pms.repository.DoctorRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/doctor")
public class MainDoctorController {

	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private DoctorRepository doctorRepository;

	@GetMapping("/viewdrugs")
	public List<Object> viewAllDrugs() {
		String url = "http://drug-inventory-service/drug/view";
		Object[] drug = restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(drug);
	}

	@GetMapping("/viewdrugs/{name}")
	public Object getDrugByName(@PathVariable String name) {
		String url = "http://drug-inventory-service/drug/find/" + name;
		return restTemplate.getForObject(url, Object.class);
	}
	 
	@GetMapping("/viewbyId/{id}")
	public Object ViewById( @PathVariable long id ) {
		String url = "http://drug-inventory-service/drug/findbyId/"+id;
		 return restTemplate.getForObject(url, Object.class) ;
		
	}
	
	@GetMapping("/viewOrders")
	public List<Object> viewOrders() {
		String url = "http://order-service/order/getall";
		Object[] order= restTemplate.getForObject(url, Object[].class);
		return Arrays.asList(order);
	}
	
	 @PostMapping("/addOrder")
		public String addtopickup(@RequestBody Order order ) {
			String url = "http://order-service/order/create";
			String addedOrder = restTemplate.postForObject(url,order, String.class);
		       return addedOrder;
	}
	 
	 @GetMapping("/pickuplist")
		public List<Object> viewPickUpList(){
			String url = "http://pickup-service/pickup/view";
	       Object[] pickuplist= restTemplate.getForObject(url, Object[].class);
	       return Arrays.asList(pickuplist);
		}

}
