const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Education",
      description: "Masters in Computer Science, University of South Florida"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Location",
      description: "Florida, USA"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Experience",
      description: "3+ Years in Java Development"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a dedicated Java Developer with 3 years of experience in designing, developing, 
                and maintaining Java-based applications. My expertise lies in core Java, Spring Boot, 
                Hibernate, and RESTful APIs, with a strong foundation in object-oriented programming.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently working at Freddie Mac as a Java Developer, I specialize in microservices 
                architecture and cloud technologies. I have successfully delivered scalable applications 
                that have improved system performance and reduced deployment times.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I hold a Master's degree in Computer Science from the University of South Florida and 
                am passionate about creating high-quality software solutions that make a difference.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="card p-6 flex items-start space-x-4 hover:scale-105 transition-transform duration-300 bg-white"
                >
                  <div className="flex-shrink-0 text-primary-600">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-gray-600">Reduction in Deployment Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">30%</div>
              <div className="text-gray-600">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">90%</div>
              <div className="text-gray-600">Test Coverage Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 