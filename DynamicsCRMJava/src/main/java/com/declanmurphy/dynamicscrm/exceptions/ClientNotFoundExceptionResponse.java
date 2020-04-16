package com.declanmurphy.dynamicscrm.exceptions;

public class ClientNotFoundExceptionResponse {

    private String clientIdentifier;

    public ClientNotFoundExceptionResponse(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
    }

    public String getClientIdentifier() {
        return clientIdentifier;
    }

    public void setClientIdentifier(String clientIdentifier) {
        this.clientIdentifier = clientIdentifier;
    }
}
