import { motion } from "framer-motion";
import myImg from '/my-img.png';

const About = () => {
  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Hugging Face",
    "LangChain",
    "Apache Spark",
    "Tableau",
    "Power BI",
    "Matplotlib",
    "Seaborn",
    "FastAPI",
    "Docker",
    "AWS",
    "GCP",
    "Git",
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
              Hello! I'm Vedant Patil, an aspiring Data Scientist and AI
              Researcher with a strong foundation in Machine Learning, Deep
              Learning, and Generative AI. My passion lies in bridging theory
              with practice — building AI systems that not only solve problems
              but also create meaningful impact at scale.
            </p>

            <p>
              I’ve developed projects spanning NLP, Reinforcement Learning, and
              Generative AI, from mental health analysis on social media data to
              AI-powered healthcare Q&A systems. Currently, I’m conducting
              research titled “Measuring Neural Activity in the Age of AI: EEG
              Analysis of Professionals With and Without AI Assistance”
              (completion expected Oct 2025), exploring how AI influences human
              cognition and productivity.
            </p>

            <p>
              Beyond research, I’ve mentored 50+ students in Python and AI
              frameworks, taught practical data science workflows, and led
              technical communities like Team DevKraft (100+ members) and ITSA,
              collectively impacting over 1,200 students through hackathons,
              workshops, and coding initiatives. Today, my focus is on advancing
              AI-driven solutions, data strategy, and scalable systems, while
              contributing to the open-source ecosystem through tools like
              Hugging Face and LangChain.
            </p>

            <p>
              Here are some of the core technologies and frameworks I work with:
            </p>

            <ul className="grid grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-secondary">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="relative group"> */}
            {/* <div className="relative z-10"> */}
              <img
                src={myImg}
                alt="Profile"
                width="500px"
                height="3000px"
                className="rounded grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            {/* <div className="absolute inset-0 border-2 border-secondary rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div> */}
          {/* </div> */}
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default About;
