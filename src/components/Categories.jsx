import { Utensils, Shirt, Heart, Dumbbell, Crown } from 'lucide-react'

const categoryIcons = {
  "Food & Drink": Utensils,
  "Clothing": Shirt,
  "Sports & Fitness": Dumbbell,
  "Entertainment": Heart,
}

const categoryGradients = {
  "Food & Drink": "from-gold-500 to-gold-600",
  "Clothing": "from-luxury-500 to-luxury-600",
  "Sports & Fitness": "from-gold-500 to-gold-600",
  "Entertainment": "from-luxury-500 to-luxury-600",
}

const categoryGlow = {
  "Food & Drink": "shadow-gold",
  "Clothing": "shadow-luxury",
  "Sports & Fitness": "shadow-gold",
  "Entertainment": "shadow-luxury",
}

export default function Categories({ categories }) {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-200"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-gold-400" />
            <h2 className="text-5xl font-bold gradient-text">Shop by Category</h2>
            <Crown className="w-6 h-6 text-luxury-400" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Find exactly what you're looking for</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(categories).map(([name, count], index) => {
            const Icon = categoryIcons[name]
            const gradient = categoryGradients[name]
            const glow = categoryGlow[name]
            return (
              <div
                key={name}
                className="group relative glass rounded-3xl p-8 card-hover cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ${glow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="relative font-bold text-xl text-white mb-2 text-center group-hover:text-gold-200 transition-colors">{name}</h3>
                <p className="relative text-white/60 text-center font-medium group-hover:text-white/80 transition-colors">{count} stores</p>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
