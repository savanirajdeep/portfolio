import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const About = ({ personalInfo }) => {
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

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={personalInfo?.profileImageUrl || 'https://via.placeholder.com/400x400?text=RS'}
                    alt={personalInfo?.name || 'Profile'}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User size={20} className="text-primary-600" />
                    <span className="text-gray-700">{personalInfo?.name || 'Rajdeep Savani'}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-primary-600" />
                    <span className="text-gray-700">{personalInfo?.location || 'Florida'}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-primary-600" />
                    <span className="text-gray-700">{personalInfo?.phone || '+1(813) 606-8695'}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary-600" />
                    <span className="text-gray-700">{personalInfo?.email || 'rajdeep.s@cvtechmail.com'}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {personalInfo?.title || 'Java Developer'}
                </h3>
                
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    {personalInfo?.summary || 'Java Developer with 3 years of experience in designing, developing, and maintaining Java-based applications. Proficient in core Java, Spring Boot, Hibernate, and RESTful APIs, with a strong foundation in object-oriented programming and software development principles.'}
                  </p>
                  
                  <p className="mb-4">
                    Experienced in collaborating with cross-functional teams to deliver high-quality software solutions on time and within budget. Passionate about creating efficient, scalable, and maintainable code that solves real-world problems.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Highlights</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>3+ years of professional development experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Expertise in Spring Boot, Hibernate, and RESTful APIs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Experience with microservices architecture and cloud platforms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Strong foundation in Agile methodologies and team collaboration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Currently pursuing Masters in Computer Science at USF</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>View Projects</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 