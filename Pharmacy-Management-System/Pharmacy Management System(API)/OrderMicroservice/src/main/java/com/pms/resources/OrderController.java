package com.pms.resources;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.pms.models.Drug;
import com.pms.models.Order;
import com.pms.repository.OrderRepository;

@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private OrderRepository orderRepository;
	
	@GetMapping("/makeOrder/{name}")
	public List<Object> orderDrug(@PathVariable String name) {
		String url = "http://drug-inventory-service/drug/find/" + name;
		Object a =  restTemplate.getForObject(url, Object.class);
		return Arrays.asList(a);
	}
	


	@PostMapping("/create")
	public Order addOrder(@RequestBody Order order) {
		return orderRepository.save(order);
	}
	
	@GetMapping("/getall")
	public List<Order> getorder(){
		return orderRepository.findAll();
		
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteOrder(@PathVariable long id) {
		orderRepository.deleteById(id);
	}
	
	@GetMapping("/findbyId/{id}")
	public Optional<Order> findbyid(@PathVariable long id)
	{
		return orderRepository.findById(id);
	}

}
