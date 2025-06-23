package com.rajdeepsavani.portfolio.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "education")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Education {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String degree;
    
    @Column(nullable = false)
    private String institution;
    
    @Column(nullable = false)
    private String location;
    
    @Column(nullable = false)
    private LocalDate startDate;
    
    @Column
    private LocalDate endDate;
    
    @Column
    private Boolean isCurrent;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column
    private String gpa;
    
    @Column
    private Integer displayOrder;
} 