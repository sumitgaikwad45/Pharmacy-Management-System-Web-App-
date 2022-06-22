package com.PaymentgatewayServerMicroservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PaymentgatewayServerMicroservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaymentgatewayServerMicroservicesApplication.class, args);
	}

}
