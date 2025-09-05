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
  {/* GitHub SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
  </svg>
</a>
<a href="https://www.linkedin.com/in/vedant-patil-34b098235/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
  {/* LinkedIn SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z"/>
  </svg>
</a>
<a href="https://x.com/__VedantPatil" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
  {/* X (Twitter) SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.53 2.47h3.96l-8.62 9.86 10.16 12.2h-7.98l-6.36-7.62-7.27 7.62h-3.97l9.21-10.84-9.74-11.22h8.13l5.7 6.83zm-1.13 17.03h2.2l-6.02-7.08-2.53 2.8 6.35 7.28zm-8.44-15.5h-2.18l5.6 6.45 2.53-2.8-5.95-6.35z"/>
  </svg>
</a>
<a href="https://www.instagram.com/__vedantpatil___/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
  {/* Instagram SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.35 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.35-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.35-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.35 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.51-.8.29-1.48.67-2.15 1.34-.67.67-1.05 1.35-1.34 2.15-.27.75-.45 1.63-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.16.51 2.91.29.8.67 1.48 1.34 2.15.67.67 1.35 1.05 2.15 1.34.75.27 1.63.45 2.91.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.16-.24 2.91-.51.8-.29 1.48-.67 2.15-1.34.67-.67 1.05-1.35 1.34-2.15.27-.75.45-1.63.51-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.16-.51-2.91-.29-.8-.67-1.48-1.34-2.15-.67-.67-1.35-1.05-2.15-1.34-.75-.27-1.63-.45-2.91-.51C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
  </svg>
</a>
<a href="mailto:vspatil2004@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
  {/* Email SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
  </svg>
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