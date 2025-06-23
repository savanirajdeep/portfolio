package com.rajdeepsavani.portfolio.repository;

import com.rajdeepsavani.portfolio.entity.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    List<Experience> findAllByOrderByStartDateDesc();
    List<Experience> findByIsCurrentTrueOrderByStartDateDesc();
} 