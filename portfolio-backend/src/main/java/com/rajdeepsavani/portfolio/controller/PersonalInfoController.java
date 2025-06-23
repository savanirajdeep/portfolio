package com.rajdeepsavani.portfolio.controller;

import com.rajdeepsavani.portfolio.entity.PersonalInfo;
import com.rajdeepsavani.portfolio.service.PersonalInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personal-info")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class PersonalInfoController {
    
    private final PersonalInfoService personalInfoService;
    
    @GetMapping
    public ResponseEntity<PersonalInfo> getPersonalInfo() {
        return ResponseEntity.ok(personalInfoService.getPersonalInfo());
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<PersonalInfo>> getAllPersonalInfo() {
        return ResponseEntity.ok(personalInfoService.getAllPersonalInfo());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<PersonalInfo> getPersonalInfoById(@PathVariable Long id) {
        return ResponseEntity.ok(personalInfoService.getPersonalInfoById(id));
    }
    
    @PostMapping
    public ResponseEntity<PersonalInfo> createPersonalInfo(@RequestBody PersonalInfo personalInfo) {
        return ResponseEntity.ok(personalInfoService.createPersonalInfo(personalInfo));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<PersonalInfo> updatePersonalInfo(@PathVariable Long id, @RequestBody PersonalInfo personalInfo) {
        return ResponseEntity.ok(personalInfoService.updatePersonalInfo(id, personalInfo));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePersonalInfo(@PathVariable Long id) {
        personalInfoService.deletePersonalInfo(id);
        return ResponseEntity.ok().build();
    }
} 