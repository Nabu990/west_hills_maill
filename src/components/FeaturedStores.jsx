import { Star, Clock, DollarSign, Crown } from 'lucide-react'

export default function FeaturedStores({ stores }) {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-200"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-gold-400" />
            <h2 className="text-5xl font-bold gradient-text">Featured Stores</h2>
            <Crown className="w-6 h-6 text-luxury-400" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Discover our most popular stores and dining options</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group glass rounded-3xl overflow-hidden card-hover relative"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                
                <div className="absolute top-4 right-4 glass-gold px-4 py-2 rounded-full flex items-center gap-2 shadow-gold">
                  <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                  <span className="font-bold">{store.rating}</span>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                
                <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-gold-200 transition-colors">{store.name}</h3>
                <p className="text-white/60 mb-4">{store.type}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-4">
                  <span className="flex items-center gap-2 glass-gold px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-gold-400" />
                    {store.reviews.toLocaleString()} reviews
                  </span>
                  {store.priceRange && (
                    <span className="flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-300 px-3 py-1 rounded-full border border-gold-500/30">
                      <DollarSign className="w-4 h-4" />
                      {store.priceRange}
                    </span>
                  )}
                </div>
                
                {store.hours && (
                  <div className="flex items-center gap-3 text-sm text-white/70 glass-dark px-4 py-3 rounded-xl">
                    <Clock className="w-5 h-5 text-luxury-400" />
                    {store.hours}
                  </div>
                )}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-luxury-500/20 to-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
