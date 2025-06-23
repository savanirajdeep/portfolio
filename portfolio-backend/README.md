# Portfolio Backend

A Spring Boot backend application for Rajdeep Savani's portfolio website.

## Tech Stack

- **Java 17**
- **Spring Boot 3.5.3**
- **Spring Data JPA**
- **Spring Security**
- **MySQL Database**
- **Maven**
- **Lombok**

## Features

- RESTful API endpoints for portfolio data
- Database persistence with JPA/Hibernate
- CORS configuration for frontend integration
- Automatic data initialization with resume data
- Comprehensive API documentation

## Prerequisites

- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher

## Setup Instructions

### 1. Database Setup

1. Install MySQL if not already installed
2. Create a database (optional - the application will create it automatically)
3. Update database credentials in `application.properties` if needed

### 2. Configuration

Update the database configuration in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Running the Application

```bash
# Navigate to the backend directory
cd portfolio-backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## API Endpoints

### Portfolio Data

- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/featured` - Get featured portfolio data

### Personal Information

- `GET /api/personal-info` - Get personal information
- `GET /api/personal-info/{id}` - Get personal information by ID
- `POST /api/personal-info` - Create personal information
- `PUT /api/personal-info/{id}` - Update personal information
- `DELETE /api/personal-info/{id}` - Delete personal information

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/category/{category}` - Get skills by category
- `GET /api/skills/{id}` - Get skill by ID
- `POST /api/skills` - Create skill
- `PUT /api/skills/{id}` - Update skill
- `DELETE /api/skills/{id}` - Delete skill

### Experience

- `GET /api/experiences` - Get all experiences
- `GET /api/experiences/current` - Get current experiences
- `GET /api/experiences/{id}` - Get experience by ID
- `POST /api/experiences` - Create experience
- `PUT /api/experiences/{id}` - Update experience
- `DELETE /api/experiences/{id}` - Delete experience

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/category/{category}` - Get projects by category
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Education

- `GET /api/education` - Get all education
- `GET /api/education/current` - Get current education
- `GET /api/education/{id}` - Get education by ID
- `POST /api/education` - Create education
- `PUT /api/education/{id}` - Update education
- `DELETE /api/education/{id}` - Delete education

## Data Structure

### Personal Information
```json
{
  "id": 1,
  "name": "Rajdeep Savani",
  "title": "Java Developer",
  "phone": "+1(813) 606-8695",
  "email": "rajdeep.s@cvtechmail.com",
  "location": "Florida",
  "linkedinUrl": "https://linkedin.com/in/rajdeepsavani",
  "githubUrl": "https://github.com/rajdeepsavani",
  "summary": "Java Developer with 3 years of experience...",
  "profileImageUrl": "https://via.placeholder.com/300x300?text=RS"
}
```

### Skill
```json
{
  "id": 1,
  "name": "Spring Boot",
  "category": "Frameworks",
  "proficiencyLevel": 5,
  "description": "Microservices and RESTful API development",
  "iconUrl": null,
  "displayOrder": 7
}
```

### Experience
```json
{
  "id": 1,
  "title": "Java Developer",
  "company": "Freddie Mac",
  "location": "USA",
  "startDate": "2024-05-01",
  "endDate": null,
  "isCurrent": true,
  "description": "Developing microservices architecture...",
  "achievements": ["Followed agile methodologies...", "Developed microservices architecture..."],
  "technologies": ["Spring Boot", "Spring MVC", "AWS"],
  "displayOrder": 1
}
```

### Project
```json
{
  "id": 1,
  "name": "SAMVAD – Accessible Chat Application",
  "description": "A chat application designed specifically for visually impaired users...",
  "features": ["Streamlined chat application...", "Developed advanced accessibility features..."],
  "technologies": ["Kotlin", "MVVM", "Firebase"],
  "githubUrl": "https://github.com/rajdeepsavani/samvad",
  "liveUrl": null,
  "imageUrl": "https://via.placeholder.com/400x300?text=SAMVAD",
  "category": "Mobile App",
  "displayOrder": 1,
  "isFeatured": true
}
```

### Education
```json
{
  "id": 1,
  "degree": "Masters in Computer Science",
  "institution": "University of South Florida",
  "location": "Tampa, USA",
  "startDate": "2023-08-01",
  "endDate": "2025-05-31",
  "isCurrent": true,
  "description": "Graduate studies in Computer Science...",
  "gpa": null,
  "displayOrder": 1
}
```

## Development

### Project Structure
```
src/main/java/com/rajdeepsavani/portfolio/
├── PortfolioBackendApplication.java
├── config/
│   ├── SecurityConfig.java
│   └── DataInitializer.java
├── controller/
│   ├── PortfolioController.java
│   ├── PersonalInfoController.java
│   ├── SkillController.java
│   ├── ExperienceController.java
│   ├── ProjectController.java
│   └── EducationController.java
├── entity/
│   ├── PersonalInfo.java
│   ├── Skill.java
│   ├── Experience.java
│   ├── Project.java
│   └── Education.java
├── repository/
│   ├── PersonalInfoRepository.java
│   ├── SkillRepository.java
│   ├── ExperienceRepository.java
│   ├── ProjectRepository.java
│   └── EducationRepository.java
└── service/
    ├── PersonalInfoService.java
    ├── SkillService.java
    ├── ExperienceService.java
    ├── ProjectService.java
    └── EducationService.java
```

## Testing

Run the tests using Maven:

```bash
mvn test
```

## Deployment

The application can be deployed to various cloud platforms:

1. **AWS**: Use AWS Elastic Beanstalk or EC2
2. **Google Cloud**: Use Google App Engine or Compute Engine
3. **Heroku**: Use Heroku's Java support
4. **Docker**: Containerize the application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 