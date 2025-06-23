package com.rajdeepsavani.portfolio.service;

import com.rajdeepsavani.portfolio.entity.Project;
import com.rajdeepsavani.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    
    private final ProjectRepository projectRepository;
    
    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc();
    }
    
    public List<Project> getFeaturedProjects() {
        return projectRepository.findByIsFeaturedTrueOrderByDisplayOrderAsc();
    }
    
    public List<Project> getProjectsByCategory(String category) {
        return projectRepository.findByCategoryOrderByDisplayOrderAsc(category);
    }
    
    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
    }
    
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }
    
    public Project updateProject(Long id, Project project) {
        Project existingProject = getProjectById(id);
        existingProject.setName(project.getName());
        existingProject.setDescription(project.getDescription());
        existingProject.setFeatures(project.getFeatures());
        existingProject.setTechnologies(project.getTechnologies());
        existingProject.setGithubUrl(project.getGithubUrl());
        existingProject.setLiveUrl(project.getLiveUrl());
        existingProject.setImageUrl(project.getImageUrl());
        existingProject.setCategory(project.getCategory());
        existingProject.setDisplayOrder(project.getDisplayOrder());
        existingProject.setIsFeatured(project.getIsFeatured());
        return projectRepository.save(existingProject);
    }
    
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
} 