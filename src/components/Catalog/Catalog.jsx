import { useState } from 'react'
import FilterBar from './FilterBar/FilterBar'
import MotorcycleGrid from './MotorcycleGrid/MotorcycleGrid'

const Catalog = ({ motorcycles = [], onProductClick }) => {
  const [filteredMotorcycles, setFilteredMotorcycles] = useState(motorcycles || [])

  return (
    <section id="catalog" className="py-section bg-darker">
      <div className="container mx-auto px-container">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <h2 className="font-display text-section font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, Impact, sans-serif' }}>
            КАТАЛОГ МОТОЦИКЛОВ
          </h2>
          <p className="text-body text-secondary max-w-2xl mx-auto">
            Выбирай лучшие эндуро мотоциклы для экстремальных приключений
          </p>
        </div>

        {/* Фильтры */}
        <FilterBar
          motorcycles={motorcycles}
          onFilterChange={setFilteredMotorcycles}
        />

        {/* Сетка мотоциклов */}
        <MotorcycleGrid
          motorcycles={filteredMotorcycles}
          onProductClick={onProductClick}
        />
      </div>
    </section>
  )
}

export default Catalog