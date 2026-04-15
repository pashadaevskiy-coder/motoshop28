import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darker/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-display font-bold text-accent-orange">
              MOTO<span className="text-white">SHOP</span>
            </a>
          </div>

          {/* Десктоп навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Почему мы
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('how-to-buy')}
              className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium"
            >
              Как купить
            </button>
          </nav>

          {/* CTA кнопка */}
          <div className="hidden md:block">
            <a
              href="https://t.me/pavel_alfabank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>

          {/* Мобильное меню (hamburger) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium text-left"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium text-left"
              >
                Почему мы
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium text-left"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('how-to-buy')}
                className="text-secondary hover:text-accent-orange transition-colors duration-300 font-medium text-left"
              >
                Как купить
              </button>
              <a
                href="https://t.me/pavel_alfabank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-all duration-300"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header