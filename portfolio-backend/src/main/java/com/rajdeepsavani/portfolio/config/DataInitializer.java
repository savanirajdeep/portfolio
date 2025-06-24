package com.rajdeepsavani.portfolio.config;

import com.rajdeepsavani.portfolio.entity.*;
import com.rajdeepsavani.portfolio.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final PersonalInfoRepository personalInfoRepository;
    private final SkillRepository skillRepository;
    private final ExperienceRepository experienceRepository;
    private final ProjectRepository projectRepository;
    private final EducationRepository educationRepository;

    @Override
    public void run(String... args) throws Exception {
        // Initialize data only if database is empty
        if (personalInfoRepository.count() == 0) {
            initializePersonalInfo();
            initializeSkills();
            initializeExperience();
            initializeProjects();
            initializeEducation();
        }
    }

    private void initializePersonalInfo() {
        PersonalInfo personalInfo = new PersonalInfo();
        personalInfo.setName("Rajdeep Savani");
        personalInfo.setTitle("Java Developer");
        personalInfo.setPhone("+1(813) 606-8695");
        personalInfo.setEmail("savanirajdeep17@gmail.com");
        personalInfo.setLocation("Florida");
        personalInfo.setLinkedinUrl("https://linkedin.com/in/rajdeepsavani");
        personalInfo.setGithubUrl("https://github.com/rajdeepsavani");
        personalInfo.setSummary("Java Developer with 3 years of experience in designing, developing, and maintaining Java-based applications. Proficient in core Java, Spring Boot, Hibernate, and RESTful APIs, with a strong foundation in object-oriented programming and software development principles. Experienced in collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget.");
        personalInfo.setProfileImageUrl("https://via.placeholder.com/300x300?text=RS");
        
        personalInfoRepository.save(personalInfo);
    }

    private void initializeSkills() {
        List<Skill> skills = Arrays.asList(
            // Languages
            new Skill(null, "Core Java", "Languages", 5, "Strong foundation in Java programming", null, 1),
            new Skill(null, "Java 8/11", "Languages", 5, "Proficient in modern Java features", null, 2),
            new Skill(null, "SQL", "Languages", 4, "Database querying and optimization", null, 3),
            new Skill(null, "JavaScript/ES6", "Languages", 4, "Frontend development and modern JS features", null, 4),
            new Skill(null, "TypeScript", "Languages", 3, "Type-safe JavaScript development", null, 5),
            
            // Frameworks
            new Skill(null, "Spring MVC", "Frameworks", 5, "Web application development with Spring", null, 6),
            new Skill(null, "Spring Boot", "Frameworks", 5, "Microservices and RESTful API development", null, 7),
            new Skill(null, "Hibernate", "Frameworks", 4, "ORM and database operations", null, 8),
            new Skill(null, "VueJS", "Frameworks", 3, "Frontend framework development", null, 9),
            new Skill(null, "ReactJS", "Frameworks", 3, "Modern frontend development", null, 10),
            new Skill(null, "Maven", "Frameworks", 4, "Build automation and dependency management", null, 11),
            new Skill(null, "Tailwind", "Frameworks", 3, "Utility-first CSS framework", null, 12),
            
            // Web Technologies
            new Skill(null, "HTML5", "Web Technologies", 4, "Semantic markup and modern HTML", null, 13),
            new Skill(null, "CSS3", "Web Technologies", 4, "Styling and responsive design", null, 14),
            new Skill(null, "Bootstrap", "Web Technologies", 4, "CSS framework for responsive design", null, 15),
            new Skill(null, "jQuery", "Web Technologies", 3, "JavaScript library for DOM manipulation", null, 16),
            new Skill(null, "Ajax", "Web Technologies", 4, "Asynchronous web requests", null, 17),
            new Skill(null, "JSON", "Web Technologies", 5, "Data interchange format", null, 18),
            new Skill(null, "XML", "Web Technologies", 3, "Markup language for data storage", null, 19),
            
            // Databases
            new Skill(null, "MySQL", "Databases", 4, "Relational database management", null, 20),
            new Skill(null, "PostgreSQL", "Databases", 3, "Advanced open-source database", null, 21),
            new Skill(null, "Elasticsearch", "Databases", 3, "Search and analytics engine", null, 22),
            new Skill(null, "Redis", "Databases", 3, "In-memory data structure store", null, 23),
            
            // Cloud & DevOps
            new Skill(null, "AWS", "Cloud & DevOps", 4, "Amazon Web Services cloud platform", null, 24),
            new Skill(null, "GCP", "Cloud & DevOps", 3, "Google Cloud Platform", null, 25),
            new Skill(null, "Git", "Cloud & DevOps", 4, "Version control system", null, 26),
            new Skill(null, "GitHub", "Cloud & DevOps", 4, "Code hosting and collaboration", null, 27),
            
            // Methodologies
            new Skill(null, "Agile", "Methodologies", 4, "Iterative development methodology", null, 28),
            new Skill(null, "Scrum", "Methodologies", 4, "Agile framework for project management", null, 29),
            new Skill(null, "SDLC", "Methodologies", 4, "Software Development Life Cycle", null, 30),
            new Skill(null, "Microservices", "Methodologies", 4, "Distributed system architecture", null, 31)
        );
        
        skillRepository.saveAll(skills);
    }

    private void initializeExperience() {
        List<Experience> experiences = Arrays.asList(
            new Experience(
                null, "Java Developer", "Freddie Mac", "USA", 
                LocalDate.of(2024, 5, 1), null, true,
                "Developing microservices architecture and web applications using Spring Boot and Spring MVC.",
                Arrays.asList(
                    "Followed agile methodologies for flexible and collaborative development, delivering scalable applications",
                    "Developed microservices architecture, resulting in a 40% reduction in deployment times",
                    "Implemented Spring MVC for developing web applications, increasing application performance by 30%",
                    "Applied Spring Security, reducing security vulnerabilities by 30%",
                    "Executed RESTful routing using Java Spark for APIs, increasing efficiency by 20%",
                    "Configured and monitored auto-scaling groups on AWS, enhancing system reliability by 35%",
                    "Optimized MySQL database queries, resulting in a 15% reduction in query execution time"
                ),
                Arrays.asList("Spring Boot", "Spring MVC", "Spring Security", "Java Spark", "AWS", "MySQL", "Agile"),
                1
            ),
            new Experience(
                null, "Android Developer", "TechXccess Solution", "Surat, India", 
                LocalDate.of(2022, 4, 1), LocalDate.of(2023, 5, 31), false,
                "Developed Android applications using Kotlin and modern Android development practices.",
                Arrays.asList(
                    "Collaborated with multidisciplinary teams to design and implement Android applications",
                    "Enhanced app performance by cutting crash rates by 40% through optimized Kotlin coding",
                    "Spearheaded UI/UX design discussions, implementing user-centric design enhancements",
                    "Integrated RESTful APIs using Retrofit and OkHttp, reducing network latency by 30%",
                    "Designed responsive user interfaces adhering to Material Design principles",
                    "Utilized Android Jetpack components to build scalable applications"
                ),
                Arrays.asList("Kotlin", "Android Jetpack", "Retrofit", "OkHttp", "Material Design", "Room Database"),
                2
            ),
            new Experience(
                null, "Jr Java Developer", "Citus Infotech", "India", 
                LocalDate.of(2021, 3, 1), LocalDate.of(2022, 3, 31), false,
                "Developed web applications using Java, JSP, and Servlets with Spring Boot framework.",
                Arrays.asList(
                    "Attended and engaged in Agile/Scrum ceremonies including sprint planning and retrospectives",
                    "Coordinated in the development of web applications using Java, JSP, and Servlets",
                    "Incorporated SQL to perform operations on MySQL databases",
                    "Fixed software bugs and lowered the bug rate by a quarter",
                    "Facilitated Java applications using Spring Boot and Hibernate frameworks",
                    "Integrated RESTful APIs to enhance client-server interaction",
                    "Managed unit testing using JUnit and obtained a test coverage of 90%"
                ),
                Arrays.asList("Java", "JSP", "Servlets", "Spring Boot", "Hibernate", "MySQL", "JUnit", "RESTful APIs"),
                3
            )
        );
        
        experienceRepository.saveAll(experiences);
    }

    private void initializeProjects() {
        List<Project> projects = Arrays.asList(
            new Project(
                null, "SAMVAD – Accessible Chat Application",
                "A chat application designed specifically for visually impaired users with advanced accessibility features including speech-to-text, text-to-speech, emergency calling, and gesture-based navigation.",
                Arrays.asList(
                    "Streamlined chat application for visually impaired users using MVVM architecture",
                    "Developed advanced accessibility features including speech-to-text and text-to-speech",
                    "Enforced advanced security measures with fingerprint authentication and AES encryption",
                    "Integrated Firebase for real-time location tracking and emergency alerts",
                    "Refined notification systems and improved real-time updates"
                ),
                Arrays.asList("Kotlin", "MVVM", "Coroutines", "Retrofit", "Firebase", "Room", "Biometric", "API"),
                "https://github.com/rajdeepsavani/samvad",
                null,
                "https://via.placeholder.com/400x300?text=SAMVAD",
                "Mobile App",
                1,
                true
            ),
            new Project(
                null, "Smart Door Locking System (IoT Project)",
                "An IoT-driven smart door locking system incorporating RFID-based authentication and passcode verification with AWS Cloud integration for real-time entry logs.",
                Arrays.asList(
                    "Assembled IoT-driven smart door locking system with RFID authentication",
                    "Applied AWS Cloud integration to maintain real-time entry logs",
                    "Leveraged Arduino-based sensor technology for instant identity validation",
                    "Implemented automated security protocols reducing unauthorized attempts by 35%"
                ),
                Arrays.asList("Embedded C", "AWS IoT SDK", "BLE", "Arduino", "WebSocket"),
                "https://github.com/rajdeepsavani/smart-door-lock",
                null,
                "https://via.placeholder.com/400x300?text=Smart+Lock",
                "IoT",
                2,
                true
            ),
            new Project(
                null, "TimeSnap – Historical Visualization App",
                "An Android application integrating NASA World Wind SDK with AR features and custom rendering pipeline for historical map overlays using OpenGL.",
                Arrays.asList(
                    "Crafted Android application integrating NASA World Wind SDK with AR features",
                    "Implemented custom rendering pipeline for historical map overlays using OpenGL",
                    "Engineered offline-first architecture utilizing Room database",
                    "Improved Snapchat Creative Kit to enable AR-powered features"
                ),
                Arrays.asList("Kotlin", "C++", "MVVM", "Room", "Firebase", "OpenGL", "Snapchat SDK"),
                "https://github.com/rajdeepsavani/timesnap",
                null,
                "https://via.placeholder.com/400x300?text=TimeSnap",
                "Mobile App",
                3,
                false
            )
        );
        
        projectRepository.saveAll(projects);
    }

    private void initializeEducation() {
        List<Education> education = Arrays.asList(
            new Education(
                null, "Masters in Computer Science", "University of South Florida", "Tampa, USA",
                LocalDate.of(2023, 8, 1), LocalDate.of(2025, 5, 31), true,
                "Graduate studies in Computer Science with focus on advanced software development and emerging technologies.",
                null,
                1
            ),
            new Education(
                null, "Bachelors in Computer Science", "Vellore Institute of Technology", "Vellore, India",
                LocalDate.of(2019, 7, 1), LocalDate.of(2023, 5, 31), false,
                "Undergraduate studies in Computer Science with comprehensive foundation in programming, algorithms, and software engineering.",
                null,
                2
            )
        );
        
        educationRepository.saveAll(education);
    }
} 