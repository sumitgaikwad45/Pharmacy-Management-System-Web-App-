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

import com.pms.models.Admin;
import com.pms.models.AuthenticationRequest;
import com.pms.models.AuthenticationResponse;
import com.pms.repository.AdminRepository;
import com.pms.services.AdminService;
import com.pms.services.JwtUtils;

@CrossOrigin("*")
@RestController
@RequestMapping("/register")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private AdminService adminService;

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/reg")
	private ResponseEntity<?> subscribeClient(@RequestBody AuthenticationRequest authenticationRequest) {
		String name = authenticationRequest.getName();
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		String emailid = authenticationRequest.getEmail();
		String contactno = authenticationRequest.getContact();

		String enpwd = bCryptPasswordEncoder.encode(password);
		Admin admin = new Admin();
		admin.setName(name);
		admin.setUsername(username);
		admin.setPassword(enpwd);
		admin.setContact(contactno);
		admin.setEmail(emailid);
		try {
			adminRepository.save(admin);
		}

		catch (Exception e) {
			return ResponseEntity.ok(new AuthenticationResponse("Error During Auth for Admin " + username));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successful Auth" + username));
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

		UserDetails loadedUser = adminService.loadUserByUsername(username);
		String generatedToken = jwtUtils.generateToken(loadedUser);
		return ResponseEntity.ok((generatedToken));
	}

}