package com.pms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.models.Drug;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long>{

	Drug findByName(String name);	
}
