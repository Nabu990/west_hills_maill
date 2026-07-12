import { MapPin, Navigation, Phone, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { mallData } from '../data/mallData'

export default function Map() {
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
        <h1 className="text-5xl font-bold mb-4 gradient-text">Location</h1>
        <p className="text-xl text-white/70 mb-12">Find us at West Hills Mall</p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-dark rounded-3xl p-8 border border-cyan-500/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Address</h3>
                  <p className="text-white/70">{mallData.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-white/70">{mallData.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Hours</h3>
                  <p className="text-white/70">{mallData.hours}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Coordinates</h3>
                  <p className="text-white/70">{mallData.coordinates}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-dark rounded-3xl overflow-hidden border border-cyan-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7246987654321!2d-0.34371883!3d5.5452204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207b0d5e4e4e4e%3A0x4e4e4e4e4e4e4e4e!2sWest%20Hills%20Mall%2C%20Weija%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
