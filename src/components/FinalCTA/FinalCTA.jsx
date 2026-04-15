const FinalCTA = () => {
  return (
    <section className="py-section bg-darker relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-transparent to-accent-red/10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Заголовок */}
          <h2 className="font-display text-section font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            НАПИШИ МЕНЕДЖЕРУ И ПОЛУЧИ
            <br />
            <span className="text-accent-orange">КОНСУЛЬТАЦИЮ</span>
          </h2>

          <p className="text-body text-secondary max-w-2xl mx-auto mb-10">
            Остались вопросы? Нужна помощь с выбором? Наш специалист готов ответить на все вопросы и помочь подобрать идеальный эндуро мотоцикл для ваших задач.
          </p>

          {/* CTA кнопка */}
          <a
            href="https://t.me/pavel_alfabank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-accent-orange to-accent-red text-white font-bold text-xl rounded-xl hover:from-accent-orange-hover hover:to-accent-red-hover transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-orange/50 animate-pulse-slow"
          >
            <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            НАПИСАТЬ В TELEGRAM
          </a>

          {/* Дополнительный текст */}
          <p className="text-muted text-sm mt-6">
            Ответим в течение 15 минут
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA