package com.pms;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class DrugInventoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(DrugInventoryApplication.class, args);
	}

	@Bean
	public Docket swagggerConfig() {

		return new Docket(DocumentationType.SWAGGER_2).select()

				.apis(RequestHandlerSelectors.basePackage("com.pms")).build().apiInfo(apiDetails());

	}

	private ApiInfo apiDetails() {
		return new ApiInfo("Pharmacy-Management-System ", "Swagger Implementation", "1.0", "free to use",
				new springfox.documentation.service.Contact("Sumit Gaikwad", "http://pms.in",
						"sumitgaikwad@outlook.com"),
				"API License", "http://pms.in", Collections.emptyList()

		);

	}
}
