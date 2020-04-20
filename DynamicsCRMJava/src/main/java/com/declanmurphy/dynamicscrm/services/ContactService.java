package com.declanmurphy.dynamicscrm.services;

import com.declanmurphy.dynamicscrm.exceptions.ContactEmailException;
import com.declanmurphy.dynamicscrm.exceptions.ContactNotFoundException;
import com.declanmurphy.dynamicscrm.exceptions.ClientNotFoundException;
import com.declanmurphy.dynamicscrm.domain.Contact;
import com.declanmurphy.dynamicscrm.domain.Client;
import com.declanmurphy.dynamicscrm.repositories.BacklogRepository;
import com.declanmurphy.dynamicscrm.repositories.ContactRepository;
import com.declanmurphy.dynamicscrm.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {


    @Autowired
    ContactRepository contactRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Contact addOrUpdateContact (Contact contact, String clientId){

        Client client = clientRepository.findByClientIdentifier(clientId);
        if (client == null) {
            throw new ClientNotFoundException("Client with identifier '" + clientId + "' does not exist");
        }

        try{
                contact.setClient(client);
                contact.setClientIdentifier(client.getClientIdentifier().toUpperCase());
            return contactRepository.save(contact);
        } catch (Exception e) {
            throw new ContactEmailException("Contact with email '" + contact.getEmail().toLowerCase() + "' already exists");
        }
    }


    public Iterable<Contact> getContactsByClient(String clientId){

        Client client = clientRepository.findByClientIdentifier(clientId);

        if (client == null) {
            throw new ClientNotFoundException("Client with identifier '" + clientId + "' does not exist");
        }

        return contactRepository.findAllByClientIdentifier(clientId);

    }

    public Contact getContactById(Long contactId) {

        Contact contact = contactRepository.findContactById(contactId);

        if (contact == null) {
            throw new ContactNotFoundException("Contact with Id '" + contactId + "' does not exist");
        }

        return contact;

    }

    public void deleteContactByIdentifier(Long contactId) {
        Contact contact = contactRepository.findContactById(contactId);

        if (contact == null) {
            throw new ContactNotFoundException("Contact with Id '" + contactId + "' does not exist");
        }

        contactRepository.delete(contact);
    }



}
