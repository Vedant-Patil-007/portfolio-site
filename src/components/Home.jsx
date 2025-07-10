import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center pt-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-header-bg border border-border-color text-text-secondary text-sm">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
            Hi, I'm <span className="text-link-color">Vedant Patil</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary">
            Building digital experiences
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl">
          Dynamic and results-driven Data Science professional with expertise in data visualization and attention to detail.
          Proficient in Python and R for data manipulation, analysis, and visualization, leveraging tools to extract insights
          from complex data sets. Eager to contribute to impactful projects with a strong foundation in data-driven
          decision-making.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-12">
            <h3 className="text-text-secondary font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/about" className="card group">
                <h4 className="text-link-color group-hover:text-link-color/80 font-semibold mb-2">
                  About Me →
                </h4>
                <p className="text-text-secondary text-sm">
                  Learn about my background, skills, and experience
                </p>
              </Link>
              <Link to="/projects" className="card group">
                <h4 className="text-link-color group-hover:text-link-color/80 font-semibold mb-2">
                  Projects →
                </h4>
                <p className="text-text-secondary text-sm">
                  Explore my latest work and side projects
                </p>
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="pt-12">
            <h3 className="text-text-secondary font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Data Science', 'Python', 'SQL', 'Excle', 'PowerBI', 'Tableau', 'MongoDB'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-header-bg border border-border-color text-text-secondary text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;