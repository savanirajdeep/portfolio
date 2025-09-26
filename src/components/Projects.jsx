const Projects = () => {
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
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title from-slate-700 via-blue-800 to-blue-400">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my most impactful projects, demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="from-slate-700 via-blue-800 to-blue-400 p-8 text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-gradient-to-r from-primary-500 from-slate-700 via-blue-550 to-blue-500
 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="mt-6">
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                    View Project Details
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
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