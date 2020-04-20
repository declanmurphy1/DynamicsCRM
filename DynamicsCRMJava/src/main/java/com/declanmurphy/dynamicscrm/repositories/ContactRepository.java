package com.declanmurphy.dynamicscrm.repositories;


import com.declanmurphy.dynamicscrm.domain.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {


    @Override
    Iterable<Contact> findAll();

    Iterable<Contact> findAllByClientIdentifier(String clientId);

    Contact findContactById(Long contactId);



}
