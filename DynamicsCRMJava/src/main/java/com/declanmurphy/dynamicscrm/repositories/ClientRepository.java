package com.declanmurphy.dynamicscrm.repositories;

import com.declanmurphy.dynamicscrm.domain.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
    @Override
    Iterable<Client> findAllById(Iterable<Long> iterable);
}
