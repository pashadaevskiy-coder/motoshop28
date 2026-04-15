const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение с overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Эндуро мотоцикл"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-hero font-bold text-white mb-6 animate-fade-in" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
          ЭНДУРО МОТОЦИКЛЫ
          <br />
          <span className="text-accent-orange">ДЛЯ НАСТОЯЩЕГО БЕЗДОРОЖЬЯ</span>
        </h1>
        <p className="text-body text-secondary max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Мощные, надежные, готовые к любым испытаниям. Выбирай свой идеальный мотоцикл для экстремальных приключений.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToCatalog}
            className="px-8 py-4 bg-accent-orange text-white font-bold text-lg rounded-lg hover:bg-accent-orange-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-orange/50"
          >
            СМОТРЕТЬ КАТАЛОГ
          </button>
          <a
            href="https://t.me/pavel_alfabank"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-accent-orange text-accent-orange font-bold text-lg rounded-lg hover:bg-accent-orange hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            НАПИСАТЬ В TELEGRAM
          </a>
        </div>
      </div>

      {/* Стрит-индикатор прокрутки */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero