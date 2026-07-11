import { Building2, Users, Award, Star } from 'lucide-react'
import { mallData } from '../data/mallData'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-custom py-20">
        <h1 className="text-5xl font-bold mb-4 gradient-text">About West Hills Mall</h1>
        <p className="text-xl text-white/70 mb-12">One of Ghana's premier shopping destinations</p>
        
        <div className="glass-dark rounded-3xl p-8 border border-cyan-500/20 mb-12">
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            West Hills Mall is one of the best shopping malls in Ghana, offering a wide variety of stores, 
            dining options, and entertainment facilities. Located in Accra, we provide a world-class 
            shopping experience with over {Object.values(mallData.categories).reduce((a, b) => a + b, 0)} stores 
            across {Object.keys(mallData.categories).length} different categories.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Our mall features a diverse range of retail outlets, from international brands to local favorites, 
            ensuring that every visitor finds exactly what they're looking for. With a rating of {mallData.rating} 
            from {mallData.totalReviews.toLocaleString()} reviews, we pride ourselves on delivering exceptional 
            service and a memorable shopping experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-dark rounded-2xl p-6 text-center border border-cyan-500/20">
            <Building2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-cyan mb-2">
              {Object.values(mallData.categories).reduce((a, b) => a + b, 0)}
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">Total Stores</div>
          </div>
          
          <div className="glass-dark rounded-2xl p-6 text-center border border-teal-500/20">
            <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-teal mb-2">
              {Object.keys(mallData.categories).length}
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">Categories</div>
          </div>
          
          <div className="glass-dark rounded-2xl p-6 text-center border border-cyan-500/20">
            <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-cyan mb-2">{mallData.rating}</div>
            <div className="text-white/60 text-sm uppercase tracking-wider">Rating</div>
          </div>
          
          <div className="glass-dark rounded-2xl p-6 text-center border border-teal-500/20">
            <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <div className="text-4xl font-bold gradient-text-teal mb-2">24/7</div>
            <div className="text-white/60 text-sm uppercase tracking-wider">Security</div>
          </div>
        </div>
        
        <div className="glass-dark rounded-3xl p-8 border border-cyan-500/20">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(mallData.categories).map(([category, count]) => (
              <div key={category} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-cyan-500/10">
                <span className="text-lg font-medium">{category}</span>
                <span className="text-cyan-400 font-bold">{count} stores</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
