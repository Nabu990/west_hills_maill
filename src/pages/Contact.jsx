import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-custom py-20">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Contact Us</h1>
        <p className="text-xl text-white/70 mb-12">Get in touch with West Hills Mall</p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-dark rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-white/70">+233 30 293 3232</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-white/70">info@westhillsmallgh.com</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-white/70">N 1, Accra, Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hours</h3>
                  <p className="text-white/70">Open · Closes 9 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-dark rounded-3xl p-8 border border-cyan-500/20">
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-300">{errorMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@example.com"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="How can we help you?"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Please describe your inquiry in detail..."
                  required
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-cyan border border-cyan-400/60 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
