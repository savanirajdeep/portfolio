package com.rajdeepsavani.portfolio.controller;

import com.rajdeepsavani.portfolio.entity.Education;
import com.rajdeepsavani.portfolio.service.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/education")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class EducationController {
    
    private final EducationService educationService;
    
    @GetMapping
    public ResponseEntity<List<Education>> getAllEducation() {
        return ResponseEntity.ok(educationService.getAllEducation());
    }
    
    @GetMapping("/current")
    public ResponseEntity<List<Education>> getCurrentEducation() {
        return ResponseEntity.ok(educationService.getCurrentEducation());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Education> getEducationById(@PathVariable Long id) {
        return ResponseEntity.ok(educationService.getEducationById(id));
    }
    
    @PostMapping
    public ResponseEntity<Education> createEducation(@RequestBody Education education) {
        return ResponseEntity.ok(educationService.createEducation(education));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Education> updateEducation(@PathVariable Long id, @RequestBody Education education) {
        return ResponseEntity.ok(educationService.updateEducation(id, education));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
        return ResponseEntity.ok().build();
    }
} 