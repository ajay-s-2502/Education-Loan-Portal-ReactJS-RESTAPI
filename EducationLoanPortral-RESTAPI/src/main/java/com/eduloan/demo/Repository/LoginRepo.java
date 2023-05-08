package com.eduloan.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduloan.demo.Model.LoginModel;

@Repository
public interface LoginRepo extends JpaRepository<LoginModel, String>{

	LoginModel findByemail(String email);
}
