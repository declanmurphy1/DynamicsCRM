package com.declanmurphy.dynamicscrm.exceptions;

public class ContactEmailExceptionResponse {

    private String email;

    public ContactEmailExceptionResponse(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
