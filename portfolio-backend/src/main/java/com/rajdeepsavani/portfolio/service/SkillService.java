package com.rajdeepsavani.portfolio.service;

import com.rajdeepsavani.portfolio.entity.Skill;
import com.rajdeepsavani.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {
    
    private final SkillRepository skillRepository;
    
    public List<Skill> getAllSkills() {
        return skillRepository.findAllByOrderByCategoryAscDisplayOrderAsc();
    }
    
    public List<Skill> getSkillsByCategory(String category) {
        return skillRepository.findByCategoryOrderByDisplayOrderAsc(category);
    }
    
    public Skill getSkillById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found with id: " + id));
    }
    
    public Skill createSkill(Skill skill) {
        return skillRepository.save(skill);
    }
    
    public Skill updateSkill(Long id, Skill skill) {
        Skill existingSkill = getSkillById(id);
        existingSkill.setName(skill.getName());
        existingSkill.setCategory(skill.getCategory());
        existingSkill.setProficiencyLevel(skill.getProficiencyLevel());
        existingSkill.setDescription(skill.getDescription());
        existingSkill.setIconUrl(skill.getIconUrl());
        existingSkill.setDisplayOrder(skill.getDisplayOrder());
        return skillRepository.save(existingSkill);
    }
    
    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }
} 