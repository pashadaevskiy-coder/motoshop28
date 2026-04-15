const WhyUs = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Гарантия',
      description: 'На все мотоциклы действует официальная гарантия производителя'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: 'Доставка',
      description: 'Быстрая и надежная доставка по всей России. Установка на месте.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Проверенные модели',
      description: 'Только оригинальные мотоциклы с полным пакетом документов'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Поддержка',
      description: 'Круглосуточная консультация и помощь после покупки'
    }
  ]

  return (
    <section id="why-us" className="py-section bg-dark">
      <div className="container mx-auto px-container">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-display text-section font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            ПОЧЕМУ ВЫБИРАЮТ НАС
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Мы обеспечиваем лучший сервис и качество для ваших экстремальных приключений
          </p>
        </div>

        {/* Карточки преимуществ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-gray-800 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent-orange/10 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent-orange mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs