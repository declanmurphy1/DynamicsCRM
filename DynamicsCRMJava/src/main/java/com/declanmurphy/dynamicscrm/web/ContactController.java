package com.declanmurphy.dynamicscrm.web;

import com.declanmurphy.dynamicscrm.domain.Contact;
import com.declanmurphy.dynamicscrm.services.ContactService;
import com.declanmurphy.dynamicscrm.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{clientId}")
    public ResponseEntity<?> createNewContact(@Valid @RequestBody Contact contact, BindingResult result, @PathVariable String clientId) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap!=null) return errorMap;

        Contact contact1 = contactService.addOrUpdateContact(contact, clientId);

        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @GetMapping("/{clientId}")
    public Iterable<Contact> getContactsByClient(@PathVariable String clientId){

        return contactService.getContactsByClient(clientId);

    }

    @GetMapping("/id/{contact_id}")
    public Contact getContactById(@PathVariable Long contact_id){
        return contactService.getContactById(contact_id);
    }

    @DeleteMapping("/id/{contact_id}")
    public ResponseEntity<?> deleteContactById(@PathVariable Long contact_id){
        contactService.deleteContactByIdentifier(contact_id);
        return new ResponseEntity<String>("Contact with Id '" + contact_id + "' was deleted successfully.", HttpStatus.OK);
    }
}
