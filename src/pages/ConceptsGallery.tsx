import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Bed, Maximize, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  slug: string;
  image: string;
  bedrooms: number;
  area: number;
  roofType: string;
  description: string;
  isComingSoon?: boolean;
}

const projects: Project[] = [
  {
    id: "5",
    title: "The Teak Geometric",
    slug: "/projects/teak-geometric",
    image: "/teak-hero.jpg",
    bedrooms: 4,
    area: 400,
    roofType: "Flat Roof",
    description:
      "Textural Modernist Villa. Warm earth tones and floating volumes.",
    isComingSoon: false,
  },
  {
    id: "2",
    title: "The Quartz Linear",
    slug: "/projects/quartz-linear",
    image: "/quartz-exterior.jpg",
    bedrooms: 4,
    area: 380,
    roofType: "Flat Roof",
    description:
      "The Urban Sanctuary. Private walled courtyard design for high-value plots.",
    isComingSoon: false,
  },
  {
    id: "3",
    title: "The Cedar Horizon",
    slug: "/projects/cedar-horizon",
    image: "/cedar-hero.jpg",
    bedrooms: 4,
    area: 420,
    roofType: "Flat Roof",
    description:
      "Organic Modern Retreat. Dissolve the walls between you and nature.",
    isComingSoon: false,
  },
  {
    id: "4",
    title: "The Bronze Vertical",
    slug: "/projects/bronze-vertical",
    image: "/bronze-hero.jpg",
    bedrooms: 4,
    area: 450,
    roofType: "Flat Roof",
    description: "High-Density Urban Luxury. Maximize your urban footprint.",
    isComingSoon: false,
  },
  {
    id: "1",
    title: "The Onyx Villa",
    slug: "/projects/onyx-villa",
    image: "/onyx-exterior.jpg",
    bedrooms: 4,
    area: 350,
    roofType: "Flat Roof",
    description: "A modern masterpiece optimized for narrow plots.",
    isComingSoon: false,
  },
  {
    id: "6",
    title: "The Mombasa Coastal Retreat",
    slug: "",
    image: "/placeholder.svg",
    bedrooms: 4,
    area: 320,
    roofType: "Flat Roof",
    description: "Breezy coastal design with large verandas.",
    isComingSoon: true,
  },
  {
    id: "5",
    title: "The Kilimani Penthouse",
    slug: "",
    image: "/placeholder.svg",
    bedrooms: 2,
    area: 180,
    roofType: "Flat Roof",
    description: "Urban sophistication for the modern professional.",
    isComingSoon: true,
  },
  {
    id: "6",
    title: "The Runda Estate Manor",
    slug: "",
    image: "/placeholder.svg",
    bedrooms: 6,
    area: 550,
    roofType: "Gable Roof",
    description: "Grand estate living with multi-generational spaces.",
    isComingSoon: true,
  },
];

const ConceptsGallery = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-orange-600 text-white text-sm px-4 py-1 hover:bg-orange-700 border-none">
              Pre-Engineered Designs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Engineering-Vetted Designs.
              <br />
              <span className="text-orange-500">Ready for Construction.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Why spend 6 months on architectural drawings? Choose a
              pre-engineered concept and break ground in 30 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const cardContent = (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${
        !project.isComingSoon
          ? "hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          : "opacity-90"
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-orange-600 text-white shadow-lg border-none">
          Engineered & Vetted
        </Badge>
        {project.isComingSoon && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <Badge className="bg-white text-slate-900 text-lg px-6 py-2 font-bold border-none">
              Launching Next Week
            </Badge>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {project.title}
        </h3>

        {/* Specs Row */}
        <div className="flex items-center gap-4 mb-4 text-slate-600">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm font-medium">{project.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            <span className="text-sm font-medium">{project.area} SQM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">{project.roofType}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Button */}
        {!project.isComingSoon ? (
          <Button
            variant="outline"
            className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold transition-all"
          >
            View Design & Cost
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full border-2 border-slate-300 text-slate-400 cursor-not-allowed bg-slate-50"
            disabled
          >
            Coming Soon
          </Button>
        )}
      </div>
    </div>
  );

  return project.isComingSoon ? (
    <div>{cardContent}</div>
  ) : (
    <Link to={project.slug} className="block h-full">
      {cardContent}
    </Link>
  );
};

export default ConceptsGallery;
