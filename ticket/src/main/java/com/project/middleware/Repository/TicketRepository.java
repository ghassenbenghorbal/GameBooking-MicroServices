package com.project.middleware.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import  com.project.middleware.model.Tickets;
@Repository
public interface TicketRepository extends JpaRepository<Tickets, Long> {
 List <Tickets> findByUserId (Long UserId) ;
}
