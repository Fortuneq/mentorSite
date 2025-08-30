'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Персональный ментор",
      description: "Получите опытного наставника, который поможет вам шаг за шагом достичь целей.",
      icon: "👨‍🏫"
    },
    {
      title: "План обучения",
      description: "Индивидуальная программа, адаптированная под ваши цели, навыки и желаемую позицию.",
      icon: "📚"
    },
    {
      title: "Поддержка карьеры",
      description: "Проверка резюме, подготовка к интервью и стратегии для получения работы мечты.",
      icon: "🚀"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексная поддержка для ускорения вашей трансформации в IT карьере
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-sky-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
