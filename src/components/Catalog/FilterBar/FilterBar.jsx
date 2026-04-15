import { useState } from 'react'

const FilterBar = ({ motorcycles = [], onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [selectedEngineSizes, setSelectedEngineSizes] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])

  const engineSizes = [...new Set(motorcycles?.map(m => m.engine?.displacement) || [])].sort((a, b) => a - b)
  const brands = [...new Set(motorcycles?.map(m => m.brand) || [])].sort()

  const handleEngineSizeChange = (size) => {
    setSelectedEngineSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const applyFilters = () => {
    if (!motorcycles || motorcycles.length === 0) return
    const filtered = motorcycles.filter(moto => {
      // Фильтр по цене
      if (moto.price < priceRange[0] || moto.price > priceRange[1]) {
        return false
      }

      // Фильтр по кубатуре
      if (selectedEngineSizes.length > 0 && !selectedEngineSizes.includes(moto.engine.displacement)) {
        return false
      }

      // Фильтр по бренду
      if (selectedBrands.length > 0 && !selectedBrands.includes(moto.brand)) {
        return false
      }

      return true
    })

    onFilterChange(filtered)
  }

  const resetFilters = () => {
    setPriceRange([0, 300000])
    setSelectedEngineSizes([])
    setSelectedBrands([])
    onFilterChange(motorcycles || [])
  }

  // Применяем фильтры автоматически при изменении
  const handlePriceChange = () => {
    applyFilters()
  }

  return (
    <div className="bg-card rounded-xl p-6 mb-8 border border-gray-800">
      <div className="flex flex-wrap items-center gap-6">
        {/* Фильтр по цене */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-secondary mb-2">
            Цена: {priceRange[0].toLocaleString('ru-RU')} ₽ - {priceRange[1].toLocaleString('ru-RU')} ₽
          </label>
          <div className="flex gap-4">
            <input
              type="range"
              min="0"
              max="300000"
              step="5000"
              value={priceRange[0]}
              onChange={(e) => {
                setPriceRange([parseInt(e.target.value), priceRange[1]])
                handlePriceChange()
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
            <input
              type="range"
              min="0"
              max="300000"
              step="5000"
              value={priceRange[1]}
              onChange={(e) => {
                setPriceRange([priceRange[0], parseInt(e.target.value)])
                handlePriceChange()
              }}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
          </div>
        </div>

        {/* Фильтр по кубатуре */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-secondary mb-2">Кубатура</label>
          <div className="space-y-2">
            {engineSizes.map(size => (
              <label key={size} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedEngineSizes.includes(size)}
                  onChange={() => {
                    handleEngineSizeChange(size)
                    applyFilters()
                  }}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-accent-orange focus:ring-accent-orange focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-secondary">{size} куб. см</span>
              </label>
            ))}
          </div>
        </div>

        {/* Фильтр по бренду */}
        <div className="min-w-[150px]">
          <label className="block text-sm font-medium text-secondary mb-2">Бренд</label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {brands.map(brand => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    handleBrandChange(brand)
                    applyFilters()
                  }}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-accent-orange focus:ring-accent-orange focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-secondary">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex gap-3 items-end">
          <button
            onClick={applyFilters}
            className="px-6 py-2 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-all duration-300"
          >
            Применить
          </button>
          <button
            onClick={resetFilters}
            className="px-6 py-2 bg-gray-700 text-secondary font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar