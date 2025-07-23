import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import JarvisUI from './JarvisUI';

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left column: Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-4"
            >
              <a href="https://github.com/Vedant-Patil-007/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-xl">👨‍💻</span>
              </a>
              <a href="https://www.linkedin.com/in/vedant-patil-34b098235/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-xl">💼</span>
              </a>
              <a href="https://x.com/__VedantPatil" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="https://www.instagram.com/__vedantpatil___/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-xl">📸</span>
              </a>
              <a href="mailto:vspatil2004@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <span className="text-xl">✉️</span>
              </a>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-cyan-400"
              >
                Vedant Patil
              </motion.span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-200/80"
            >
              Data Science Innovator
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-cyan-100/70 text-lg max-w-2xl"
            >
              Leveraging advanced AI and machine learning techniques to transform complex data into actionable insights.
              Specialized in predictive analytics, data visualization, and developing intelligent solutions that drive
              business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/projects"
                className="btn-primary bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Quick Access Portal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="pt-8"
            >
              <h3 className="text-cyan-300 font-semibold mb-4 flex items-center">
                <span className="mr-2">🔗</span>
                Quick Access Portal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/about"
                  className="card group bg-black/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h4 className="text-cyan-400 group-hover:text-cyan-300 font-semibold mb-2 flex items-center">
                    <span className="mr-2">👤</span>
                    Profile Analysis →
                  </h4>
                  <p className="text-cyan-100/70 text-sm">
                    Access detailed background and expertise information
                  </p>
                </Link>
                <Link
                  to="/projects"
                  className="card group bg-black/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h4 className="text-cyan-400 group-hover:text-cyan-300 font-semibold mb-2 flex items-center">
                    <span className="mr-2">🚀</span>
                    Project Database →
                  </h4>
                  <p className="text-cyan-100/70 text-sm">
                    Browse through completed and ongoing projects
                  </p>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: JARVIS UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <JarvisUI />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;