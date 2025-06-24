package com.rajdeepsavani.portfolio.controller;

import com.rajdeepsavani.portfolio.service.EmailService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<?> sendContactMessage(@RequestBody ContactForm form) {
        emailService.sendContactEmail(form.getName(), form.getEmail(), form.getSubject(), form.getMessage());
        return ResponseEntity.ok().build();
    }

    @Data
    public static class ContactForm {
        private String name;
        private String email;
        private String subject;
        private String message;
    }
} 