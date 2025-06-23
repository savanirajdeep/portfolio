import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(projects?.map(project => project.category) || [])];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects?.filter(project => project.category === activeCategory) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Mobile App':
        return 'bg-blue-100 text-blue-800';
      case 'Web App':
        return 'bg-green-100 text-green-800';
      case 'IoT':
        return 'bg-purple-100 text-purple-800';
      case 'Desktop App':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent projects and technical achievements.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card overflow-hidden h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl || 'https://via.placeholder.com/400x300?text=Project'}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    
                    {/* Featured Badge */}
                    {project.isFeatured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                        <Star size={12} />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className={`absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </div>

                    {/* Overlay Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center space-x-4"
                    >
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors duration-200"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                              <span className="text-primary-600 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                          {project.features.length > 3 && (
                            <li className="text-xs text-primary-600 font-medium">
                              +{project.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 5).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-sm flex items-center justify-center space-x-2"
                        >
                          <Eye size={16} />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Projects Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {projects?.length || 0}
                  </div>
                  <div className="text-gray-600">Total Projects</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {projects?.filter(p => p.isFeatured).length || 0}
                  </div>
                  <div className="text-gray-600">Featured Projects</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {new Set(projects?.map(p => p.category) || []).size}
                  </div>
                  <div className="text-gray-600">Categories</div>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {projects?.reduce((total, p) => total + (p.technologies?.length || 0), 0) || 0}
                  </div>
                  <div className="text-gray-600">Technologies Used</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 