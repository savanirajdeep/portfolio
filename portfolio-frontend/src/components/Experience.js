import React from 'react';
// import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Experience = ({ experiences }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    
    if (diffYears > 0) {
      return `${diffYears} year${diffYears > 1 ? 's' : ''}${diffMonths > 0 ? ` ${diffMonths} month${diffMonths > 1 ? 's' : ''}` : ''}`;
    }
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and the impact I've made in various organizations.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

            <div className="space-y-12">
              {experiences?.map((experience, index) => (
                <div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="card p-6 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Current Badge */}
                      {experience.isCurrent && (
                        <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-4">
                          Current Position
                        </div>
                      )}

                      {/* Job Title and Company */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary-600 font-medium">
                          <Building size={16} />
                          <span>{experience.company}</span>
                        </div>
                      </div>

                      {/* Location and Duration */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>
                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                          </span>
                        </div>
                        <span className="text-primary-600 font-medium">
                          {getDuration(experience.startDate, experience.endDate)}
                        </span>
                      </div>

                      {/* Description */}
                      {experience.description && (
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                      )}

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <span className="text-primary-600 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Experience Summary
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {experiences?.length || 0}
                  </div>
                  <div className="text-gray-600">Companies</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {experiences?.reduce((total, exp) => {
                      const start = new Date(exp.startDate);
                      const end = exp.endDate ? new Date(exp.endDate) : new Date();
                      return total + Math.floor((end - start) / (1000 * 60 * 60 * 24 * 365));
                    }, 0) || 0}+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {experiences?.reduce((total, exp) => total + (exp.achievements?.length || 0), 0) || 0}
                  </div>
                  <div className="text-gray-600">Key Achievements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 