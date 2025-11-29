import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: "The Future of Large Language Models",
        date: "November 28, 2025",
        excerpt: "Exploring the next generation of LLMs and their potential impact on various industries. From reasoning capabilities to multimodal integration.",
        tags: ["AI", "LLM", "Future Tech"]
    },
    {
        id: 2,
        title: "Optimizing React Performance",
        date: "November 15, 2025",
        excerpt: "A deep dive into techniques for improving the performance of React applications, including memoization, lazy loading, and code splitting.",
        tags: ["React", "Web Development", "Performance"]
    },
    {
        id: 3,
        title: "Understanding Neural Networks",
        date: "October 30, 2025",
        excerpt: "A beginner-friendly guide to understanding the basics of neural networks, backpropagation, and activation functions.",
        tags: ["Machine Learning", "Neural Networks", "Education"]
    },
    {
        id: 4,
        title: "Building Scalable Systems",
        date: "October 15, 2025",
        excerpt: "Key principles and patterns for designing and building scalable software systems that can handle high traffic and data volumes.",
        tags: ["System Design", "Scalability", "Architecture"]
    },
    {
        id: 5,
        title: "The Art of Data Visualization",
        date: "September 20, 2025",
        excerpt: "How to effectively visualize complex data sets to communicate insights and tell compelling stories.",
        tags: ["Data Science", "Visualization", "Design"]
    }
];

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Latest Insights
                </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="card group hover:-translate-y-2 transition-all duration-300">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-sm text-cyan-400 font-mono">{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-400 mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
