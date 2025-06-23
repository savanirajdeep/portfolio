package com.rajdeepsavani.portfolio.repository;

import com.rajdeepsavani.portfolio.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {
    // Since there's typically only one personal info record, we can add a convenience method
    PersonalInfo findFirstByOrderByIdAsc();
} 