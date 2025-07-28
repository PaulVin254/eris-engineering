import React from "react";
import { motion } from "framer-motion";

const HomeGallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Modern Kenyan family home with beautiful architecture",
      title: "Modern Family Homes",
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Elegant residential neighborhood with quality construction",
      title: "Quality Neighborhoods",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Luxurious villa construction with attention to detail",
      title: "Luxury Villas",
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      alt: "Contemporary home design with modern finishes",
      title: "Contemporary Designs",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Building Dreams Into{" "}
            <span className="text-orange-500">Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            From modern family homes to luxury villas, we bring your vision to
            life with quality construction and transparent processes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Featured large image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 relative group overflow-hidden rounded-2xl"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {galleryImages[0].title}
              </h3>
              <p className="text-gray-200">
                Premium construction with modern amenities
              </p>
            </div>
          </motion.div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              150+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Homes Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              98%
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
