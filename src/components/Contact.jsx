import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_PROFILES } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Code2, 
  MapPin, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Have an opportunity or want to connect? Feel free to reach out directly via email, phone, or the contact form below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-blue-400/40 shrink-0">
                  <img
                    src="/ramesh_photo.png"
                    alt="Ramesh S"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Ramesh S</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Frontend Developer • Ready to Join
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">
                Let's start a conversation.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am actively seeking <strong className="text-white">Frontend Developer</strong> or <strong className="text-white">Software Development Engineer (SDE)</strong> roles. Let's discuss how my skills in HTML5, CSS3, JavaScript, and full-stack web development can contribute to your team.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Phone / Mobile
                    </span>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <button
                  id="contact-copy-phone-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:text-emerald-400 text-slate-400 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 block">
                Social & Professional Profiles:
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/ramesh045/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#0a66c2] hover:bg-white/10 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/rameshshanmugam2005-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/rameshshanmugam45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400 hover:bg-white/10 transition-colors"
                  title="LeetCode"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40">
              
              {isSuccess ? (
                <div className="p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Ramesh S will get back to you promptly at the provided email address.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Recruiter"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-300">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-300">
                      Subject / Role Title (Optional)
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Frontend Developer / SDE Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white/5 border text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.message ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-white text-black hover:bg-slate-200 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
