import { ArrowRight, Phone, Globe, Clock, MapPin } from 'lucide-react'
import { mallData } from '../data/mallData'

export default function Stores() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-custom py-20">
        <h1 className="text-5xl font-bold mb-4 gradient-text">All Stores</h1>
        <p className="text-xl text-white/70 mb-12">Explore all {Object.values(mallData.categories).reduce((a, b) => a + b, 0)} stores at West Hills Mall</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(mallData.categories).map(([category, count]) => (
            <div key={category} className="glass-dark rounded-2xl p-6 card-hover border border-cyan-500/20">
              <h3 className="text-2xl font-bold gradient-text-cyan mb-2">{category}</h3>
              <p className="text-white/60">{count} stores</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
