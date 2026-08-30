import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_94ml03p",
        "template_i9d53bx",
        emailParams,
        "iVZ_L43h8BSCEKgN3"
      )
      .then(
        () => {
          toast.success("Message sent successfully! I'll get back to you soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: <FaCheckCircle />,
          });
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again or email me directly.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: <FaTimesCircle />,
          });
          setIsSubmitting(false);
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "ahadrana0125@gmail.com",
      link: "mailto:ahadrana0125@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+92 329 7374500",
      link: "tel:+923297374500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Pakistan",
      link: null,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      link: "https://github.com/ahadsaeed",
      gradient: "from-gray-700 to-gray-900",
      hoverColor: "hover:text-gray-700",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/ahadsaeed",
      gradient: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      link: "mailto:ahadrana0125@gmail.com",
      gradient: "from-red-500 to-orange-500",
      hoverColor: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-[var(--background)] scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-[var(--text)] opacity-80 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--primary)]">Send a Message</h3>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-[var(--glass-bg)] border-2 border-[var(--primary)] border-opacity-30 rounded-lg py-3 px-4 text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:border-opacity-100 transition-all duration-300"
                      placeholder="Your Name *"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-[var(--glass-bg)] border-2 border-[var(--primary)] border-opacity-30 rounded-lg py-3 px-4 text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:border-opacity-100 transition-all duration-300"
                      placeholder="Your Email *"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className="w-full bg-[var(--glass-bg)] border-2 border-[var(--primary)] border-opacity-30 rounded-lg py-3 px-4 text-[var(--text)] focus:outline-none focus:border-[var(--primary)] focus:border-opacity-100 transition-all duration-300 resize-none"
                      placeholder="Your Message *"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 py-3 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:shadow-2xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Info & Socials */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-6"
            >
              {/* Contact Info Card - All in One */}
              <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-[var(--glass-bg)] border border-[var(--primary)] border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[var(--secondary)] mb-1 opacity-80 uppercase tracking-wide">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[var(--text)] text-sm font-medium hover:text-[var(--primary)] transition-colors block truncate"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[var(--text)] text-sm font-medium truncate">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links Card */}
              <div className="card border-2 border-[var(--primary)] bg-gradient-to-br from-[var(--glass-bg)] to-[var(--background)] shadow-xl">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-br ${social.gradient} text-white shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                      aria-label={social.label}
                    >
                      <div className="transform group-hover:rotate-12 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="text-xs font-semibold">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="card border-2 border-[var(--highlight)] border-opacity-30 bg-gradient-to-br from-[var(--highlight)]/10 to-[var(--background)] p-5"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[var(--highlight)] text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-[var(--primary)] mb-2">
                      Quick Response Guaranteed
                    </h4>
                    <p className="text-sm text-[var(--text)] opacity-80 leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, 
                      feel free to reach out via phone or LinkedIn.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Toast Container with custom styling */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--primary)]"
      />
    </section>
  );
};

export default ContactForm;