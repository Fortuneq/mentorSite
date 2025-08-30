'use client'

import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    {
      name: "Базовый",
      price: "25,000",
      period: "/месяц",
      description: "Идеально для начинающих разработчиков",
      features: [
        "4 индивидуальные сессии в месяц",
        "Персональный план обучения",
        "Доступ к материалам курса",
        "Поддержка в чате 5 дней в неделю",
        "Проверка домашних заданий"
      ],
      popular: false,
      color: "sky"
    },
    {
      name: "Профессиональный",
      price: "45,000",
      period: "/месяц",
      description: "Для серьезного карьерного роста",
      features: [
        "8 индивидуальных сессий в месяц",
        "Персональный план + карьерное планирование",
        "Доступ ко всем материалам",
        "Поддержка 24/7",
        "Проверка кода и код-ревью",
        "Помощь с портфолио",
        "Подготовка к собеседованиям",
        "Networking и рефералы"
      ],
      popular: true,
      color: "blue"
    },
    {
      name: "VIP",
      price: "75,000",
      period: "/месяц",
      description: "Максимальная поддержка и результат",
      features: [
        "Безлимитные консультации",
        "Индивидуальная программа + менторинг",
        "Приоритетная поддержка",
        "Личные проекты под руководством",
        "Прямые рефералы в топовые компании",
        "Участие в закрытых мероприятиях",
        "Гарантия трудоустройства*"
      ],
      popular: false,
      color: "indigo"
    }
  ]

  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses = {
      sky: {
        border: popular ? "border-sky-500" : "border-sky-200",
        bg: popular ? "bg-sky-50" : "bg-white",
        button: "bg-sky-400 hover:bg-sky-500",
        badge: "bg-sky-500"
      },
      blue: {
        border: popular ? "border-blue-500" : "border-blue-200",
        bg: popular ? "bg-blue-50" : "bg-white",
        button: "bg-blue-500 hover:bg-blue-600",
        badge: "bg-blue-500"
      },
      indigo: {
        border: popular ? "border-indigo-500" : "border-indigo-200",
        bg: popular ? "bg-indigo-50" : "bg-white",
        button: "bg-indigo-500 hover:bg-indigo-600",
        badge: "bg-indigo-500"
      }
    }
    return baseClasses[color as keyof typeof baseClasses]
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Тарифные планы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите программу, которая подходит вашему уровню и целям
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative ${colorClasses.bg} p-8 rounded-2xl ${colorClasses.border} border-2 transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colorClasses.badge} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                    Популярный выбор
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price} ₽</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${colorClasses.button} text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Выбрать план
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            * Гарантия трудоустройства действует при условии выполнения всех заданий программы. 
            Все цены указаны в российских рублях. Возможна рассрочка на 3-6 месяцев.
          </p>
          <div className="mt-6">
            <button className="text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-300">
              Узнать больше об условиях →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}