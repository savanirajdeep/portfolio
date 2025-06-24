package com.rajdeepsavani.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactEmail(String name, String email, String subject, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("savanirajdeep17@gmail.com");
        mailMessage.setSubject("Portfolio Contact: " + subject);
        mailMessage.setText("Name: " + name + "\nEmail: " + email + "\n\n" + "Subject: " + subject + "\n\n" + "Message: " + message);
        mailSender.send(mailMessage);
    }
} 