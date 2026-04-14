

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../components/Navbar";

const Contact = () => {

  const servicesSubMenu = navLinks.find(link => link.name === 'Services')?.subMenu || [];
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Web Development",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");
console.log('form value=', formData )
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");

        setFormData({
          fullName: "",
          email: "",
          subject: "Web Development",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Server connection failed");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
{/* all client */}

<Link to="/new-client">
  <button className="cursore-pointer">
    All Clients Messages
  </button>
</Link>
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold mt-4 mb-6"
          >
            Let's Start A <span className="text-gradient">Project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Have a question or a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>


        {/* Form */}
        <div className="max-w-3xl mx-auto mb-20">

          {status === "success" ? (
            <div className="text-center p-12 bg-slate-800 rounded-3xl">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />
              <h2 className="text-2xl font-bold text-white mb-2">
                Message Sent Successfully
              </h2>
              <p className="text-slate-400">
                Our team will contact you shortly.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="mt-6 bg-blue-600 px-6 py-3 rounded-xl text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 p-10 rounded-3xl space-y-6"
            >
              {/* Name */}
              <input
                required
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-900 text-white"
              />

              {/* Email */}
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-900 text-white"
              />

              {/* Subject */}
              {/* <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-900 text-white"
              >
                <option>Website Design & Development</option>
                <option>Landing Page Design</option>
                <option>E-Commerce Solution</option>
                <option>Logo Design</option>
                <option>UX/UI Design</option>
                <option>Digital Marketing & SEO</option>
                <option>Branding</option>
                <option>Mobile App Development</option>
                <option>Amazon FBA business</option>
                <option>Other</option>
              </select> */}


<select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className="w-full p-4 rounded-xl bg-slate-900 text-white"
>
  {servicesSubMenu.map((item) => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ))}
  <option value="Other">Other</option>
</select>

              {/* Company */}
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-900 text-white"
              />

              {/* Message */}
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-900 text-white"
              />

              {status === "error" && (
                <p className="text-red-500">{errorMessage}</p>
              )}

              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full bg-blue-600 py-4 rounded-xl text-white flex justify-center items-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    Sending <Loader2 className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

{/* contact details */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="glass p-8 rounded-3xl h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                   <p className="text-slate-400">info@zozotech.com</p>
                  <p className="text-slate-400">hello@zozotech.com</p>
                  <p className="text-slate-400">support@zozotech.com</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <p className="text-slate-400">+880 01534 733 799</p>
                  <p className="text-slate-400">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl h-full">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-slate-400">123 Innovation Drive, Suite 400</p>
                  <p className="text-slate-400">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
</div>

      </div>
    </div>
  );
};

export default Contact;