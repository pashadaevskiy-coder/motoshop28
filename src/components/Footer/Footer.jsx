const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Логотип и название */}
          <div>
            <div className="text-2xl font-display font-bold text-accent-orange mb-4" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
              MOTO<span className="text-white">SHOP</span>
            </div>
            <p className="text-muted text-sm">
              Магазин эндуро мотоциклов. Качественная техника для настоящих райдеров.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="https://t.me/pavel_alfabank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-accent-orange transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                @username
              </a>
              <div className="flex items-center text-secondary">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@motoshop.ru
              </div>
              <div className="flex items-center text-secondary">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (999) 123-45-67
              </div>
            </div>
          </div>

          {/* Соцсети */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-card hover:bg-accent-orange rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="ВКонтакте"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.037 18.363l.612-3.696h4.542l-.612 3.696zM6.34 15.484H3.39l3.346-6.484h3.949l-3.346 6.484z"/>
                  <path d="M15.895 13.365l-3.346-6.484h-3.949l3.346 6.484h3.949z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card hover:bg-accent-orange rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-muted text-sm">
          <p>&copy; {currentYear} MOTO-SHOP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer