import { Star, Camera, User, Quote, Crown } from 'lucide-react'

export default function Reviews({ reviews }) {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-200"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-gold-400" />
            <h2 className="text-5xl font-bold gradient-text">Customer Reviews</h2>
            <Crown className="w-6 h-6 text-luxury-400" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">See what our visitors are saying</p>
        </div>
        
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 card-hover relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-gold-500/20" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-lg shadow-gold">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">{review.author}</h3>
                    <p className="text-sm text-white/60">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'fill-gold-400 text-gold-400'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/50 ml-2">{review.date}</span>
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg italic">"{review.content}"</p>
              
              <div className="flex items-center gap-6 text-sm text-white/60 border-t border-white/10 pt-4">
                <span className="flex items-center gap-2 glass-gold px-3 py-1 rounded-full">
                  <Camera className="w-4 h-4 text-gold-400" />
                  {review.photos} photos
                </span>
                <span className="flex items-center gap-2 glass-dark px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-gold-400" />
                  {review.totalReviews} reviews
                </span>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-luxury-500/10 to-gold-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
