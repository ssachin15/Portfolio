import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 70 },
      { name: 'Mongoose', level: 70 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'C++', level: 70 },
      { name: 'Python', level: 50 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Postman', level: 75 },
      { name: 'JWT', level: 70 },
    ],
  },
]

const Skills = () => {
  return (
    <div className="relative min-h-screen bg-transparent pt-20 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.08] to-pink-500/[0.08] blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-2 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 mb-12">
          Technologies I work with & proficiency level
        </p>

        {/* 💎 Categories */}
        <div className="space-y-8">

          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all"
            >

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-5">

                {category.skills.map((skill, index) => (
                  <div key={skill.name}>

                    {/* Label */}
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                      />

                    </div>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* 🌫 Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

export default Skills