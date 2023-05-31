package com.eduloan.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eduloan.demo.Controller.Controller;
import com.eduloan.demo.Model.AdminModel;
import com.eduloan.demo.Model.LoanApplicationModel;
import com.eduloan.demo.Model.LoginModel;
import com.eduloan.demo.Model.UserModel;
import com.eduloan.demo.Repository.AdminRepo;
import com.eduloan.demo.Repository.LoanApplicationRepo;
import com.eduloan.demo.Repository.LoginRepo;
import com.eduloan.demo.Repository.UserRepo;

@Service
public class Services {

	@Autowired UserRepo ur;
	@Autowired LoginRepo lr;
	@Autowired LoanApplicationRepo lar;
	@Autowired AdminRepo ar;
	
	public static String email;
	public static String applicantEmail;
	
	public Optional<UserModel> getUserProf() {
		return ur.findbyemail(email);
	}

	public Optional<LoanApplicationModel> viewLoan() {
		return lar.findbymail(applicantEmail);
	}

	public String validateUser(String email, String pass) {
		Services.email = email;
		applicantEmail = email;
		Controller.flag2 = true;
		LoginModel userData = lr.findByemail(email);
		if(userData == null)
		{
			return "User Not Found!";
		}
		else
		{
			if(userData.getPassword().equals(pass))
			{
				return "Login Successful! Welcome :)";
			}
			else
			{
				return "Wrong Password :(";
			}
		}
	}

	public String newUser(LoginModel lm) {
		lr.save(lm);
		return "Account Created Successfully";
	}

	public List<LoanApplicationModel> getAllLoans() {
		return lar.findAll();
	}

	public String validateAdmin(String email, String pass) {
		
		Controller.flag1 = true;
		AdminModel adminData = ar.findByemail(email);
		if(adminData == null)
		{
			return "Admin Not Found!";
		}
		else
		{
			if(adminData.getPassword().equals(pass))
			{
				return "Login Successful! Welcome :)";
			}
			else
			{
				return "Wrong Password :(";
			}
		}
	}
	

	public String addUser(UserModel um) {
		ur.save(um);
		return "User Created Successfully!";
	}

	public String delUser(int id) {
		ur.deleteById(id);
		return "User Deleted Successfully!";
	}

	public String update(UserModel um) {
		ur.save(um);
		return null;
	}
	
	public void addLoan(LoanApplicationModel lam)
	{
		lar.save(lam);
	}
	
	
	

	
}
