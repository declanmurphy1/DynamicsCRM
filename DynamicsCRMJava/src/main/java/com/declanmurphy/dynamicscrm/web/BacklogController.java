package com.declanmurphy.dynamicscrm.web;

import com.declanmurphy.dynamicscrm.domain.Opportunity;
import com.declanmurphy.dynamicscrm.services.MapValidationErrorService;
import com.declanmurphy.dynamicscrm.services.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private OpportunityService opportunityService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addOpportunityToBacklog(@Valid @RequestBody Opportunity opportunity, BindingResult result, @PathVariable String backlog_id) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Opportunity opportunity1 = opportunityService.addOpportunity(backlog_id, opportunity);

        return new ResponseEntity<Opportunity>(opportunity1, HttpStatus.CREATED);
    }

    @GetMapping("/{backlog_id}")
    public Iterable<Opportunity> getClientBacklog(@PathVariable String backlog_id){

        return opportunityService.findBacklogById(backlog_id);

    }

    @GetMapping("/{backlog_id}/{opp_id}")
    public ResponseEntity<?> getOpportunity(@PathVariable String backlog_id, @PathVariable String opp_id){
        Opportunity opportunity = opportunityService.findOppByClientSequence(backlog_id, opp_id);
        return new ResponseEntity<Opportunity>(opportunity, HttpStatus.OK);
    }

    @PatchMapping("/{backlog_id}/{opp_id}")
    public ResponseEntity<?> updateOpportunity(@Valid @RequestBody Opportunity opportunity, BindingResult result,
                                               @PathVariable String backlog_id, @PathVariable String opp_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Opportunity updatedOpportunity = opportunityService.updateByClientSequence(opportunity, backlog_id, opp_id);

        return new ResponseEntity<Opportunity>(updatedOpportunity, HttpStatus.OK);
    }

    @DeleteMapping("/{backlog_id}/{opp_id}")
    public ResponseEntity<?> deleteOpportunity(@PathVariable String backlog_id, @PathVariable String opp_id){
        opportunityService.deleteOpportunityByClientSequence(backlog_id,opp_id);

        return new ResponseEntity<String>("Opportunity with ID '" + opp_id + "' was deleted successfully", HttpStatus.OK);
    }

}
