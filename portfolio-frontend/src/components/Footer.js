import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {personalInfo?.name?.charAt(0) || 'R'}
                  </span>
                </div>
                <span className="text-xl font-bold">
                  {personalInfo?.name || 'Rajdeep Savani'}
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                {personalInfo?.title || 'Java Developer'} passionate about creating innovative solutions and building impactful applications.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo?.linkedinUrl || 'https://linkedin.com/in/rajdeepsavani'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo?.githubUrl || 'https://github.com/rajdeepsavani'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${personalInfo?.email || 'rajdeep.s@cvtechmail.com'}`}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.getElementById(item.toLowerCase());
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>{personalInfo?.email || 'rajdeep.s@cvtechmail.com'}</p>
                <p>{personalInfo?.phone || '+1(813) 606-8695'}</p>
                <p>{personalInfo?.location || 'Florida'}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} {personalInfo?.name || 'Rajdeep Savani'}. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Built with React, Spring Boot, and ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-700 transition-colors duration-200 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer; 