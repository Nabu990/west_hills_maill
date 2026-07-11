import { MapPin, Phone, Globe, Mail, Heart, Facebook, Instagram, Twitter, Crown, Gem, Sparkles, ArrowUp } from 'lucide-react'

export default function Footer({ mall }) {
  return (
    <footer className="relative py-20 border-t border-gold-500/20 bg-brand-950">
      {/* Premium background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-luxury-500/5 rounded-full filter blur-3xl animate-blob delay-200"></div>
      </div>
      
      {/* Elegant corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold-500/20"></div>
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-luxury-500/20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-luxury-500/20"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold-500/20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-gold-400 animate-pulse-slow" />
              <h3 className="text-3xl font-bold gradient-text">{mall.name}</h3>
              <Gem className="w-6 h-6 text-luxury-400 animate-pulse-slow delay-200" />
            </div>
            <p className="text-white/60 mb-8 leading-relaxed max-w-md">{mall.description}</p>
            
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-14 h-14 glass-gold rounded-full flex items-center justify-center hover:bg-gold-500/30 transition-all hover:scale-110 group shadow-gold">
                <Facebook className="w-6 h-6 text-gold-400 group-hover:text-gold-300" />
              </a>
              <a href="#" className="w-14 h-14 glass-gold rounded-full flex items-center justify-center hover:bg-luxury-500/30 transition-all hover:scale-110 group shadow-luxury">
                <Instagram className="w-6 h-6 text-luxury-400 group-hover:text-luxury-300" />
              </a>
              <a href="#" className="w-14 h-14 glass-gold rounded-full flex items-center justify-center hover:bg-gold-500/30 transition-all hover:scale-110 group shadow-gold">
                <Twitter className="w-6 h-6 text-gold-400 group-hover:text-gold-300" />
              </a>
            </div>
            
            <div className="glass-gold rounded-2xl p-6 border border-gold-500/20 shadow-gold">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span className="text-gold-300 font-medium">Newsletter</span>
              </div>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-slate-900/50 border border-gold-500/30 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                <button className="bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all shadow-gold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-5 h-5 text-gold-400" />
              <h4 className="font-semibold text-lg text-gold-300">Contact Information</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <span>{mall.address}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-luxury-500/10 flex items-center justify-center border border-luxury-500/20 group-hover:bg-luxury-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-luxury-400" />
                </div>
                <span>{mall.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 transition-colors">
                  <Globe className="w-5 h-5 text-gold-400" />
                </div>
                <span>{mall.website}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-luxury-500/10 flex items-center justify-center border border-luxury-500/20 group-hover:bg-luxury-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-luxury-400" />
                </div>
                <span>info@westhillsmallgh.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Gem className="w-5 h-5 text-luxury-400" />
              <h4 className="font-semibold text-lg text-luxury-300">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <li className="text-white/70 hover:text-gold-300 cursor-pointer transition-colors flex items-center gap-3 group">
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform">→</span>
                About Us
              </li>
              <li className="text-white/70 hover:text-gold-300 cursor-pointer transition-colors flex items-center gap-3 group">
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform">→</span>
                Store Directory
              </li>
              <li className="text-white/70 hover:text-luxury-300 cursor-pointer transition-colors flex items-center gap-3 group">
                <span className="text-luxury-400 group-hover:translate-x-1 transition-transform">→</span>
                Events
              </li>
              <li className="text-white/70 hover:text-gold-300 cursor-pointer transition-colors flex items-center gap-3 group">
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform">→</span>
                Contact
              </li>
              <li className="text-white/70 hover:text-luxury-300 cursor-pointer transition-colors flex items-center gap-3 group">
                <span className="text-luxury-400 group-hover:translate-x-1 transition-transform">→</span>
                Careers
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gold-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50">
            <p>&copy; 2024 {mall.name}. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-gold-500 fill-gold-500 animate-pulse" /> in Accra, Ghana
            </p>
          </div>
        </div>
        
        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-14 h-14 glass-gold rounded-full flex items-center justify-center hover:bg-gold-500/30 transition-all hover:scale-110 shadow-gold group"
        >
          <ArrowUp className="w-6 h-6 text-gold-400 group-hover:text-gold-300" />
        </button>
      </div>
    </footer>
  )
}
