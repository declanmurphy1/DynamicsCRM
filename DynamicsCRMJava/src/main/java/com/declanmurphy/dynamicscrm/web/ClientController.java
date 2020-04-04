package com.declanmurphy.dynamicscrm.web;


import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.services.ClientService;
import com.declanmurphy.dynamicscrm.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
        public ResponseEntity<?> createNewClient(@Valid @RequestBody Client client, BindingResult result){

            ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
            if (errorMap != null) return errorMap;

            Client client1 = clientService.saveOrUpdateClient(client);
            return new ResponseEntity<Client>(client1, HttpStatus.CREATED);
    }

    @GetMapping("/{clientId}")
    public ResponseEntity<?> getClientById(@PathVariable String clientId){
        Client client = clientService.findClientByIdentifier(clientId);

        return new ResponseEntity<Client>(client, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Client> getAllClients(){
        return clientService.findAllClients();
    }

    @DeleteMapping("/{clientId}")
    public ResponseEntity<?> deleteClient(@PathVariable String clientId) {
        clientService.deleteClientByIdentifier(clientId);

        return new ResponseEntity<String>("Client with ID '" + clientId + "' was deleted", HttpStatus.OK);
    }

}
