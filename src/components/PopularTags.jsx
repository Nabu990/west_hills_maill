import { Tag, TrendingUp, Crown } from 'lucide-react'

export default function PopularTags({ tags }) {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-luxury-500/10 rounded-full filter blur-3xl animate-blob delay-300"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-gold-400" />
            <h2 className="text-5xl font-bold gradient-text">Popular Tags</h2>
            <TrendingUp className="w-8 h-8 text-luxury-400" />
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">What customers are searching for</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 scroll-reveal">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="group glass-gold px-6 py-3 rounded-full border border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/20 hover:scale-105 transition-all cursor-pointer shadow-gold card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Crown className="w-5 h-5 text-gold-400 group-hover:text-gold-300" />
              <span className="font-semibold text-white group-hover:text-gold-200">{tag.name}</span>
              <span className="bg-gradient-to-r from-gold-500/30 to-gold-600/30 text-white px-3 py-1 rounded-full text-sm font-medium border border-gold-500/30">
                {tag.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
