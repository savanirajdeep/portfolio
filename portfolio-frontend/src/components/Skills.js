import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Globe, Users, Settings } from 'lucide-react';

const Skills = ({ skills }) => {
  console.log('Skills prop:', skills);

  const [activeCategory, setActiveCategory] = useState('All');

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {}) || {};

  const categories = ['All', ...Object.keys(skillsByCategory)];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code size={24} />;
      case 'Frameworks':
        return <Settings size={24} />;
      case 'Web Technologies':
        return <Globe size={24} />;
      case 'Databases':
        return <Database size={24} />;
      case 'Cloud & DevOps':
        return <Cloud size={24} />;
      case 'Methodologies':
        return <Users size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  const getProficiencyColor = (level) => {
    if (level >= 5) return 'bg-green-500';
    if (level >= 4) return 'bg-blue-500';
    if (level >= 3) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skillsByCategory[activeCategory] || [];

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

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various technologies and methodologies.
            </p>
          </div>

          {/* Category Filter */}
          <div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div
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
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-500">{skill.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.proficiencyLevel ? getProficiencyColor(skill.proficiencyLevel) : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {skill.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                )}
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Proficiency: {skill.proficiencyLevel}/5
                  </span>
                  {skill.iconUrl && (
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Skills Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <div key={category} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary-600">
                        {getCategoryIcon(category)}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                    <p className="text-gray-600 text-sm">
                      {categorySkills.length} skills
                    </p>
                    <div className="mt-2 flex justify-center">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => {
                          const avgLevel = Math.round(
                            categorySkills.reduce((sum, skill) => sum + skill.proficiencyLevel, 0) / categorySkills.length
                          );
                          return (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < avgLevel ? getProficiencyColor(avgLevel) : 'bg-gray-200'
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 