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
    labels: [
      'Python',
      'Data Analysis',
      'Machine Learning',
      'SQL',
      'Deep Learning',
      'Statistics',
      'NLP',
      "LLM's"
    ],
    // Instead of numbers, use categories for proficiency
    datasets: [{
      label: 'Proficiency Category',
      data: [3, 2, 2, 2, 1, 2, 1, 1], // 1: Good, 2: Very Good, 3: Advanced
      backgroundColor: [
        'rgba(34,197,94,0.7)',   // Advanced - green
        'rgba(6,182,212,0.7)',   // Very Good - cyan
        'rgba(6,182,212,0.7)',   // Very Good - cyan
        'rgba(6,182,212,0.7)',   // Very Good - cyan
        'rgba(251,191,36,0.7)',  // Good - yellow
        'rgba(6,182,212,0.7)',   // Very Good - cyan
        'rgba(251,191,36,0.7)',  // Good - yellow
        'rgba(251,191,36,0.7)',  // Good - yellow
      ],
      borderColor: [
        'rgba(34,197,94,1)',
        'rgba(6,182,212,1)',
        'rgba(6,182,212,1)',
        'rgba(6,182,212,1)',
        'rgba(251,191,36,1)',
        'rgba(6,182,212,1)',
        'rgba(251,191,36,1)',
        'rgba(251,191,36,1)',
      ],
      borderWidth: 1,
      borderRadius: 4,
    }]
  };

  // Map category numbers to labels
  const proficiencyLabels = {
    1: 'Good',
    2: 'Very Good',
    3: 'Advanced'
  };

  // For loading animation, show category label instead of percent
  const proficiencyCategories = [3, 2, 2, 2, 1, 2, 1, 1];

  const [loadingSkills, setLoadingSkills] = useState(Array(8).fill(0));

  useEffect(() => {
    const animateSkills = async () => {
      for (let i = 0; i <= 100; i += 10) {
        setLoadingSkills(prev =>
          prev.map((val, idx) =>
            Math.min(i, proficiencyCategories[idx] * 33.33)
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
        max: 3,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          stepSize: 1,
          callback: value => proficiencyLabels[value] || ''
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
      },
      tooltip: {
        callbacks: {
          label: context => {
            const val = context.raw;
            return ` ${proficiencyLabels[val] || ''}`;
          }
        }
      }
    }
  };

  return (
    
    <div className="bg-cyan-900/40 rounded-2xl p-6"> {/* Increased padding */}
    {/* Tech Stack Proficiency */}
    <h2 className="text-lg font-semibold text-cyan-300 flex items-center mb-3">Tech Stack Proficiency :</h2>
    <div className="h-100 bg-black/100 rounded-lg p-5 mb-4"> {/* Increased padding and margin-bottom */}
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <div className="space-y-0.5 w-full"> {/* Increased vertical spacing */}
            {proficiencyCategories.map((cat, index) => (
              <div key={index} className="relative h-9"> {/* Increased height */}
                <div className="absolute left-0 top-0 h-full w-full bg-cyan-400/20 rounded"></div>
                <div
                  className={`absolute left-0 top-0 h-full rounded transition-all duration-300 ${
                    cat === 3
                      ? 'bg-green-500/70'
                      : cat === 2
                      ? 'bg-cyan-400/70'
                      : 'bg-yellow-400/70'
                  }`}
                  style={{ width: `${loadingSkills[index]}%` }}
                ></div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 text-base">
                  {techStackData.labels[index]}
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-100 text-base font-base">
                  {proficiencyLabels[cat]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Bar data={techStackData} options={barOptions} />
      )}
    </div>
    {/* Resume Download */}
    <div className="space-y-4 mb-8">
      <h3 className="text-lg font-semibold text-cyan-300 flex items-center mb-2">
        <span className="mr-2">📄</span>
        Resume Access
      </h3>
      <div className="bg-black/100 rounded-lg p-8 flex items-center justify-between border border-cyan-500/30">
        <div className="text-cyan-100">
          <p className="font-semibold mb-2">Download My Resume</p>
          <p className="text-sm text-cyan-100/70">Get a detailed overview of my skills and experience</p>
        </div>
        <a 
          href="/my resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-1 bg-cyan-400 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center"
        >
          <span className="mr-3 p-2 ">📥</span>
           Download
        </a>
      </div>
    </div>

    {/* Real-time metrics */}
    <div className="grid grid-cols-2 gap-6">
      {[
        { label: 'Projects Completed', value: '20', icon: '🎯' },
        { label: 'Research Paper Done', value: '1', icon: '📚' }
      ].map((metric, index) => (
        <div
          key={index}
          className="p-6 bg-black/100 rounded-lg border border-cyan-500/30 text-center"
        >
          <div className="text-2xl mb-2">{metric.icon}</div>
          <div className="text-cyan-300 text-xl font-bold">{metric.value}</div>
          <div className="text-sm text-cyan-100/70">{metric.label}</div>
        </div>
      ))}
    </div>
    <div className="flex flex-col flex-wrap p-2 md:p-4">
      <p className="text-sm md:text-base break-words overflow-auto">
        {/* Your text content here */}
      </p>
    </div>
  </div>
);
};

export default JarvisUI;