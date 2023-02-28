package com.project.middleware.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity 
@Table(name="Tickets")


public class Tickets   implements Serializable {
	
	@Id 
     @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id ; 
	@Column(nullable=false, name = "user_id")
private Long userId ;
@OneToOne (fetch=FetchType.LAZY)
	   @JoinColumn (name="transaction_id ")
	@JsonIgnore
private Transactions  transaction ; 
@Column(nullable=false, name="gameId")
private Long gameId ;
@CreationTimestamp
private Date created_at ;
@Column(nullable=false)
@UpdateTimestamp
private Date updated_at ;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public Long getUserId() {
	return userId;
}
public void setUserId(Long user_id) {
	this.userId = user_id;
}
public Transactions getTransaction() {
	return transaction;
}
public void setTransaction(Transactions transaction) {
	this.transaction = transaction;
}
public Long getGame_id() {
	return gameId;
}
public void setGame_id(Long gameId) {
	this.gameId = gameId;
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

}
