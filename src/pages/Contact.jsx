import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen bg-transparent pt-20 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-pink-500/[0.08] blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-2 text-white">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-400 mb-12">
          Have an opportunity or just want to say hi? Let’s connect.
        </p>

        {/* 💎 Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {[
            {
              icon: "📧",
              label: "Email",
              value: "sachinsingh152004@gmail.com",
              link: "mailto:sachinsingh152004@gmail.com"
            },
            {
              icon: "📱",
              label: "Phone",
              value: "+91 8449223163"
            },
            {
              icon: "💼",
              label: "LinkedIn",
              value: "linkedin.com/in/sachin-singh-4b51a2249",
              link: "https://linkedin.com/in/sachin-singh-4b51a2249"
            },
            {
              icon: "🐙",
              label: "GitHub",
              value: "github.com/ssachin15",
              link: "https://github.com/ssachin15"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:text-white transition text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-sm">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}

        </div>

        {/* 💬 Form */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/30 backdrop-blur-lg rounded-xl p-8 text-center"
          >
            <p className="text-green-400 text-2xl font-semibold">✅ Message Sent!</p>
            <p className="text-gray-400 mt-2">
              Thanks for reaching out. I’ll get back to you soon.
            </p>

            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', message: '' })
              }}
              className="mt-6 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 space-y-5 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Send a Message
            </h3>

            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message..."
              className="w-full bg-white/10 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition"
            >
              Send Message 🚀
            </button>

          </motion.form>
        )}

      </div>

      {/* 🌫 Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

export default Contact