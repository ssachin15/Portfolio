import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="relative min-h-screen bg-transparent pt-20 overflow-hidden">

      {/* 🌈 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-pink-500/[0.08] blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2 text-white"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* 🎯 Identity */}
        <p className="text-lg text-gray-400 mb-8">
          Full Stack Developer
        </p>

        {/* 💎 Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-10"
        >
          <p className="text-gray-200 leading-relaxed">
            I'm a Computer Science student passionate about building modern web applications.
            I develop responsive frontends using React and build secure backend systems using Node.js.
            <br /><br />
            Solved{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              100+ LeetCode problems
            </span>{" "}
            with strong fundamentals in DSA and OOP.
          </p>
        </motion.div>

        {/* 💼 What I'm Looking For */}
        <h3 className="text-xl font-semibold mb-3 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What I'm Looking For
          </span>
        </h3>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 mb-10">
          <p className="text-gray-300">
            Seeking internship or entry-level opportunities in full-stack development
            where I can contribute to real-world projects and grow as a developer.
          </p>
        </div>

        {/* 🧠 What Sets Me Apart */}
        <h3 className="text-xl font-semibold mb-3 text-white">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Sets Me Apart
          </span>
        </h3>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 mb-12">
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Strong DSA foundation with 100+ problems solved</li>
            <li>Experience building full-stack applications (MERN)</li>
            <li>Focus on clean UI and secure backend architecture</li>
            <li>Fast learner with hands-on project experience</li>
          </ul>
        </div>

        {/* 📜 Certifications */}
        <h3 className="text-2xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>

        <div className="space-y-6 mb-12">

          {/* Blockchain */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition"
          >
            <p className="text-white font-semibold text-lg">
              Blockchain Technology using Ethereum & Polygon
            </p>
            <p className="text-purple-300 text-sm">
              Chandigarh University × Metacrafters
            </p>
            <p className="text-gray-400 text-sm mt-1">
              June 2024 – August 2024
            </p>

            <ul className="text-gray-300 text-sm mt-3 list-disc list-inside">
              <li>JS PROOF: Beginner Course</li>
              <li>ETH PROOF: Beginner EVM Course</li>
            </ul>

            <p className="text-gray-400 text-sm mt-3">
              Hands-on experience in Blockchain, Ethereum, and real-world project development.
            </p>
          </motion.div>

          {/* Oracle */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] transition"
          >
            <p className="text-white font-semibold text-lg">
              Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
            </p>
            <p className="text-pink-300 text-sm">Issued by Oracle</p>

            <p className="text-gray-300 text-sm mt-3">
              Covers core AI & ML concepts with practical implementation on OCI.
            </p>

            <p className="text-gray-400 text-sm mt-2">
              Expiration: December 22, 2027
            </p>
          </motion.div>

        </div>

        {/* 🎓 Education */}
        <h3 className="text-2xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Education
          </span>
        </h3>

        <div className="space-y-5">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5">
            <p className="text-white font-semibold">Chandigarh University</p>
            <p className="text-gray-300 text-sm">B.E. Computer Science Engineering</p>
            <p className="text-gray-400 text-sm">2022 – Present</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5">
            <p className="text-white font-semibold">SAI Public School</p>
            <p className="text-gray-300 text-sm">Class XII (CBSE)</p>
            <p className="text-gray-400 text-sm">2021 – 2022</p>
          </div>

        </div>

      </div>

      {/* 🌫 Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

export default About