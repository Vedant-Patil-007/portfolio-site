import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CalendarDaysIcon, TagIcon } from '@heroicons/react/24/outline';

const blogPosts = [
    {
        id: 1,
        title: "The Future of Large Language Models",
        date: "November 28, 2025",
        excerpt: "Exploring the next generation of LLMs and their potential impact on various industries. From reasoning capabilities to multimodal integration.",
        content: `
            <p class="mb-4">Large Language Models (LLMs) have revolutionized the field of Artificial Intelligence, offering unprecedented capabilities in natural language understanding and generation. As we look to the future, several key trends are emerging that promise to reshape how we interact with technology.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Reasoning and Logic</h3>
            <p class="mb-4">One of the most exciting frontiers is the enhancement of reasoning capabilities. Current models are getting better at multi-step reasoning, solving complex problems that require logic rather than just pattern matching.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Multimodal Integration</h3>
            <p class="mb-4">The future is multimodal. LLMs are evolving to understand and generate not just text, but also images, audio, and video seamlessly. This opens up new possibilities for creative tools and accessibility.</p>
            <p>As these technologies mature, ethical considerations and safety alignment will remain paramount to ensuring they benefit humanity as a whole.</p>
        `,
        tags: ["AI", "LLM", "Future Tech"],
        image: "/healthcare.png" // Placeholder
    },
    {
        id: 2,
        title: "Optimizing React Performance",
        date: "November 15, 2025",
        excerpt: "A deep dive into techniques for improving the performance of React applications, including memoization, lazy loading, and code splitting.",
        content: `
            <p class="mb-4">Performance is key to a good user experience. In the React ecosystem, there are several powerful techniques to ensure your applications run smoothly.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Code Splitting</h3>
            <p class="mb-4">By splitting your code into smaller chunks, you can load only what is necessary for the current view, significantly reducing initial load times.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Memoization</h3>
            <p class="mb-4">Using <code>useMemo</code> and <code>useCallback</code> can prevent unnecessary re-renders, keeping your UI responsive even with complex state updates.</p>
            <p>Mastering these tools is essential for any serious React developer aiming to build scalable applications.</p>
        `,
        tags: ["React", "Web Development", "Performance"],
        image: "/stock.png" // Placeholder
    },
    {
        id: 3,
        title: "Understanding Neural Networks",
        date: "October 30, 2025",
        excerpt: "A beginner-friendly guide to understanding the basics of neural networks, backpropagation, and activation functions.",
        content: `
            <p class="mb-4">Neural networks are the backbone of modern deep learning. Inspired by the human brain, they consist of layers of interconnected nodes that learn to recognize patterns in data.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">The Perceptron</h3>
            <p class="mb-4">At the simplest level, a perceptron takes inputs, applies weights, and passes the result through an activation function to produce an output.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Backpropagation</h3>
            <p class="mb-4">This is the learning algorithm. It calculates the gradient of the loss function with respect to the weights, allowing the network to adjust and minimize errors over time.</p>
            <p>Understanding these fundamentals is the first step towards mastering Deep Learning.</p>
        `,
        tags: ["Machine Learning", "Neural Networks", "Education"],
        image: "/EEG.png" // Placeholder
    },
    {
        id: 4,
        title: "Building Scalable Systems",
        date: "October 15, 2025",
        excerpt: "Key principles and patterns for designing and building scalable software systems that can handle high traffic and data volumes.",
        content: `
            <p class="mb-4">Scalability is not just about handling more users; it's about maintaining performance and reliability as the system grows.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Horizontal vs. Vertical Scaling</h3>
            <p class="mb-4">Understanding when to add more machines (horizontal) versus adding more power to existing machines (vertical) is a critical architectural decision.</p>
            <p>Microservices, caching strategies, and database sharding are all tools in the architect's toolkit for building robust, scalable systems.</p>
        `,
        tags: ["System Design", "Scalability", "Architecture"],
        image: "/ipl.png" // Placeholder
    },
    {
        id: 5,
        title: "The Art of Data Visualization",
        date: "September 20, 2025",
        excerpt: "How to effectively visualize complex data sets to communicate insights and tell compelling stories.",
        content: `
            <p class="mb-4">Data visualization is where data science meets design. It's about turning raw numbers into a narrative that is easy to understand and act upon.</p>
            <h3 class="text-xl font-bold text-cyan-300 mb-2">Choosing the Right Chart</h3>
            <p class="mb-4">Bar charts for comparisons, line charts for trends, scatter plots for correlations. Selecting the right visualization is half the battle.</p>
            <p>Effective use of color, typography, and layout can transform a boring report into a compelling story that drives decision-making.</p>
        `,
        tags: ["Data Science", "Visualization", "Design"],
        image: "/tg.png" // Placeholder
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div className="container mx-auto px-4 py-12 relative">
            <h1 className="text-4xl font-bold mb-12 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    Latest Insights
                </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <motion.div
                        key={post.id}
                        layoutId={`card-${post.id}`}
                        onClick={() => setSelectedPost(post)}
                        className="bg-light-navy rounded-xl overflow-hidden border border-navy-light cursor-pointer group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-navy/50 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                            <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono mb-3">
                                <CalendarDaysIcon className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {post.tags.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-[10px] px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30 flex items-center gap-1"
                                    >
                                        <TagIcon className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`card-${selectedPost.id}`}
                            className="bg-light-navy w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-500/30 shadow-2xl relative z-10"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-cyan-500 hover:text-black transition-colors z-20"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            <div className="relative h-64 sm:h-80">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-light-navy via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                                    <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm mb-2">
                                        <CalendarDaysIcon className="w-5 h-5" />
                                        <span>{selectedPost.date}</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                                        {selectedPost.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedPost.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/30 flex items-center gap-1"
                                        >
                                            <TagIcon className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Blog;
