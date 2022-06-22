package com.pms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pms.models.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
