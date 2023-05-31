package com.eduloan.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduloan.demo.Model.AdminModel;

public interface AdminRepo extends JpaRepository<AdminModel, String>{

	AdminModel findByemail(String email);

}
