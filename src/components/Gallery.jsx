import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Crown } from 'lucide-react'

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-300"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-gold-400" />
            <h2 className="text-5xl font-bold gradient-text">Photo Gallery</h2>
            <Crown className="w-6 h-6 text-luxury-400" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Explore the beautiful spaces and experiences at West Hills Mall</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl overflow-hidden card-hover cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-lg mb-2">{image.caption}</p>
                  <div className="flex items-center justify-center gap-2">
                    <ZoomIn className="w-6 h-6 text-gold-400" />
                    <span className="text-gold-300 text-sm">Click to expand</span>
                  </div>
                </div>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors z-10 glass-gold p-2 rounded-full shadow-gold"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors glass-gold p-3 rounded-full z-10 shadow-gold"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <div className="glass rounded-3xl p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
            <div className="text-center mt-6">
              <p className="text-white font-semibold text-xl">{selectedImage.caption}</p>
              <p className="text-gold-300 mt-2">{currentIndex + 1} / {images.length}</p>
            </div>
          </div>
          
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors glass-gold p-3 rounded-full z-10 shadow-gold"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}
