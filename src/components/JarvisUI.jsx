import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const JarvisUI = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="bg-cyan-900/40 rounded-2xl p-5 space-y-4">

      {/* Featured Research Card */}
      <div className="bg-black/80 rounded-xl p-5 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>

        <h3 className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-2">Featured Research</h3>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          Hallucination Detection in LLMs
        </h2>
        <p className="text-cyan-100/70 text-sm mb-4">
          Retrieval-Augmented Generation (RAG) for DSA.
        </p>

        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Publication
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Tech Stack & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column: Tech Stack (Takes 2/3 width) */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="text-cyan-300 font-semibold flex items-center text-sm uppercase tracking-wide">
            <span className="mr-2">⚡</span> Tech Stack
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {/* GenAI & NLP - Highlighted */}
            <div className="bg-cyan-900/20 rounded-lg p-3 border border-cyan-400/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors"></div>
              <h4 className="text-sm font-bold text-cyan-300 mb-2 uppercase tracking-wider relative z-10">Generative AI & Research</h4>
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {["LangChain", "RAG Pipelines", "Vector DBs", "LLMs (Llama 3/GPT-4)", "Hugging Face", "Prompt Eng."].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-medium hover:bg-cyan-400/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Deep Learning & ML */}
              <div className="bg-black/40 rounded-lg p-2.5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <h4 className="text-xs font-bold text-gray-400 mb-1.5 uppercase">Machine Learning Core</h4>
                <div className="flex flex-wrap gap-1">
                  {["PyTorch", "TensorFlow", "Scikit-learn", "CV", "NLTK"].map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-medium hover:bg-cyan-400/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* MLOps & Engineering */}
              <div className="bg-black/40 rounded-lg p-2.5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <h4 className="text-xs font-bold text-gray-400 mb-1.5 uppercase">Deployment & Eng.</h4>
                <div className="flex flex-wrap gap-1">
                  {["Docker", "FastAPI", "Git/GitHub", "AWS", "Streamlit"].map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-medium hover:bg-cyan-400/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Science Foundation */}
            <div className="bg-black/40 rounded-lg p-2.5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <h4 className="text-xs font-bold text-gray-400 mb-1.5 uppercase">Data Analysis</h4>
              <div className="flex flex-wrap gap-1">
                {["Python", "SQL", "Pandas", "NumPy", "Data Visualization"].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-xs font-medium hover:bg-cyan-400/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:scale-105 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: CV & Stats (Takes 1/3 width) */}
        <div className="space-y-3 pt-8">
          {/* CV Card */}
          <div className="bg-cyan-900/20 rounded-lg p-3 border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-900/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-cyan-100">
                <p className="font-semibold text-sm mb-0.5">Curriculum Vitae</p>
                <p className="text-[10px] text-cyan-100/70">Academic & Professional</p>
              </div>
              <span className="text-lg">📄</span>
            </div>
            <a
              href="/my resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-1.5 bg-cyan-400 hover:bg-cyan-600 text-black font-bold rounded-md transition-all duration-300 flex items-center justify-center text-xs"
            >
              <span className="mr-1.5">📥</span>
              Download
            </a>
          </div>

          {/* Stats */}
          <div className="space-y-3">
            {[
              { label: 'Focus', value: 'Healthcare & Finance AI', icon: '🎯' },
              { label: 'Research Paper', value: '1 Published', icon: '📚' }
            ].map((metric, index) => (
              <div
                key={index}
                className="p-2.5 bg-black/40 rounded-lg border border-cyan-500/30 flex items-center gap-3 backdrop-blur-sm hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-lg">{metric.icon}</div>
                <div className="text-left overflow-hidden">
                  <div className="text-cyan-300 text-sm font-bold leading-tight truncate">{metric.value}</div>
                  <div className="text-[10px] text-cyan-100/70 truncate">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JarvisUI;