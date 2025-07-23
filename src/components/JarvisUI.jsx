import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const JarvisUI = () => {
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  // Tech stack and languages data
  const techStackData = {
    labels: ['Python', 'Data Analysis', 'Machine Learning', 'SQL', 'Deep Learning', 'Statistics', 'NLP', 'Computer Vision'],
    datasets: [{
      label: 'Proficiency Level',
      data: [95, 90, 85, 88, 82, 87, 80, 78],
      backgroundColor: 'rgba(0, 195, 255, 0.6)',
      borderColor: 'rgba(0, 195, 255, 1)',
      borderWidth: 1,
      borderRadius: 4,
    }]
  };

  const [loadingSkills, setLoadingSkills] = useState(Array(8).fill(0));

  useEffect(() => {
    const animateSkills = async () => {
      for (let i = 0; i <= 100; i += 2) {
        setLoadingSkills(prev => 
          prev.map((val, idx) => 
            Math.min(i, techStackData.datasets[0].data[idx])
          )
        );
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    };
    if (!loading) {
      animateSkills();
    }
  }, [loading]);

  const barOptions = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          callback: value => `${value}%`
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
      setLoading(false);
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative">
      {/* Holographic overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="space-y-8 p-6 backdrop-blur-sm bg-black/40 rounded-xl border border-cyan-500/30"
      >
        {/* JARVIS-style loading animation */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500" />
          </div>
        )}

        {/* System status display */}
        <div className="flex items-center justify-between text-cyan-400">
          <span className="text-sm font-mono">SYSTEM STATUS: ONLINE</span>
          <span className="text-sm font-mono">{new Date().toLocaleTimeString()}</span>
        </div>

        {/* Tech Stack Proficiency */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-300 flex items-center">
            <span className="mr-2">⚡</span>
            Tech Stack Proficiency
          </h3>
          <div className="h-96 bg-black/50 rounded-lg p-4">
            {loading ? (
              <div className="h-full flex items-center justify-center">
                <div className="space-y-4 w-full">
                  {loadingSkills.map((value, index) => (
                    <div key={index} className="relative h-8">
                      <div className="absolute left-0 top-0 h-full w-full bg-cyan-500/20 rounded"></div>
                      <div 
                        className="absolute left-0 top-0 h-full bg-cyan-500/60 rounded transition-all duration-300"
                        style={{ width: `${value}%` }}
                      ></div>
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-cyan-300 text-sm">
                        {techStackData.labels[index]}
                      </div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-300 text-sm">
                        {value}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Bar data={techStackData} options={barOptions} />
            )}
          </div>
        </div>

        {/* Resume Download */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-cyan-300 flex items-center">
            <span className="mr-2">📄</span>
            Resume Access
          </h3>
          <div className="bg-black/50 rounded-lg p-6 flex items-center justify-between border border-cyan-500/30">
            <div className="text-cyan-100">
              <p className="font-semibold">Download My Resume</p>
              <p className="text-sm text-cyan-100/70">Get a detailed overview of my skills and experience</p>
            </div>
            <a 
              href="/my resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 flex items-center"
            >
              <span className="mr-2">📥</span>
              Download PDF
            </a>
          </div>
        </div>

        {/* Real-time metrics */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Projects Completed', value: '7', icon: '🎯' },
            { label: 'Code Efficiency', value: '82%', icon: '⚡' },
            { label: 'Success Rate', value: '90%', icon: '✨' }
          ].map((metric, index) => (
            <div
              key={index}
              className="p-4 bg-black/50 rounded-lg border border-cyan-500/30 text-center"
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className="text-cyan-300 text-xl font-bold">{metric.value}</div>
              <div className="text-sm text-cyan-100/70">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default JarvisUI;