import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-transparent flex items-center justify-center text-center px-4 pt-20 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-pink-500/[0.08] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-xl"
      >

        {/* 🔥 404 */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold mb-2 leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-10">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* 💎 Glass Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg font-medium text-white 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          hover:opacity-90 transition shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        >
          Go Back Home 🚀
        </Link>

      </motion.div>

      {/* 🌫 Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

export default NotFound