'use client'

import { motion } from 'framer-motion'

export default function Benefits() {
  const benefits = [
    {
      title: "Практические проекты",
      description: "Работайте над реальными проектами, которые продемонстрируют ваши навыки потенциальным работодателям.",
      icon: "💻"
    },
    {
      title: "Поддерживающее сообщество",
      description: "Общайтесь с единомышленниками, делитесь опытом и создавайте профессиональные связи.",
      icon: "🤝"
    },
    {
      title: "Подготовка к трудоустройству",
      description: "Освойте технические интервью, решение задач и навыки профессиональной презентации.",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Почему выбирают нас?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем все необходимое для успешного перехода в IT карьеру
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-6xl mb-6 group-hover:animate-pulse"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
