const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Freddie Mac, USA",
      duration: "May 2024 - Present",
      achievements: [
        "Followed agile methodologies for flexible and collaborative development, delivering scalable applications",
        "Developed microservices architecture, resulting in a 40% reduction in deployment times and faster feature rollout",
        "Implemented Spring MVC for developing web applications with MVC model, increasing application performance by 30% and reducing development time by 25%",
        "Applied Spring Security, reducing security vulnerabilities by 30% and enhancing application protection",
        "Executed RESTful routing using Java Spark for APIs and web services, increasing efficiency of data retrieval by 20% and enlarging API response time by 15%",
        "Configured and monitored auto-scaling groups on AWS, enhancing system reliability by 35% and decreasing downtime by 40%",
        "Optimized MySQL database queries, resulting in 15% reduction in query execution time and faster data retrieval",
        "Ensured Git best practices, reducing code conflicts by 30% and streamlining collaboration among development teams"
      ],
      technologies: ["Spring Boot", "Spring MVC", "Spring Security", "Microservices", "AWS", "MySQL", "Java Spark", "Git"]
    },
    {
      title: "Software Engineer",
      company: "Citus Infotech, India",
      duration: "January 2022 - July 2023",
      achievements: [
        "Developed comprehensive healthcare management system backend services using Java and Spring Boot for 50,000+ patient users",
        "Implemented RESTful APIs with 99.9% uptime ensuring scalable data processing and compliance with healthcare encryption standards",
        "Collaborated in agile teams integrating React frontend interfaces with backend APIs for seamless telemedicine functionality",
        "Optimized appointment processing performance through system enhancements, achieving 25% reduction in processing time for patient scheduling",
        "Established CI/CD pipelines using Jenkins, Docker, and Git for automated AWS deployment with 40% faster releases",
        "Conducted comprehensive unit testing and code reviews for EHR modules, identifying security vulnerabilities and maintaining data integrity",
        "Developed Python-based data analytics features with SQL and machine learning for generating predictive patient outcome reports",
        "Migrated legacy systems to microservices architecture within cross-functional teams, improving scalability and clinical decision-making efficiency by 20%"
      ],
      technologies: ["Java", "Spring Boot", "React", "RESTful APIs", "Jenkins", "Docker", "AWS", "Python", "MySQL", "JUnit"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through different roles and companies, showcasing growth and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 h-full hidden lg:block from-slate-700 via-blue-800 to-blue-400
"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'}`}>
                  <div className="card p-8 hover:scale-105 transition-transform duration-300 bg-white">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-600 mb-1">
                        {experience.company}
                      </p>
                      <p className="text-gray-600">
                        {experience.duration}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-primary-600 mr-3 mt-1">▸</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              <div className="ml-16">
                <div className="card p-6 bg-white">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary-600 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mb-1">
                      {experience.company}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {experience.duration}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm">
                          <span className="text-primary-600 mr-2 mt-1">▸</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 