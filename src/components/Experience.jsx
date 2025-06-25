const Experience = () => {
  const experiences = [
    {
      title: "Java Developer",
      company: "Freddie Mac, USA",
      duration: "May 2024 - Present",
      achievements: [
        "Followed agile methodologies for flexible and collaborative development, delivering scalable applications",
        "Developed microservices architecture, resulting in a 40% reduction in deployment times",
        "Implemented Spring MVC, increasing application performance by 30% and reducing development time by 25%",
        "Applied Spring Security, reducing security vulnerabilities by 30%",
        "Configured auto-scaling groups on AWS, enhancing system reliability by 35%",
        "Optimized MySQL database queries, resulting in 15% reduction in query execution time"
      ],
      technologies: ["Spring Boot", "Microservices", "AWS", "MySQL", "Git"]
    },
    {
      title: "Android Developer",
      company: "TechXccess Solution, Surat, India",
      duration: "April 2022 - May 2023",
      achievements: [
        "Collaborated with multidisciplinary teams to design and implement Android applications",
        "Enhanced app performance by cutting crash rates by 40% through optimized Kotlin coding",
        "Implemented user-centric design enhancements leading to 60% increase in user engagement",
        "Integrated RESTful APIs using Retrofit and OkHttp, reducing network latency by 30%",
        "Utilized Android Jetpack components, reducing app crashes by 25%"
      ],
      technologies: ["Kotlin", "Android Jetpack", "Retrofit", "Material Design", "Room Database"]
    },
    {
      title: "Jr Java Developer",
      company: "Citus Infotech, India",
      duration: "March 2021 - March 2022",
      achievements: [
        "Attended and engaged in Agile/Scrum ceremonies including sprint planning and daily scrums",
        "Developed web applications using Java, JSP, and Servlets",
        "Incorporated SQL operations on MySQL databases to enhance data flow",
        "Fixed software bugs and lowered the bug rate by 25%",
        "Facilitated Java applications using Spring Boot and Hibernate frameworks",
        "Achieved 90% test coverage for critical application parts using JUnit"
      ],
      technologies: ["Java", "JSP", "Servlets", "Spring Boot", "JUnit"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through different roles and companies, showcasing growth and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-purple-500 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'}`}>
                  <div className="card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-1">
                        {experience.company}
                      </p>
                      <p className="text-gray-500">
                        {experience.duration}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-primary-600 mr-3 mt-1">▸</span>
                            <span className="text-gray-700">{achievement}</span>
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
                <div className="card p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary-600 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 mb-1">
                      {experience.company}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {experience.duration}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm">
                          <span className="text-primary-600 mr-2 mt-1">▸</span>
                          <span className="text-gray-700">{achievement}</span>
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