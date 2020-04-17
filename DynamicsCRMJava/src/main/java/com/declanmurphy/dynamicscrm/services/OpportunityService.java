package com.declanmurphy.dynamicscrm.services;

import com.declanmurphy.dynamicscrm.domain.Backlog;
import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.domain.Opportunity;
import com.declanmurphy.dynamicscrm.exceptions.ClientNotFoundException;
import com.declanmurphy.dynamicscrm.repositories.BacklogRepository;
import com.declanmurphy.dynamicscrm.repositories.ClientRepository;
import com.declanmurphy.dynamicscrm.repositories.OpportunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpportunityService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private OpportunityRepository opportunityRepository;

    @Autowired
    ClientRepository clientRepository;



    public Opportunity addOpportunity(String clientIdentifier, Opportunity opportunity){

        try {
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
        } catch (Exception e) {
            throw new ClientNotFoundException("Client not Found");
        }




    }

    public Iterable<Opportunity>findBacklogById(String id) {

        Client client = clientRepository.findByClientIdentifier(id);

        if (client == null) {
            throw new ClientNotFoundException("Client with ID: '" + id + "' does not exist");
        }
        return opportunityRepository.findByClientIdentifierOrderByOutcome(id);
    }

    public Opportunity findOppByClientSequence(String backlog_id, String opp_id){

        Backlog backlog = backlogRepository.findByClientIdentifier(backlog_id);
        if (backlog == null) {
            throw new ClientNotFoundException("Client with ID: '" + backlog_id + "' does not exist");
        }

        Opportunity opportunity = opportunityRepository.findByClientSequence(opp_id);

        if (opportunity == null) {
            throw new ClientNotFoundException("Opportunity '" + opp_id + "' not found");
        }

        if (!opportunity.getClientIdentifier().equals(backlog_id)) {
            throw new ClientNotFoundException("Opportunity '" + opp_id + "' does not exist for client '" + backlog_id + "'");
        }
        
        return opportunity;
    }



}
