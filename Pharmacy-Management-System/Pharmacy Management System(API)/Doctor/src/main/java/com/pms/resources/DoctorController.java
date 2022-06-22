package com.pms.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.models.AuthenticationRequest;
import com.pms.models.AuthenticationResponse;
import com.pms.models.Doctor;
import com.pms.repository.DoctorRepository;
import com.pms.services.DoctorService;
import com.pms.services.JwtUtils;

@CrossOrigin("*")
@RestController
@RequestMapping("/register")
public class DoctorController {

	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private DoctorService doctorService;

	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;
//---------------------------Registration and Login -------------------------------//

	@PostMapping("/reg")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String name = authenticationRequest.getName();
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		String emailid = authenticationRequest.getEmail();
		String contactno = authenticationRequest.getContact();
		
		String enpwd = bCryptPasswordEncoder.encode(password);
		Doctor doctor = new Doctor();
		doctor.setName(name);
		doctor.setUsername(username);
		doctor.setPassword(enpwd);
		doctor.setContact(contactno);
		doctor.setEmail(emailid);
		try {
			doctorRepository.save(doctor);
		}

		catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error During Auth for Doctor" + username));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successful Auth " + username));
	}

	@PostMapping("/auth")
	private ResponseEntity<?> authenticateClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (BadCredentialsException e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error while authenticating" + username));
		}

		UserDetails loadedUser = doctorService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);
		return ResponseEntity.ok((generatedToken));
	}

}