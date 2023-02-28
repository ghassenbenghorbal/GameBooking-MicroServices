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

import com.project.middleware.Repository.TicketRepository;
import com.project.middleware.Repository.TransactionsRepository;
import com.project.middleware.Request.ticketRequest;
import com.project.middleware.model.Tickets;
import com.project.middleware.model.Transactions;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController 
@RequestMapping("/api/ticket")
public class Tickets_Controllers {
	@Autowired 
	private TicketRepository  repository ;
	@Autowired 
	private TransactionsRepository  repository1 ;
	@GetMapping("/getall")
	List<Tickets> getAll ()
	{ 
		return  repository.findAll();
	}
	@GetMapping("/getid/{id}")
	public Optional<Tickets> getbyid_tickets(  @PathVariable ("id") Long id )
	{
		return repository.findById(id);
	}
	@GetMapping("/get/user/{id}")
	public List<Tickets> getbyuser_id(  @PathVariable ("id") Long id )
	{
		return repository.findByUserId(id);
	}
	@PostMapping("/create")
	public String create_tickets(@RequestBody  ticketRequest data)
	{  Tickets ticket = new Tickets();
	    ticket.setUserId(data.getUserId());
	    ticket.setGame_id(data.getGame_id());
	    Transactions transaction = new Transactions ();
	    transaction = repository1.findByTransactionCode(data.getTransactionCode());
	    ticket.setTransaction(transaction);
	    transaction.setTicket(ticket);
		repository.save(ticket);
		repository1.delete(transaction);
		return "Ticket created successfully";
	}
	@PutMapping("/update")
	public Tickets Update_tickets(@RequestBody Tickets  ticket )
	{
		return repository.save(ticket);
		
	}
	@DeleteMapping("/delete/{id}")
	public void delete_tickets(@PathVariable ("id") Long id )
	{
		repository.deleteById(id);
	}
	
}
