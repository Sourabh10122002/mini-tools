import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Envelope,
  MapPin,
  ChatCircleText,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  Spinner,
} from '@phosphor-icons/react';
import { Globe } from 'heroicons-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) throw new Error('Submission failed');

      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
    }
  };
  return (
    <div className="py-12 pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className="inline-block bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <ChatCircleText className="h-12 w-12 text-white mx-auto" weight="duotone" />
            <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-blue-200/90">
              Let's build something amazing together
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white/5 rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-white/10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-blue-100 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition duration-300"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition duration-300"
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition duration-300"
                  placeholder="Type your message here..."
                  disabled={loading}
                ></textarea>
              </div>

              {/* Error/Success Messages */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/20 text-red-200 rounded-lg"
                >
                  {errorMessage}
                </motion.div>
              )}

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/20 text-green-200 rounded-lg"
                >
                  {successMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Spinner className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Envelope weight="duotone" className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 bg-gradient-to-br from-blue-900/50 to-gray-900/50 rounded-2xl p-8 space-y-8 relative"
          >
            <div className="absolute top-0 right-0 opacity-10">
              <Globe className="h-48 w-48 text-blue-400" />
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-white">Contact Details</h3>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Phone weight="duotone" className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-100">Phone</p>
                  <p className="text-blue-200">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Envelope weight="duotone" className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-100">Email</p>
                  <p className="text-blue-200">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <MapPin weight="duotone" className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-100">Office</p>
                  <p className="text-blue-200">
                    123 Innovation Boulevard<br />
                    Tech Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-blue-800/50 relative z-10">
              <h4 className="text-lg font-semibold text-blue-100 mb-4">Connect Socially</h4>
              <div className="flex space-x-6">
                <a href="#" className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition duration-300">
                  <TwitterLogo weight="duotone" className="h-6 w-6 text-blue-400" />
                </a>
                <a href="#" className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition duration-300">
                  <LinkedinLogo weight="duotone" className="h-6 w-6 text-blue-400" />
                </a>
                <a href="#" className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition duration-300">
                  <GithubLogo weight="duotone" className="h-6 w-6 text-blue-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;