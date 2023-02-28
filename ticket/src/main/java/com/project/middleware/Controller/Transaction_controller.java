package com.project.middleware.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.middleware.Repository.TransactionsRepository;
import com.project.middleware.model.Transactions;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController 
@RequestMapping("/api/transaction")
public class Transaction_controller {
	@Autowired 
	private TransactionsRepository   repository ;
	@GetMapping("/getall")
	List<Transactions> getAll ()
	{ 
		return  repository.findAll();
	}
	@GetMapping("/getid/{id}")
	public Optional<Transactions> getbyid_Transaction(  @PathVariable ("id") Long id )
	{
		return repository.findById(id);
	}
	@GetMapping("/get/transaction/{id}")
	public Transactions getbyTransactionCode(  @PathVariable ("id") Long id )
	{
		return repository.findByTransactionCode(id);
	}
	
	@PostMapping("/create")
	public Transactions create_transactions (@RequestBody Transactions data)
	{
		return repository.save(data);
	}
	@PutMapping("/update")
	public Transactions Update_Transactions(@RequestBody Transactions data )
	{
		return repository.save(data);
		
	}
	@DeleteMapping("/delete/{id}")
	public void delete_transaction (@PathVariable ("id") Long id )
	{
		repository.deleteById(id);
	}
	

}
