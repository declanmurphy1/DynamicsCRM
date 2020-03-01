package com.declanmurphy.dynamicscrm.web;


import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("")
    public ResponseEntity<Client> createNewClient(@RequestBody Client client){
        Client client1 = clientService.saveOrUpdateClient(client);
        return new ResponseEntity<Client>(client, HttpStatus.CREATED);
    }
}
