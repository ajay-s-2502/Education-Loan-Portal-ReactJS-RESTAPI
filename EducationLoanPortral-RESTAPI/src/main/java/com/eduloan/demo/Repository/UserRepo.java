package com.eduloan.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eduloan.demo.Model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Integer>{
	
	@Query("select um from UserModel um where um.email=:email")
	Optional<UserModel> findbyemail(String email);

}
