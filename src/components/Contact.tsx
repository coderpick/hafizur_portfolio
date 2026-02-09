import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hafizur@developer.com', color: 'text-primary' },
    { icon: Phone, label: 'Phone', value: '+880 1XXX-XXXXXX', color: 'text-accent-green' },
    { icon: MapPin, label: 'Location', value: 'Bangladesh', color: 'text-accent-blue' },
    { icon: Clock, label: 'Availability', value: 'Mon - Sat, 9AM - 9PM', color: 'text-accent' },
  ];

  return (
    <section id="contact" className="relative py-24 bg-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Let's Talk
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-dark flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-700/50">
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                      <p className="text-white font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social quick links */}
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-sm text-slate-500 mb-3">Find me on</p>
                <div className="flex gap-3">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Stack Overflow'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-3 py-2 glass rounded-lg text-xs text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-4 animate-slide-up">
                  <div className="w-20 h-20 rounded-full bg-accent-green/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-accent-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-center">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-dark border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-dark border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-dark border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-dark border border-slate-700 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
