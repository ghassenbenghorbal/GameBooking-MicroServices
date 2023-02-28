package com.project.middleware.model;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity 
@Table(name="Transactions")

public class Transactions  implements Serializable {

	@Id 
     @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ; 
	 @Column(name="transaction_code", unique=true,nullable=false)
	private Long transactionCode ;
	 @Column(nullable=false)
	 @CreationTimestamp
	 private Date  created_at;
	 @Column(nullable=false)
	 @UpdateTimestamp
	 private Date updated_at ;
     @OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER,mappedBy="transaction")
     @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
	 private Tickets ticket ;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getTransaction_code() {
		return transactionCode;
	}
	public void setTransaction_code(Long transactionCode) {
		this.transactionCode = transactionCode;
	}
	public Date getcreated_at() {
		return created_at;
	}
	public void setcreated_at(Date created_at) {
		this.created_at = created_at;
	}
	public Date getupdated_at() {
		return updated_at;
	}
	public void setupdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}
	public Tickets getTicket() {
		return ticket;
	}
	public void setTicket(Tickets ticket) {
		this.ticket = ticket;
	}
}
