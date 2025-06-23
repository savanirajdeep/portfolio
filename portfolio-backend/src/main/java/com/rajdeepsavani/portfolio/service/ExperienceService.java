package com.rajdeepsavani.portfolio.service;

import com.rajdeepsavani.portfolio.entity.Experience;
import com.rajdeepsavani.portfolio.repository.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceService {
    
    private final ExperienceRepository experienceRepository;
    
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAllByOrderByStartDateDesc();
    }
    
    public List<Experience> getCurrentExperiences() {
        return experienceRepository.findByIsCurrentTrueOrderByStartDateDesc();
    }
    
    public Experience getExperienceById(Long id) {
        return experienceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience not found with id: " + id));
    }
    
    public Experience createExperience(Experience experience) {
        return experienceRepository.save(experience);
    }
    
    public Experience updateExperience(Long id, Experience experience) {
        Experience existingExperience = getExperienceById(id);
        existingExperience.setTitle(experience.getTitle());
        existingExperience.setCompany(experience.getCompany());
        existingExperience.setLocation(experience.getLocation());
        existingExperience.setStartDate(experience.getStartDate());
        existingExperience.setEndDate(experience.getEndDate());
        existingExperience.setIsCurrent(experience.getIsCurrent());
        existingExperience.setDescription(experience.getDescription());
        existingExperience.setAchievements(experience.getAchievements());
        existingExperience.setTechnologies(experience.getTechnologies());
        existingExperience.setDisplayOrder(experience.getDisplayOrder());
        return experienceRepository.save(existingExperience);
    }
    
    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }
} 