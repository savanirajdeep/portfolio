package com.rajdeepsavani.portfolio.controller;

import com.rajdeepsavani.portfolio.entity.*;
import com.rajdeepsavani.portfolio.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class PortfolioController {
    
    private final PersonalInfoService personalInfoService;
    private final SkillService skillService;
    private final ExperienceService experienceService;
    private final ProjectService projectService;
    private final EducationService educationService;
    
    @GetMapping
    public ResponseEntity<Map<String, Object>> getPortfolio() {
        Map<String, Object> portfolio = new HashMap<>();
        
        try {
            portfolio.put("personalInfo", personalInfoService.getPersonalInfo());
            portfolio.put("skills", skillService.getAllSkills());
            portfolio.put("experiences", experienceService.getAllExperiences());
            portfolio.put("projects", projectService.getAllProjects());
            portfolio.put("education", educationService.getAllEducation());
            
            return ResponseEntity.ok(portfolio);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Failed to load portfolio data: " + e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
    
    @GetMapping("/featured")
    public ResponseEntity<Map<String, Object>> getFeaturedPortfolio() {
        Map<String, Object> portfolio = new HashMap<>();
        
        try {
            portfolio.put("personalInfo", personalInfoService.getPersonalInfo());
            portfolio.put("skills", skillService.getAllSkills());
            portfolio.put("experiences", experienceService.getCurrentExperiences());
            portfolio.put("projects", projectService.getFeaturedProjects());
            portfolio.put("education", educationService.getCurrentEducation());
            
            return ResponseEntity.ok(portfolio);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", "Failed to load featured portfolio data: " + e.getMessage());
            return ResponseEntity.internalServerError().body(error);
        }
    }
} 