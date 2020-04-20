package com.declanmurphy.dynamicscrm.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ContactNotFoundException extends RuntimeException{

    public ContactNotFoundException(String message) {
        super(message);
    }
}
