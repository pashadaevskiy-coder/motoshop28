const HowToBuy = () => {
  const steps = [
    {
      number: '1',
      title: 'Выбрать мотоцикл',
      description: 'Изучите каталог и выберите подходящую модель',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Написать в Telegram',
      description: 'Свяжитесь с нашим менеджером для уточнения деталей и наличия',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Оформить заказ',
      description: 'Обсудите условия, оплату и доставку. Получите мотоцикл!',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-to-buy" className="py-section bg-dark">
      <div className="container mx-auto px-container">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-display text-section font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            КАК КУПИТЬ
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Простой и удобный процесс покупки вашего эндуро мотоцикла
          </p>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Номер шага */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg">
                {step.number}
              </div>

              {/* Иконка */}
              <div className="bg-card rounded-2xl p-8 border border-gray-800 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-accent-orange/10 mb-6">
                <div className="text-accent-orange flex justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Заголовок и описание */}
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Стрелка (кроме последнего шага) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToBuy