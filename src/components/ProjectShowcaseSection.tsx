import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProjectShowcaseSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "The Nairobi Family Estate",
      location: "Kiambu, Kenya",
      description:
        "A modern 4-bedroom family home with contemporary finishes and energy-efficient design.",
      beforeImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["4 Bedrooms", "3 Bathrooms", "Modern Kitchen", "Solar Power"],
    },
    {
      title: "The Mombasa Villa",
      location: "Diani, Mombasa",
      description:
        "Luxury coastal villa with stunning ocean views and premium finishes throughout.",
      beforeImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["5 Bedrooms", "Ocean View", "Swimming Pool", "Smart Home"],
    },
    {
      title: "The Nakuru Retreat",
      location: "Nakuru, Kenya",
      description:
        "Sustainable countryside home with eco-friendly materials and breathtaking lake views.",
      beforeImage:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      specs: ["3 Bedrooms", "Lake View", "Eco-Friendly", "Garden Space"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            From Vision to <span className="text-orange-500">Completion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            See how we transform empty plots into beautiful family homes with
            precision and care.
          </motion.p>
        </div>

        {/* Project selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <Button
              key={index}
              variant={activeProject === index ? "default" : "outline"}
              onClick={() => setActiveProject(index)}
              className={`transition-all duration-300 ${
                activeProject === index
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "hover:bg-orange-50 dark:hover:bg-orange-900/20"
              }`}
            >
              {project.title}
            </Button>
          ))}
        </div>

        {/* Project showcase */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Before/After Images */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Before Construction
              </h3>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={projects[activeProject].beforeImage}
                  alt="Before construction"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  BEFORE
                </div>
              </div>
            </div>

            <div className="relative">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                After Completion
              </h3>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={projects[activeProject].afterImage}
                  alt="After construction"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AFTER
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-orange-500 font-medium mb-4">
                📍 {projects[activeProject].location}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {projects[activeProject].description}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {projects[activeProject].specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                View Full Project Details
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
