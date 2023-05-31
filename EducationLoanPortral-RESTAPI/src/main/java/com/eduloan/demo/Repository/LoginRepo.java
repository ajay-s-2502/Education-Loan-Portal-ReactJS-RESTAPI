package com.eduloan.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduloan.demo.Model.LoginModel;

public interface LoginRepo extends JpaRepository<LoginModel, String>{

	LoginModel findByemail(String email);
}
