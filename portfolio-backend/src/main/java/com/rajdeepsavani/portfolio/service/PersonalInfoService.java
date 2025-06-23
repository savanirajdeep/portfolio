package com.rajdeepsavani.portfolio.service;

import com.rajdeepsavani.portfolio.entity.PersonalInfo;
import com.rajdeepsavani.portfolio.repository.PersonalInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonalInfoService {
    
    private final PersonalInfoRepository personalInfoRepository;
    
    public List<PersonalInfo> getAllPersonalInfo() {
        return personalInfoRepository.findAll();
    }
    
    public PersonalInfo getPersonalInfo() {
        return personalInfoRepository.findFirstByOrderByIdAsc();
    }
    
    public PersonalInfo getPersonalInfoById(Long id) {
        return personalInfoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Personal info not found with id: " + id));
    }
    
    public PersonalInfo createPersonalInfo(PersonalInfo personalInfo) {
        return personalInfoRepository.save(personalInfo);
    }
    
    public PersonalInfo updatePersonalInfo(Long id, PersonalInfo personalInfo) {
        PersonalInfo existingInfo = getPersonalInfoById(id);
        existingInfo.setName(personalInfo.getName());
        existingInfo.setTitle(personalInfo.getTitle());
        existingInfo.setPhone(personalInfo.getPhone());
        existingInfo.setEmail(personalInfo.getEmail());
        existingInfo.setLocation(personalInfo.getLocation());
        existingInfo.setLinkedinUrl(personalInfo.getLinkedinUrl());
        existingInfo.setGithubUrl(personalInfo.getGithubUrl());
        existingInfo.setSummary(personalInfo.getSummary());
        existingInfo.setProfileImageUrl(personalInfo.getProfileImageUrl());
        return personalInfoRepository.save(existingInfo);
    }
    
    public void deletePersonalInfo(Long id) {
        personalInfoRepository.deleteById(id);
    }
} 