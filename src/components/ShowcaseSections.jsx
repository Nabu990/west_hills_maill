import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Crown } from 'lucide-react'

export default function ShowcaseSections({ sections }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (sectionIndex, imageIndex) => {
    setCurrentSectionIndex(sectionIndex)
    setCurrentImageIndex(imageIndex)
    setSelectedImage(sections[sectionIndex].images[imageIndex])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const sectionImages = sections[currentSectionIndex].images
    const newIndex = (currentImageIndex + 1) % sectionImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(sectionImages[newIndex])
  }

  const prevImage = () => {
    const sectionImages = sections[currentSectionIndex].images
    const newIndex = (currentImageIndex - 1 + sectionImages.length) % sectionImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(sectionImages[newIndex])
  }

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-24 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-1/4 ${sectionIndex % 2 === 0 ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob`}></div>
            <div className={`absolute bottom-1/4 ${sectionIndex % 2 === 0 ? 'right-1/4' : 'left-1/4'} w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-200`}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-gold-400" />
                <h2 className="text-5xl font-bold gradient-text">{section.title}</h2>
                <Crown className="w-6 h-6 text-luxury-400" />
              </div>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="group glass rounded-2xl overflow-hidden card-hover cursor-pointer relative"
                  onClick={() => openLightbox(sectionIndex, imageIndex)}
                >
                  <img
                    src={image}
                    alt={`${section.title} ${imageIndex + 1}`}
                    className="w-full h-56 object-cover image-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
            <p className="text-white/60 text-center mt-4">
              {currentImageIndex + 1} / {sections[currentSectionIndex].images.length}
            </p>
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
    </>
  )
}
