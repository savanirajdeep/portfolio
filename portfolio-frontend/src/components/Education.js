import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = ({ education }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My academic journey and educational achievements.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>

              <div className="space-y-12">
                {education?.map((edu, index) => (
                  <motion.div
                    key={edu.id}
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
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="card p-6 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Current Badge */}
                        {edu.isCurrent && (
                          <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-4">
                            Currently Enrolled
                          </div>
                        )}

                        {/* Degree and Institution */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 text-primary-600 mb-2">
                            <GraduationCap size={20} />
                            <h3 className="text-xl font-bold text-gray-900">
                              {edu.degree}
                            </h3>
                          </div>
                          <div className="text-lg font-semibold text-gray-700">
                            {edu.institution}
                          </div>
                        </div>

                        {/* Location and Duration */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>
                              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </span>
                          </div>
                          <span className="text-primary-600 font-medium">
                            {getDuration(edu.startDate, edu.endDate)}
                          </span>
                        </div>

                        {/* GPA */}
                        {edu.gpa && (
                          <div className="mb-4">
                            <div className="flex items-center space-x-2">
                              <Award size={16} className="text-primary-600" />
                              <span className="text-sm text-gray-600">
                                GPA: <span className="font-semibold text-gray-900">{edu.gpa}</span>
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Description */}
                        {edu.description && (
                          <p className="text-gray-600 leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Educational Journey
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {education?.length || 0}
                  </div>
                  <div className="text-gray-600">Degrees</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {education?.reduce((total, edu) => {
                      const start = new Date(edu.startDate);
                      const end = edu.endDate ? new Date(edu.endDate) : new Date();
                      return total + Math.floor((end - start) / (1000 * 60 * 60 * 24 * 365));
                    }, 0) || 0}+
                  </div>
                  <div className="text-gray-600">Years of Study</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {education?.filter(e => e.isCurrent).length || 0}
                  </div>
                  <div className="text-gray-600">Currently Pursuing</div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Academic Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Masters in Computer Science</h5>
                    <p className="text-sm text-gray-600">
                      Currently pursuing advanced studies in software development and emerging technologies at University of South Florida.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Bachelors in Computer Science</h5>
                    <p className="text-sm text-gray-600">
                      Comprehensive foundation in programming, algorithms, and software engineering from Vellore Institute of Technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 