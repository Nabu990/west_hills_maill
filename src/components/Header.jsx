import { MapPin, Phone, Globe, Clock, Star, ArrowRight, Sparkles, Building2, Users, Award, Navigation, Heart, Zap } from 'lucide-react'
import { cn } from '../utils/cn'

export default function Header({ mall }) {
  return (
    <header className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0">
        <img
          src={mall.heroImage}
          alt="West Hills Mall"
          className="w-full h-full object-cover animate-shimmer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-950/95"></div>
        
        {/* Modern gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 to-blue-500/15 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-gradient-to-br from-teal-500/30 to-cyan-500/15 rounded-full filter blur-3xl animate-blob delay-200"></div>
          <div className="absolute bottom-20 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/25 to-blue-500/10 rounded-full filter blur-3xl animate-blob delay-400"></div>
          <div className="absolute bottom-40 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-teal-500/25 to-cyan-500/10 rounded-full filter blur-3xl animate-blob delay-600"></div>
        </div>
      </div>
      
      {/* Modern geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px'
        }}></div>
      </div>
      
      {/* Modern corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-2xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-teal-500/40 rounded-tr-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-teal-500/40 rounded-bl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-500/40 rounded-br-2xl"></div>
      
      {/* Floating modern icons */}
      <div className="absolute top-1/4 left-24 animate-float-slow">
        <Navigation className="w-7 h-7 text-cyan-500/30" />
      </div>
      <div className="absolute top-1/3 right-28 animate-float-medium delay-200">
        <Heart className="w-6 h-6 text-teal-500/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float-fast delay-400">
        <Zap className="w-5 h-5 text-cyan-500/25" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-float-slow delay-600">
        <Sparkles className="w-6 h-6 text-teal-500/25" />
      </div>
      
      <div className="container-custom relative z-10 py-12">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fadeInUp">
            {/* Modern badge */}
            <div className="inline-flex items-center gap-3 mb-8 glass-cyan px-6 py-3 rounded-full border border-cyan-500/40 shadow-cyan">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse-slow" />
              <span className="text-cyan-300 font-semibold tracking-[0.2em] uppercase text-sm">Modern Shopping Experience</span>
              <Heart className="w-4 h-4 text-teal-400 animate-pulse-slow delay-200" />
            </div>
            
            {/* Modern centered heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text-cyan block mb-2">{mall.name}</span>
              <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl font-light">Where Style Meets</span>
            </h1>
            
            {/* Rating and type */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 glass-cyan px-6 py-3 rounded-full animate-pulse-glow shadow-cyan border border-cyan-500/40">
                <Star className="w-7 h-7 fill-cyan-400 text-cyan-400" />
                <span className="font-bold text-2xl text-cyan-100">{mall.rating}</span>
              </div>
              <div className="h-12 w-px bg-cyan-500/40"></div>
              <span className="text-3xl text-white/70 font-light tracking-wide">{mall.type}</span>
            </div>
            
            {/* Description */}
            <p className="text-22xl text-white/80 max-w-2xl mx-auto leading-relaxed mb1212 font-light">{mall.description}</p>
          </div>
          
          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fadeInUp delay-200">
            <div className="flex items-center gap-3 glass-cyan px-6 py-4 rounded-2xl border border-cyan-500/30 shadow-cyan">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-cyan">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/90 text-lg">{mall.address}</span>
            </div>
            <div className="flex items-center gap-3 glass-teal px-6 py-4 rounded-2xl border border-teal-500/30 shadow-teal">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-teal">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/90 text-lg">{mall.phone}</span>
            </div>
            <div className="flex items-center gap-3 glass-cyan px-6 py-4 rounded-2xl border border-cyan-500/30 shadow-cyan">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-cyan">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/90 text-lg">{mall.website}</span>
            </div>
          </div>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-10 mb-8 animate-fadeInUp delay-300">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-cyan mb-2">{Object.values(mall.categories).reduce((a, b) => a + b, 0)}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Total Stores</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-teal mb-2">{Object.keys(mall.categories).length}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-cyan mb-2">{mall.rating}</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text-teal mb-2">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Security</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp delay-400">
            <button className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 px-10 py-5 rounded-full font-bold text-xl hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 transition-all hover:scale-105 flex items-center gap-4 shadow-cyan border-2 border-cyan-400/60">
              <span>Explore Mall</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group glass-cyan px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-500/20 transition-all flex items-center gap-4 border border-cyan-500/40">
              <span>View Map</span>
              <Navigation className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-cyan-400 text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-8 h-12 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2 shadow-cyan">
            <div className="w-2 h-3 bg-cyan-400 rounded-full animate-pulse shadow-cyan"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
