import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can integrate with an API or email service here
    setSubmitted(true);
  };

  return (
    <section className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="section-heading">
          <span className="text-secondary font-mono">03. </span>
          Get In Touch
        </h2>

        <p className="text-light-slate max-w-lg mx-auto mb-8">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="space-y-6">
          {/* <a
            href="vspatil2004@gmail.com"
            className="btn-primary inline-block"
          >
            Say Hello
          </a> */}

          {/* Contact Form */}
          <div className="flex justify-center ">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-2xl bg-gradient-to-br from-cyan-900/20 to-cyan-800/400 rounded-2xl p-10 shadow-2x1 space-y-8 border border-cyan-700"
            >
              {submitted ? (
                <div className="text-green-500 font-semibold text-lg text-center">
                  Thank you for reaching out! I'll get back to you soon.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-7 ">
                    <div>
                      <label className="block text-left text-cyan-300 font-semibold mb-1 " htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-dark-navy text-light-slate border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-left text-cyan-300 font-semibold mb-1" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-dark-navy text-light-slate border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-left text-cyan-300 font-semibold mb-1" htmlFor="service">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-dark-navy text-gray-400 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Data Science Consulting">Data Science Consulting</option>
                      <option value="AI/ML Solutions">AI/ML Solutions</option>
                      <option value="Data Visualization">Data Visualization</option>
                      <option value="Custom Project">Custom Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-left text-cyan-300 font-semibold mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-dark-navy text-light-slate border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full mt-2 py-3 text-lg rounded-lg font-semibold tracking-wide shadow-lg"
                  >
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>

          <div className="flex justify-center space-x-8 pt-8">
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-secondary transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-secondary transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-secondary transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;