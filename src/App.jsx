import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import WhyUs from './components/WhyUs/WhyUs'
import Testimonials from './components/Testimonials/Testimonials'
import HowToBuy from './components/HowToBuy/HowToBuy'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import ProductModal from './components/ProductModal/ProductModal'
import { motorcycles } from './data/motorcycles'
import { useState } from 'react'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProductModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <Catalog
          motorcycles={motorcycles}
          onProductClick={openProductModal}
        />
        <WhyUs />
        <Testimonials />
        <HowToBuy />
        <FinalCTA />
      </main>
      <Footer />

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeProductModal}
        />
      )}
    </div>
  )
}

export default App