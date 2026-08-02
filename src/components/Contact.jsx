import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (serviceId && templateId && publicKey) {
      emailjs
        .send(serviceId, templateId, form, publicKey)
        .then(
          () => {
            setLoading(false);
            setForm({ name: "", email: "", message: "" });
            alert("Thank you! I'll get back to you soon.");
          },
          (err) => {
            setLoading(false);
            console.error(err);
            alert("Something went wrong. You can reach me at LinkedIn or GitHub below.");
          }
        );
    } else {
      setLoading(false);
      alert("Contact form not configured. Reach me via LinkedIn or GitHub below!");
    }
  };

  return (
    <section id="contact" className={`${styles.padding} relative`}>
      <span className="hash-span">&nbsp;</span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10"
      >
        <motion.div variants={textVariant(0.2)} className="flex-1">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact</h2>
          <p className="mt-4 text-secondary max-w-md">
            I'm open to co-op opportunities and collaboration. Send a message or
            connect with me on LinkedIn and GitHub.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://linkedin.com/in/uchechiokoronkwo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#1d1836] px-6 py-3 rounded-xl text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Bolu-tec"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary hover:bg-[#1d1836] px-6 py-3 rounded-xl text-white font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 p-8 bg-tertiary rounded-2xl"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-primary py-4 px-6 rounded-lg text-white placeholder:text-secondary border border-[#2a2a4a] outline-none focus:border-[#915EFF]"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-primary py-4 px-6 rounded-lg text-white placeholder:text-secondary border border-[#2a2a4a] outline-none focus:border-[#915EFF]"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="What do you want to say?"
              className="bg-primary py-4 px-6 rounded-lg text-white placeholder:text-secondary border border-[#2a2a4a] outline-none focus:border-[#915EFF] resize-none"
              required
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#915EFF] py-3 px-8 rounded-xl text-white font-medium hover:bg-[#7c4de6] disabled:opacity-50 transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
