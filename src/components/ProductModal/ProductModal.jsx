import { useState, useEffect } from 'react'
import { formatPrice } from '../../utils/formatters'

const ProductModal = ({ product, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const telegramLink = `https://t.me/pavel_alfabank?text=Хочу купить мотоцикл ${product.name}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 animate-scale-in">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Закрыть"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Галерея */}
          <div className="bg-darker p-6">
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src={product.gallery[selectedImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? 'border-accent-orange'
                        : 'border-transparent hover:border-gray-600'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Контент */}
          <div className="p-6 md:p-8">
            {/* Бренд и название */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
                {product.brand}
              </span>
              <h2 className="text-3xl font-display font-bold text-white mt-1" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                {product.name}
              </h2>
            </div>

            {/* Цена */}
            <div className="mb-6">
              <span className="text-4xl font-display font-bold text-accent-orange" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Полные характеристики */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-3">Характеристики</h3>
              <div className="space-y-2">
                {Object.entries(product.fullSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-secondary text-sm">{key}:</span>
                    <span className="text-primary text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Особенности */}
            {product.features && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Особенности</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-secondary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Описание */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3">Описание</h3>
              <p className="text-secondary leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Кнопка заказа */}
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-accent-orange text-white font-bold text-lg rounded-xl hover:bg-accent-orange-hover transition-all duration-300 text-center shadow-lg hover:shadow-accent-orange/50"
            >
              ЗАКАЗАТЬ В TELEGRAM
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal