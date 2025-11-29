import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const recentPosts = [
    {
        id: 1,
        title: "The Future of Large Language Models",
        date: "November 28, 2025",
        excerpt: "Exploring the next generation of LLMs and their potential impact on various industries.",
        tags: ["AI", "LLM"]
    },
    {
        id: 2,
        title: "Optimizing React Performance",
        date: "November 15, 2025",
        excerpt: "A deep dive into techniques for improving the performance of React applications.",
        tags: ["React", "Performance"]
    },
    {
        id: 3,
        title: "Understanding Neural Networks",
        date: "October 30, 2025",
        excerpt: "A beginner-friendly guide to understanding the basics of neural networks.",
        tags: ["Machine Learning"]
    }
];

const HomeBlogSection = () => {
    return (
        <section className="py-6 relative border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Recent Insights
                        </span>
                    </h2>
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                        View all
                        <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recentPosts.map((post) => (
                        <Link key={post.id} to="/blog" className="block group">
                            <div className="card hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col h-full bg-black/40 border-cyan-500/20 min-h-[140px]">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate pr-2">
                                        {post.title}
                                    </h3>
                                    <span className="text-[10px] text-cyan-400 font-mono whitespace-nowrap">{post.date}</span>
                                </div>
                                <p className="text-gray-400 text-xs line-clamp-2 mb-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-1 mt-auto">
                                    {post.tags.slice(0, 2).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;
