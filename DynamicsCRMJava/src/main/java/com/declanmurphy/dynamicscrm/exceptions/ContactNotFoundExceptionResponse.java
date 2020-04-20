package com.declanmurphy.dynamicscrm.exceptions;

public class ContactNotFoundExceptionResponse {

    private String ContactNotFound;

    public ContactNotFoundExceptionResponse(String contactNotFound) {
        ContactNotFound = contactNotFound;
    }

    public String getContactNotFound() {
        return ContactNotFound;
    }

    public void setContactNotFound(String contactNotFound) {
        ContactNotFound = contactNotFound;
    }
}
