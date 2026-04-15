import MotorcycleCard from '../MotorcycleCard/MotorcycleCard'

const MotorcycleGrid = ({ motorcycles = [], onProductClick }) => {
  if (!motorcycles || motorcycles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🏍️</div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Мотоциклы не найдены</h3>
        <p className="text-muted">Попробуйте изменить параметры фильтров</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {(motorcycles || []).map((motorcycle, index) => (
        <div key={motorcycle.id} className={`stagger-${(index % 6) + 1}`}>
          <MotorcycleCard
            motorcycle={motorcycle}
            onDetailsClick={onProductClick}
          />
        </div>
      ))}
    </div>
  )
}

export default MotorcycleGrid