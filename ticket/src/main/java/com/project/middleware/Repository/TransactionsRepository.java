package com.project.middleware.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.middleware.model.Transactions;
@Repository 
public interface TransactionsRepository extends JpaRepository<Transactions,Long> {
  public Transactions findByTransactionCode(Long transactionCode);

}
