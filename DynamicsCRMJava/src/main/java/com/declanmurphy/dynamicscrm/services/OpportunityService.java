package com.declanmurphy.dynamicscrm.services;

import com.declanmurphy.dynamicscrm.domain.Backlog;
import com.declanmurphy.dynamicscrm.domain.Opportunity;
import com.declanmurphy.dynamicscrm.repositories.BacklogRepository;
import com.declanmurphy.dynamicscrm.repositories.OpportunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpportunityService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private OpportunityRepository opportunityRepository;


    public Opportunity addOpportunity(String clientIdentifier, Opportunity opportunity){

        Backlog backlog = backlogRepository.findByClientIdentifier(clientIdentifier);

        opportunity.setBacklog(backlog);

        Integer BacklogSequence = backlog.getOppSequence();

        BacklogSequence++;

        backlog.setOppSequence(BacklogSequence);

        opportunity.setClientSequence(backlog.getClientIdentifier() + "-" + BacklogSequence);

        opportunity.setClientIdentifier(clientIdentifier);

        if (opportunity.getOutcome() == null) { // in the future we need to handle case for outcome set to 0
            opportunity.setOutcome(3);
        }

        if (opportunity.getStage() == "" || opportunity.getStage() == null) {
            opportunity.setStage("Identifying Needs");
        }

        return opportunityRepository.save(opportunity);

    }

    public Iterable<Opportunity>findBacklogById(String id) {
        return opportunityRepository.findByClientIdentifierOrderByOutcome(id);
    }



}
