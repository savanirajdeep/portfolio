import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const projects = [
    {
      title: "SAMVAD – Accessible Chat Application",
      description: "A streamlined chat application for visually impaired users using MVVM architecture, improving modularity and reducing code complexity. Features comprehensive accessibility including speech-to-text, text-to-speech, emergency calling, gesture-based navigation, and voice-guided interaction with fingerprint authentication and AES encryption.",
      features: ["MVVM Architecture", "Speech Recognition", "Firebase Integration", "Biometric Auth", "AES Encryption", "Emergency Response"],
      stats: [
        { number: "40%", label: "Faster Development" },
        { number: "50%", label: "User Engagement" },
        { number: "90%", label: "Target User Usability" },
        { number: "15%", label: "Faster Emergency Response" }
      ],
      technologies: ["Kotlin", "MVVM", "Firebase", "Room", "Java", "XML", "AES Encryption", "Speech API"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      title: "Smart Door Locking System (IoT)",
      description: "An IoT-driven smart door locking system incorporating RFID authentication and passcode verification with AWS Cloud integration for real-time entry logs.",
      features: ["RFID Authentication", "AWS IoT Integration", "Real-time Logging", "BLE Technology"],
      stats: [
        { number: "60%", label: "Access Control" },
        { number: "35%", label: "Security Improvement" }
      ],
      technologies: ["Embedded C", "AWS IoT", "Arduino", "WebSocket"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10z"/>
        </svg>
      )
    },
    {
      title: "TimeSnap – Historical Visualization App",
      description: "An Android application integrating NASA World Wind SDK with AR features for historical map overlays and immersive experiences.",
      features: ["AR Integration", "NASA World Wind", "Offline Architecture", "OpenGL Rendering"],
      stats: [
        { number: "90%", label: "Success Rate" },
        { number: "Real-time", label: "AR Effects" }
      ],
      technologies: ["Kotlin", "C++", "OpenGL", "Snapchat SDK"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Intelligent Ticket Prioritization System",
      description: "Built an AI-driven classifier that prioritizes IT support tickets using NLP models trained on large historical datasets. Developed Spring Boot microservices to expose ML predictions through REST APIs, improving triage speed and consistency. Created Python TF-IDF and Logistic Regression models that reduced manual ticket review workload by 35%.",
      features: ["AI/NLP Classification", "Spring Boot Microservices", "REST APIs", "TF-IDF", "Logistic Regression", "AWS Deployment"],
      stats: [
        { number: "35%", label: "Workload Reduction" },
        { number: "Faster", label: "Triage Speed" },
        { number: "Improved", label: "Consistency" }
      ],
      technologies: ["AI", "NLP", "Spring Boot", "Python", "REST APIs", "Docker", "AWS"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      )
    },
    {
      title: "AI-Powered Healthcare Outcome Predictor",
      description: "Designed a prediction pipeline using machine learning models to forecast patient health outcomes from clinical data. Integrated Flask-based prediction APIs with backend systems to provide real-time decision support to clinicians. Built Python workflows for data cleaning, feature engineering, and model training using ensemble algorithms. Deployed prediction workflows on AWS Lambda for scalable, cost-efficient inference.",
      features: ["Machine Learning", "Flask APIs", "Real-time Predictions", "Feature Engineering", "Ensemble Algorithms", "AWS Lambda"],
      stats: [
        { number: "Real-time", label: "Decision Support" },
        { number: "Scalable", label: "AWS Lambda" },
        { number: "Cost-efficient", label: "Inference" }
      ],
      technologies: ["ML", "Python", "SQL", "Flask", "AWS Lambda", "Data Analytics"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20H2v2h20v-2h-1V2l-1.5 1.5zM19 19H5V5h14v14z"/>
          <path d="M7 10h2v7H7zm4 0h2v7h-2zm4 0h2v7h-2z"/>
        </svg>
      )
    },
    {
      title: "AI Code Review Assistant",
      description: "Built an AI-assisted tool that analyzes pull requests using LLM technology to detect code issues early. Integrated GitHub webhooks so each pull request triggers automated review, reducing review cycles. Created a Spring Boot backend to store review summaries and surface insights within CI/CD workflows. Implemented Python-based NLP logic to score code quality and highlight high-risk areas.",
      features: ["LLM Technology", "GitHub Integration", "Automated Reviews", "Spring Boot Backend", "CI/CD Integration", "Code Quality Scoring"],
      stats: [
        { number: "Reduced", label: "Review Cycles" },
        { number: "Early", label: "Issue Detection" },
        { number: "Automated", label: "Code Analysis" }
      ],
      technologies: ["LLM", "Java", "Python", "Spring Boot", "GitHub Integration", "NLP", "CI/CD"],
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      )
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
            A showcase of my most impactful projects, demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group">
                {/* Project Header with Top Border Accent */}
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900"></div>
                  <div className="px-6 pt-7 pb-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  {/* Stats Grid */}
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                        <div className="text-2xl font-bold text-slate-900 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 4 && (
                        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                          +{project.features.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies Section */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2.5 py-1 rounded-md text-xs font-normal text-gray-700 bg-gray-50 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 rounded-md text-xs font-normal text-gray-600 bg-gray-50 border border-gray-200">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group/btn">
                      <span>View Project Details</span>
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
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

export default Projects 