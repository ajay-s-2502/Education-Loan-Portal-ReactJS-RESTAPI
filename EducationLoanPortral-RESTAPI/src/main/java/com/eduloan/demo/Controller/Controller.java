package com.eduloan.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.eduloan.demo.Model.LoanApplicationModel;
import com.eduloan.demo.Model.LoginModel;
import com.eduloan.demo.Model.UserModel;
import com.eduloan.demo.Service.Services;

@CrossOrigin
@RestController
public class Controller {

	@Autowired Services s;
	
	public static boolean flag1 = false;
	public static boolean flag2 = false;
	
	@PostMapping("/user/login")
	public String userLogin(@RequestBody Map<String, String> mp)
	{
		String mail = mp.get("email");
		String pass = mp.get("password");
		return s.validateUser(mail, pass);
	}
	
	@PostMapping("/user/signup")
	public String userSignup(@RequestBody LoginModel lm)
	{
//		if(flag2)
			return s.newUser(lm);
//		else
//			return "Please Login";
	}
	
	@GetMapping("/user/getProfile")
	public Optional<UserModel> getProf()
	{
//		if(flag2)
			return s.getUserProf();
//		else
//			return null;
	}
	
	@GetMapping("user/viewLoan")
	public Optional<LoanApplicationModel> viewLoan()
	{
//		if(flag2)
			return s.viewLoan();
//		else
//			return null;
	}
	
	@GetMapping("/admin/getAllLoans")
	public List<LoanApplicationModel> getAllLoans()
	{
//		if(flag1)
			return s.getAllLoans();
//		else
//			return null;
	}
	
	@PostMapping("/admin/login")
	public String adminLogin(@RequestBody Map<String, String> mp)
	{
		String mail = mp.get("email");
		String pass = mp.get("password");
		return s.validateAdmin(mail, pass);
	}
	
	@DeleteMapping("admin/deleteUser/{id}")
	public String delUser(@PathVariable int id)
	{
//		if(flag1)
			return s.delUser(id);
//		else
//			return "Please Login as Admin to Continue";
	}
	
	@PutMapping("admin/updateUser")
	public String update(@RequestBody UserModel um)
	{
//		if(flag1)
			return s.update(um);
//		else
//			return "Please Login as Admin to Continue";
	}
	
	@PostMapping("/admin/addLoan")
	public void addLoan(@RequestBody LoanApplicationModel lam)
	{
		s.addLoan(lam);
	}
}
