import { formatPrice } from '../../../utils/formatters.js'

const MotorcycleCard = ({ motorcycle, onDetailsClick }) => {
  const telegramLink = `https://t.me/pavel_alfabank?text=Хочу купить мотоцикл ${motorcycle.name}`

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-accent-orange/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-orange/10 group animate-fade-in">
      {/* Изображение */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
        <img
          src={motorcycle.image}
          alt={motorcycle.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Контент */}
      <div className="p-5">
        {/* Название и бренд */}
        <div className="mb-2">
          <span className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
            {motorcycle.brand}
          </span>
          <h3 className="text-lg font-bold text-primary mt-1 leading-tight">
            {motorcycle.name}
          </h3>
        </div>

        {/* Цена */}
        <div className="mb-4">
          <span className="text-2xl font-display font-bold text-accent-orange" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            {formatPrice(motorcycle.price)}
          </span>
        </div>

        {/* Краткие характеристики */}
        <div className="space-y-2 mb-5 text-sm">
          <div className="flex items-center text-secondary">
            <svg className="w-4 h-4 mr-2 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{motorcycle.engine.displacement} куб. см</span>
          </div>
          <div className="flex items-center text-secondary">
            <svg className="w-4 h-4 mr-2 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>{motorcycle.engine.power}</span>
          </div>
          <div className="flex items-center text-secondary">
            <svg className="w-4 h-4 mr-2 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{motorcycle.engine.cooling}</span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            onClick={() => onDetailsClick(motorcycle)}
            className="flex-1 px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            Подробнее
          </button>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-accent-orange text-white font-medium rounded-lg hover:bg-accent-orange-hover transition-all duration-300 text-center"
          >
            Купить
          </a>
        </div>
      </div>
    </div>
  )
}

export default MotorcycleCard
