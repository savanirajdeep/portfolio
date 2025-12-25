import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 })
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Education",
      description: "Master of Science in Computer Science, University of South Florida (Aug 2023 – May 2025)"
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
      description: "3+ Years in Software Engineering"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Passionate about building innovative solutions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Software Engineer with 3 years of experience delivering cloud-native services and secure, reliable platforms. 
                Strong focus on DevSecOps, microservices, and container orchestration with Docker and Kubernetes/OpenShift on Red Hat and AWS. 
                Skilled in Java/Spring Boot, CI/CD, observability, and security hardening (OWASP, SAST/DAST awareness).
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently working at Freddie Mac as a Software Engineer, I build and operate Spring Boot microservices with secure REST endpoints (JWT, Spring Security), 
                reducing deployment times by 40% and accelerating feature rollout. I've improved application performance by 30% via Spring MVC optimizations 
                and configured AWS Auto-Scaling Groups and ELB, improving reliability by 35% and reducing downtime by 40%.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I hold a Master's degree in Computer Science from the University of South Florida (Aug 2023 – May 2025). 
                Proven outcomes include faster delivery cycles, improved performance, and reduced operational overhead in agile environments.
              </p>
            </div>

            {/* Highlights */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`card p-6 flex items-start space-x-4 hover:shadow-md transition-all duration-200 stagger-${index + 1}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 bg-slate-100 p-3 rounded-lg text-slate-700">
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
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center card p-8 hover:shadow-md transition-all duration-200">
              <div className="text-5xl font-bold text-slate-900 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Reduction in Deployment Times</div>
            </div>
            <div className="text-center card p-8 hover:shadow-md transition-all duration-200">
              <div className="text-5xl font-bold text-slate-900 mb-2">35%</div>
              <div className="text-gray-600 font-medium">System Reliability Enhancement</div>
            </div>
            <div className="text-center card p-8 hover:shadow-md transition-all duration-200">
              <div className="text-5xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">API Uptime Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 