import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const experiences = [
    {
      title: "Software Engineer",
      company: "Freddie Mac",
      duration: "May 2024 – Present",
      achievements: [
        "Built and operated Spring Boot microservices with secure REST endpoints (JWT, Spring Security), reducing deployment times by 40% and accelerating feature rollout",
        "Improved application performance by 30% via Spring MVC optimizations and modular design; lowered development time by 25% with reusable components",
        "Containerized services with Docker and implemented CI/CD using Jenkins/GitLab pipelines for automated builds, tests, and deployments to AWS; increased release speed by 40%",
        "Configured AWS Auto-Scaling Groups and ELB, improving reliability by 35% and reducing downtime by 40%; added CloudWatch metrics and alerts for proactive monitoring",
        "Tuned MySQL queries and indexing, cutting query execution time by 15% and improving API latency",
        "Enforced Git branching and code review standards, reducing merge conflicts by 30% and streamlining team delivery",
        "Delivered responsive UI features (HTML, CSS, Bootstrap) to support end-to-end product requirements",
        "Practiced secure SDLC with SAST/DAST awareness and OWASP controls; documented configurations and runbooks for auditability and handoffs"
      ],
      technologies: ["Spring Boot", "Spring MVC", "Spring Security", "Microservices", "Docker", "Kubernetes", "AWS", "Jenkins", "GitLab", "MySQL", "JWT", "CloudWatch"]
    },
    {
      title: "Software Engineer",
      company: "Citus Infotech",
      duration: "Jan 2022 – Jul 2023",
      achievements: [
        "Developed robust backend services for a large-scale healthcare platform using Java and Spring Boot, ensuring HIPAA compliance, 50,000+ active patient support, and 99.9% API uptime",
        "Implemented secure RESTful APIs with encryption and strict data-handling standards, improving platform security and reducing security-related incidents by 20%",
        "Integrated React-based frontends with backend APIs to streamline telemedicine workflows, enhancing real-time appointment coordination and reducing scheduling processing time by 25%",
        "Built CI/CD pipelines using Jenkins, Docker, and Git for automated AWS deployments, achieving 40% faster release cycles while maintaining code quality through unit tests and code reviews",
        "Developed advanced Python-based data analytics features using SQL and machine learning techniques to generate predictive patient outcome reports, which helped clinicians to improve medical decision efficiency"
      ],
      technologies: ["Java", "Spring Boot", "React", "RESTful APIs", "Jenkins", "Docker", "AWS", "Python", "SQL", "MySQL", "JUnit", "Machine Learning"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            My journey through different roles and companies, showcasing growth and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-300 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'}`}>
                  <div className="card p-8 hover:shadow-md transition-all duration-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
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
                            className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200 hover:bg-slate-100 transition-colors duration-200"
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