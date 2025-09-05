import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'HTML & CSS',
    'TailwindCSS',
    'Git'
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
          <span className="text-secondary font-mono">01. </span>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! I'm [Your Name], and I enjoy creating things that live on the internet.
              My interest in web development started back in [year] when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at [relevant experience].
              My main focus these days is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-secondary">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10">
              <img
                src="/your-image.jpg"
                alt="Profile"
                className="rounded grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-secondary rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;