package com.pms.resource;

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

import com.pms.models.PickOrder;
import com.pms.repository.PickUpRepository;

@RestController
@RequestMapping("/pickup")
public class PickUpController {

	@Autowired
	private PickUpRepository pickUpRepository;

	@GetMapping("/view")
	public List<PickOrder> show() {
		return pickUpRepository.findAll();
	}

	@PostMapping("/add")
	public PickOrder addPickOrder(@RequestBody PickOrder order) {
		return pickUpRepository.save(order);
	}

	@DeleteMapping("/delete/{id}")
	public String delePickOrder(@PathVariable long id) {
		pickUpRepository.deleteById(id);
		return "Drug deleted successfully";
	}
	
	@GetMapping("/findbyid/{id}")
	public Optional<PickOrder> findDrugById(@PathVariable long id){
		return pickUpRepository.findById(id);
	}
}
