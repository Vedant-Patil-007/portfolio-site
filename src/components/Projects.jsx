import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'IPL (Ball-By-Ball) Data Analysis & Visulization Apache Spark',
      description: 'Conducted in-depth analysis of IPL cricket data using Apache Spark, focusing on ball-by-ball records to uncover trends and patterns in player performance, team strategies, and match dynamics, Utilized data visualization tools to present insights from complex data sets.',
      tags: ['Apache Spark', 'Python', 'PowerBI'],
      links: {
        github: 'https://github.com/yourusername/project-one',
        live: 'https://project-one.com'
      },
      image: '/project1.jpg'
    },
    {
      title: 'Telegram Bot For Converting Drive/Mirror Links Into Telegram File',
      description: 'Developed an automated Telegram bot using Python, Shell scripting, and external libraries to convert Drive and Mirror links into downloadable Telegram files.',
      tags: ['Python', 'Shell', 'Telegram Bot'],
      links: {
        github: 'https://github.com/yourusername/project-two',
        live: 'https://project-two.com'
      },
      image: '/project2.jpg'
    },
    // Add more projects as needed
  ];

  return (
    <section className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="text-secondary font-mono">02. </span>
          Some Things I've Built
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative grid md:grid-cols-2 gap-8"
            >
              {/* Project Image */}
              <div className="relative group order-1 md:order-none">
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <div className="relative z-10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/70 hover:bg-transparent transition-all duration-300"></div>
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="md:px-6">
                <p className="font-mono text-secondary mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                     className="hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </a>
                </h3>
                <div className="bg-light-navy p-6 rounded-lg mb-4">
                  <p className="text-light-slate">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="font-mono text-sm text-secondary">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                     className="text-lightest-slate hover:text-secondary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                     className="text-lightest-slate hover:text-secondary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;