package com.rajdeepsavani.portfolio.service;

import com.rajdeepsavani.portfolio.entity.Education;
import com.rajdeepsavani.portfolio.repository.EducationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationService {
    
    private final EducationRepository educationRepository;
    
    public List<Education> getAllEducation() {
        return educationRepository.findAllByOrderByStartDateDesc();
    }
    
    public List<Education> getCurrentEducation() {
        return educationRepository.findByIsCurrentTrueOrderByStartDateDesc();
    }
    
    public Education getEducationById(Long id) {
        return educationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Education not found with id: " + id));
    }
    
    public Education createEducation(Education education) {
        return educationRepository.save(education);
    }
    
    public Education updateEducation(Long id, Education education) {
        Education existingEducation = getEducationById(id);
        existingEducation.setDegree(education.getDegree());
        existingEducation.setInstitution(education.getInstitution());
        existingEducation.setLocation(education.getLocation());
        existingEducation.setStartDate(education.getStartDate());
        existingEducation.setEndDate(education.getEndDate());
        existingEducation.setIsCurrent(education.getIsCurrent());
        existingEducation.setDescription(education.getDescription());
        existingEducation.setGpa(education.getGpa());
        existingEducation.setDisplayOrder(education.getDisplayOrder());
        return educationRepository.save(existingEducation);
    }
    
    public void deleteEducation(Long id) {
        educationRepository.deleteById(id);
    }
} 