package com.declanmurphy.dynamicscrm.services;

import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.exceptions.ClientIdException;
import com.declanmurphy.dynamicscrm.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Client saveOrUpdateClient(Client client) {

        try {
            client.setClientIdentifier(client.getClientIdentifier().toUpperCase());
            return clientRepository.save(client);

        }catch (Exception e) {
        throw new ClientIdException("Client ID '" + client.getClientIdentifier().toUpperCase()+"' already exists");
        }


    }

    public Client findClientByIdentifier(String clientId) {

        Client client = clientRepository.findByClientIdentifier(clientId.toUpperCase());

        if (client == null) {
            throw new ClientIdException("Client ID '" + clientId +"' does not exists");
        }

        return client;
    }

    public Iterable<Client> findAllClients(){
        return clientRepository.findAll();
    }

    public void deleteClientByIdentifier(String clientId){
        Client client = clientRepository.findByClientIdentifier(clientId.toUpperCase());

        if (client == null) {
            throw new ClientIdException("Client with ID '"+clientId+"' does not exist");
        }

        clientRepository.delete(client);
    }

}
