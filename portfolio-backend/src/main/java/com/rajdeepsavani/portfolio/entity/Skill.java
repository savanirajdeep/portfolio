package com.rajdeepsavani.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "skills")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Skill {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String category;
    
    @Column(nullable = false)
    private Integer proficiencyLevel; // 1-5 scale
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column
    private String iconUrl;
    
    @Column
    private Integer displayOrder;
} 