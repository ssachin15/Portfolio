import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import fallbackProjects from '../data/fallbackProjects.json'

const usageMap = {
  'REACTJOBS': 'Browse, post, edit and delete job listings using JSON Server.',
  'E-COMMERCE': 'Admin manages products & orders. JWT-secured user system.',
  'task-manager-api': 'Users manage personal tasks with protected routes.',
  'auth-api-jwt': 'JWT authentication with login & protected APIs.',
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/ssachin15/repos?sort=updated&per_page=10', {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' }
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => {
        const filtered = data.filter((repo) => ![
          'ETH-PROOF-Beginner-EVM-.-assessment',
          'ETH-PROOF-Beginner-EVM-assessment',
          'ETH-PROOF-Beginner-EVM-Course-assessment',
          'java-script-assessment.test',
          'java-script-assessment',
          'ssachin15'
        ].includes(repo.name))
        setProjects(filtered)
        setLoading(false)
      })
      .catch((err) => {
        console.warn('API error (likely rate limit), using fallback data:', err.message)
        const fallbackFiltered = fallbackProjects.filter((repo) => ![
          'ETH-PROOF-Beginner-EVM-.-assessment',
          'ETH-PROOF-Beginner-EVM-assessment',
          'ETH-PROOF-Beginner-EVM-Course-assessment',
          'java-script-assessment.test',
          'java-script-assessment',
          'ssachin15'
        ].includes(repo.name))
        setProjects(fallbackFiltered)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-transparent flex items-center justify-center pt-20">
      <p className="text-purple-400 text-xl animate-pulse">Loading projects...</p>
    </div>
  )

  if (error) return (
    <div className="min-h-screen bg-transparent flex items-center justify-center pt-20">
      <p className="text-red-400 text-xl">Error: {error}</p>
    </div>
  )

  return (
    <div className="relative min-h-screen bg-transparent pt-20 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-pink-500/[0.08] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-2 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 mb-12">
          Live projects fetched from GitHub
        </p>

        {/* 💎 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 flex flex-col justify-between"
            >

              {/* 🔝 Top */}
              <div>

                {/* Title + GitHub */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    🔗
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3">
                  {project.description || 'No description available'}
                </p>

                {/* Usage */}
                {usageMap[project.name] && (
                  <p className="text-gray-300 text-sm mb-4">
                    {usageMap[project.name]}
                  </p>
                )}

                {/* 🏷 Tech Tags */}
                {project.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.slice(0, 5).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-purple-300 border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

              </div>

              {/* 🔻 Bottom */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">

                {/* Language */}
                {project.language && (
                  <span className="text-gray-400 text-sm">
                    {project.language}
                  </span>
                )}

                {/* Buttons */}
                <div className="flex gap-3">

                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium hover:opacity-80 transition"
                    >
                      Live
                    </a>
                  )}

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-80 transition"
                  >
                    Code
                  </a>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* 🌫 Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

export default Projects