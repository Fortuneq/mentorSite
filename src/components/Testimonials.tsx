'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Full Stack разработчик",
      company: "Yandex",
      content: "Программа наставничества полностью изменила мою карьеру. За 4 месяца я перешла от неуверенности на собеседованиях к работе мечты!",
      avatar: "👩‍💻"
    },
    {
      name: "Дмитрий Смирнов",
      role: "QA Engineer",
      company: "Сбер",
      content: "Персональный ментор сделал всё возможное. Индивидуальный план обучения помог сосредоточиться на том, что действительно важно для моей целевой роли.",
      avatar: "👨‍💼"
    },
    {
      name: "Елена Козлова",
      role: "DevOps Engineer",
      company: "VK",
      content: "Практические проекты и поддержка сообщества дали мне уверенность, необходимую для смены карьеры. Лучшая инвестиция в моей жизни!",
      avatar: "👩‍🔧"
    }
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Истории успеха</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте от профессионалов, которые изменили свою карьеру с нашим наставничеством
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-sky-400 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sky-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
