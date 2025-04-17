
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.css";
import form from '../assets/form.png';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      user_name: formData.name, // Use same variable names as in your EmailJS template
      user_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_94ml03p", // Service ID
        "template_i9d53bx", // Template ID
        emailParams, // Updated form data with correct keys
        "iVZ_L43h8BSCEKgN3" // Public Key
      )
      .then(
        (response) => {
          console.log("Email Sent!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Email Send Error:", error);
          toast.error("Error sending message: " + error.text);
        }
      );
  };


  return (

    <section id="contact" className="py-16 bg-black text-[#80E0D0]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side - Form */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-center md:text-left mb-6 neon-text">
            Contact Me
          </h2>
          <form className="max-w-lg mx-auto md:mx-0" onSubmit={handleSubmit}>
            {["name", "email", "message"].map((field, index) => (
              <motion.div key={index} className="mb-6 input-group">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder=" "
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">{`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}</label>
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="w-full bg-teal-400 text-black py-3 rounded font-semibold hover:bg-teal-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Form Image */}
        <motion.div
          className="hidden md:block md:w-1/2 flex justify-center img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={form}
            alt="Contact Form Illustration"
            className="w-80"
          />
        </motion.div>
      </div>

      <ToastContainer />
    </section>


  );
};

export default ContactForm;
