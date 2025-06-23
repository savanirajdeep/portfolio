package com.rajdeepsavani.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @ElementCollection
    @CollectionTable(name = "project_features", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "feature", columnDefinition = "TEXT")
    private List<String> features;
    
    @ElementCollection
    @CollectionTable(name = "project_technologies", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "technology")
    private List<String> technologies;
    
    @Column
    private String githubUrl;
    
    @Column
    private String liveUrl;
    
    @Column
    private String imageUrl;
    
    @Column
    private String category; // e.g., "Mobile App", "Web App", "IoT", etc.
    
    @Column
    private Integer displayOrder;
    
    @Column
    private Boolean isFeatured;
} 