import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Mental Health Analysis using Social Media Data (NLP)',
      description: 'Engineered NLP pipeline (BERT, Transformers, TF-IDF), performed data cleaning and interpretation on 50k+ social media posts to ensure reliability and actionable insights.Achieving accuracy by 18% over baseline ML models, deployed via Hugging Face Spaces for real-time explainable AI Deployed explainable AI (SHAP/LIME) on Streamlit/Hugging Face Spaces for real-time, ethical analysis.',
      tags: ['Hugging Face', 'Python', 'Transformers', 'Scikit-learn', 'Streamlit'],
      links: {
        github: 'https://github.com/Vedant-Patil-007/Mental-Health-Analysis-NLP-/tree/main',
        live: 'https://vedantpatil.in/projects',
        huggingface: 'https://huggingface.co/vedabtpatil07/Mental-Health-Analysis'
      },
      image: '/EEG.png'
    },
    {
      title: 'Generative AI-Powered Healthcare Q&A System',
      description: 'Fine-tuned LLMs with RAG, FAISS, and vector databases for accurate, source-grounded medical answers. Applied data strategy principles to align ML pipeline with accurate, business-relevant outputs. Integrated LangChain, FastAPI, CI/CD, Docker, AWS/GCP for scalable low-latency deployment. Released demo on Hugging Face Spaces (Gradio), contributing to open-source Generative AI in healthcare.',
      tags: ['FAISS', 'Python', 'LangChain', 'FastAPI', 'Docker'],
      links: {
        github: 'https://github.com/Vedant-Patil-007/Generative-AI-Powered-Healthcare-Q-A-System/tree/main',
        live: 'https://vedantpatil.in/projects'
      },
      image: '/healthcare.png'
    },
    {
      title: 'Autonomous Stock Portfolio Manager (Reinforcement Learning + Finance)',
      description: 'Designed RL agent (Q-learning, DQN) with LSTM, ARIMA, Prophet for adaptive stock trading. Built scalable pipeline with preprocessing, data warehousing, and reinforcement learning for decision-making. Processed datasets via Yahoo Finance API, Pandas, NumPy, simulating 12–15% improved returns. Built pipeline with PyTorch, TensorFlow, Scikit-learn for reward optimization and volatility reduction.',
      tags: ['PyTorch', 'Python', 'Prophet', 'Yahoo Finance API', 'Jupyter Notebook'],
      links: {
        github: 'https://github.com/Vedant-Patil-007/Autonomous-Stock-Portfolio-Manager-Reinforcement-Learning-Finance-/tree/main',
        live: 'https://vedantpatil.in/projects'
      },
      image: '/stock.png'
    },
    {
      title: 'IPL (Ball-By-Ball) Data Analysis & Visulization Apache Spark',
      description: 'Conducted in-depth analysis of IPL cricket data using Apache Spark, focusing on ball-by-ball records to uncover trends and patterns in player performance, team strategies, and match dynamics, Utilized data visualization tools to present insights from complex data sets.',
      tags: ['Apache Spark', 'Python', 'PowerBI'],
      links: {
        github: 'https://github.com/yourusername/project-one',
        live: 'https://project-one.com'
      },
      image: '/ipl.png'
    },
    {
      title: 'Telegram Bot For Converting Drive/Mirror Links Into Telegram File',
      description: 'Developed an automated Telegram bot using Python, Shell scripting, and external libraries to convert Drive and Mirror links into downloadable Telegram files.',
      tags: ['Python', 'Shell', 'Telegram Bot'],
      links: {
        github: 'https://github.com/yourusername/project-two',
        live: 'https://project-two.com'
      },
      image: '/tg.png'
    },
    {
      title: 'SMS Spam Classifier',
      description: 'Developed a high-accuracy SMS Spam Classifier using Machine Learning algorithms (Naive Bayes/SVM) to detect and filter spam messages. Implemented text preprocessing techniques like tokenization, stop-word removal, and vectorization (TF-IDF/Bag of Words). Deployed the model using Streamlit for a user-friendly web interface.',
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'NLTK', 'Machine Learning'],
      links: {
        github: 'https://github.com/Vedant-Patil-007/SMS_Spam_Classifier',
        live: 'https://vedantpatil.in/projects'
      },
      image: '/spam.png'
    },
    // Add more projects as needed
  ];

  return (
    <section className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-8"
      >
        <h2 className="section-heading">
          <span className="text-secondary font-mono">02. </span>
          Some Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-light-navy p-6 rounded-lg border border-navy-light flex flex-col hover:shadow-lg hover:bg-navy transition-all duration-300"
            >
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block mb-4">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/70 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </a>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-lightest-slate mb-2">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </a>
                </h3>
                <p className="text-light-slate text-sm mb-4 flex-grow">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="font-mono text-xs text-secondary bg-navy px-2 py-1 rounded">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-auto">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className="text-lightest-slate hover:text-secondary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {project.links.huggingface && (
                    <a href={project.links.huggingface} target="_blank" rel="noopener noreferrer"
                      className="text-lightest-slate hover:text-secondary transition-colors duration-300 flex items-center">
                      <span className="text-xl">🤗</span>
                    </a>
                  )}
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