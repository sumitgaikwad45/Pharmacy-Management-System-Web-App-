package com.pms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pms.models.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin,String> {
	Admin findByUsername(String username);
}
