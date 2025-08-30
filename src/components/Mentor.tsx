'use client'

import { motion } from 'framer-motion'

export default function Mentor() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Познакомьтесь с вашим ментором</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Опытный профессионал с многолетним опытом в IT индустрии
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8 inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-8xl shadow-2xl"
              >
                👨‍💻
              </motion.div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Доступен онлайн
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Алексей Петров</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">Senior Developer</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Team Lead</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">8+ лет опыта</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🎯 Экспертиза</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Full-stack разработка (React, Node.js, Python)</li>
                <li>• Архитектура приложений и микросервисов</li>
                <li>• DevOps и облачные технологии (AWS, Docker)</li>
                <li>• Управление командами и проектами</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🏆 Достижения</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Помог 50+ студентам получить работу в IT</li>
                <li>• Руководил командами до 15 разработчиков</li>
                <li>• Спикер на IT конференциях</li>
                <li>• Создал успешные продукты для более чем 100К пользователей</li>
              </ul>
            </div>

            <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">💭 Мой подход</h4>
              <p className="text-gray-600 leading-relaxed italic">
                "Я верю, что каждый может стать успешным разработчиком при правильном наставничестве. 
                Мой подход основан на практическом обучении, регулярной обратной связи и постепенном 
                усложнении задач. Важно не только изучить технологии, но и развить мышление разработчика."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}