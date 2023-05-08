package com.eduloan.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduloan.demo.Model.AdminModel;

@Repository
public interface AdminRepo extends JpaRepository<AdminModel, String>{

	AdminModel findByemail(String email);

}
