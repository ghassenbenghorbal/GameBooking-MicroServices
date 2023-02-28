package com.project.middleware.Request;

import java.util.Date;

public class ticketRequest {
	private Long user_id ; 
	private Long gameId ; 
	private  Long transactionCode; 
	private Date created_at ; 
	private Date updated_at ;
	public Long getUserId() {
		return user_id;
	}
	public void setUserId(Long user_id) {
		this.user_id = user_id;
	}
	public Long getGame_id() {
		return gameId;
	}
	public void setGame_id(Long gameId) {
		this.gameId = gameId;
	}
	public Long getTransactionCode() {
		return transactionCode;
	}
	public void settransactionCode(Long transactionCode) {
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

}
