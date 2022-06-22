package com.pms.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pms.models.Doctor;
import com.pms.repository.DoctorRepository;

@Service
public class DoctorService implements UserDetailsService {

	@Autowired
	private DoctorRepository doctorRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Doctor foundedUser = doctorRepository.findByUsername(username);
		if (foundedUser == null)
			return null;
		String name = foundedUser.getUsername();
		String pwd = foundedUser.getPassword();
		return new User(name, pwd, new ArrayList<>());
	}

}
