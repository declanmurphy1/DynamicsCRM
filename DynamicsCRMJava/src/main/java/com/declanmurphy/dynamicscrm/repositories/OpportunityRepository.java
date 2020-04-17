package com.declanmurphy.dynamicscrm.repositories;

import com.declanmurphy.dynamicscrm.domain.Opportunity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OpportunityRepository  extends CrudRepository<Opportunity, Long> {

    List<Opportunity> findByClientIdentifierOrderByOutcome(String id);

    Opportunity findByClientSequence(String sequence);


}
