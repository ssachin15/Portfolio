import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Circle, ChevronDown } from "lucide-react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer",
  "DSA Problem Solver",
];

const Home = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center relative overflow-hidden px-4">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-sm text-white/60">Welcome to my portfolio</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl font-bold mb-4"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
            Sachin Singh
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`text-lg text-white/60 mb-4 transition-opacity duration-500 ${
            showSubtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          I'm a <span className="text-white font-semibold">{roles[roleIndex]}</span>
        </motion.p>

        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-400/30 mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 text-sm font-medium">
            Open to Work
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 flex-wrap mb-6"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-lg border border-white/10 transition"
          >
            Contact
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-6 justify-center items-center text-sm text-white/40 flex-wrap"
        >
          <a
            href="https://github.com/ssachin15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="text-lg">🐙</span>
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sachin-singh-4b51a2249"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <span className="text-lg">💼</span>
            LinkedIn
          </a>

          <a
            href="mailto:sachinsingh152004@gmail.com"
            className="hover:text-white transition"
          >
            📧 Email
          </a>
        </motion.div>
      </div>

      
    </div>
  );
};

export default Home;