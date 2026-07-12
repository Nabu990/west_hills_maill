import { ArrowRight, Phone, Globe, Clock, MapPin, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { mallData } from '../data/mallData'

export default function Stores() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-custom py-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/30 rounded-xl transition-all hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 text-gold-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-gold-300 font-medium">Back to Home</span>
        </Link>
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
