/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Music, 
  Trophy, 
  Users, 
  ExternalLink, 
  Mail, 
  Instagram, 
  Facebook,
  Linkedin,
  ChevronRight,
  Sparkles,
  Zap,
  Dribbble,
  MapPin,
  Mic,
  Theater
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-indigo-200 bg-white p-1">
              <img 
                src="https://vvcet.ac.in/wp-content/uploads/2020/07/logo-5.png" 
                alt="VVCET Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/vvcet/100/100";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 leading-none">VVCET</span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Tiruchengode</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#schedule" className="hover:text-indigo-600 transition-colors">Schedule</a>
            <a href="#featured" className="hover:text-indigo-600 transition-colors">Portals</a>
            <a href="#cultural" className="hover:text-indigo-600 transition-colors">Cultural</a>
            <a href="#sports" className="hover:text-indigo-600 transition-colors">Sports</a>
            <button className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Background Video/Image Slot */}
        <div className="absolute inset-0 z-0">
          {/* Base Image Layer (Always visible as fallback) */}
          <img 
            src="https://content3.jdmagicbox.com/v2/comp/tiruchengode/e8/9999p4288.4288.140613130514.c7e8/catalogue/vidhya-vikas-college-of-engineering-and-technology6-kootapalli-tiruchengode-engineering-colleges-a1kzjo.jpg" 
            alt="VVCET Campus"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          {/* Video Layer (Overlays the image if it loads) */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-32690-large.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay for better text readability - reduced opacity */}
          <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-white/60 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-xs font-bold tracking-widest uppercase text-indigo-700 border border-indigo-200 shadow-sm">
              The Ultimate Hub for Excellence
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight uppercase title-bg-image drop-shadow-2xl">
              vvcet events <br className="hidden md:block" /> 2k26
            </h1>
            <p className="max-w-5xl mx-auto text-slate-950 text-base md:text-lg mb-10 leading-relaxed font-semibold text-shadow-sm bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white/40 shadow-2xl ring-1 ring-black/5">
              Explore a world of innovation, creativity, and athleticism.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#featured" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-200">
              Explore Events
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#schedule" className="w-full sm:w-auto px-8 py-4 rounded-2xl glass glass-hover text-slate-900 font-bold transition-all flex items-center justify-center gap-2 border border-slate-200">
              View Schedule
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Buttons Section */}
      <section id="featured" className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-slate-50" />
        <div className="absolute inset-0 -z-10 bg-grid-slate opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] animate-float-slow" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Portals</h2>
            <p className="text-slate-600">Direct access to our flagship event websites</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://vidyam-2k26.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group overflow-hidden rounded-3xl p-10 flex flex-col justify-between min-h-[320px] bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-xl shadow-blue-100"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-40 h-40 text-blue-600" />
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <Zap className="text-white w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4 text-slate-900">Visit Symposium </h3>
                <p className="text-slate-600 max-w-xs"> Vidyam26 Dive into the latest technological advancements and research papers.</p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-bold mt-8">
                Register Now <ExternalLink className="w-5 h-5" />
              </div>
            </motion.a>

            <motion.a
              href="https://axion2k262.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group overflow-hidden rounded-3xl p-10 flex flex-col justify-between min-h-[320px] bg-linear-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-xl shadow-emerald-100"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-40 h-40 text-emerald-600" />
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4 text-slate-900">Visit Workshop</h3>
                <p className="text-slate-600 max-w-xs">Axion 2K26 Hands-on learning experiences from industry experts and veterans.</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold mt-8">
                Register Now <ExternalLink className="w-5 h-5" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Cultural Events Section */}
      <section id="cultural" className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute inset-0 -z-10 bg-purple-50/50" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[100px] animate-pulse-soft delay-1000" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-slate-900">Cultural Extravaganza</h2>
              <p className="text-slate-600 max-w-xl">A celebration of art, music, and talent. Witness the most vibrant performances of the year.</p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <button className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-500 transition-colors">
                View All Cultural Events <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Dynamic Dance",
                desc: "Solo and group dance performances across various styles.",
                img: "https://mentalhealthcompanionwordpresscom.co/wp-content/uploads/2017/02/dance.jpg",
                icon: <Music className="w-5 h-5" />
              },
              {
                title: "Voice of VVCET",
                desc: "Singing competition featuring classical, melody, and pop genres.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkl66r0qSDoB2QNZkb6sQiexpEXULAZFleZw&s",
                icon: <Mic className="w-5 h-5" />
              },
              {
                title: "Mimicry & Standup",
                desc: "Laughter riot with impressions and original comedy sets.",
                img: "https://miro.medium.com/v2/1*KLZyfSK-hjVTLIPFKaDykw.jpeg",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                title: "Stage Drama",
                desc: "Powerful theatrical performances and storytelling.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qEcXaa8z9PWMzR6UIB4PoBntqlxAvu11Hg&s",
                icon: <Theater className="w-5 h-5" />
              },
              {
                title: "Instrumental Magic",
                desc: "Showcasing mastery over musical instruments.",
                img: "https://im.rediff.com/movies/2021/aug/03neil-nayyar3.jpg",
                icon: <Music className="w-5 h-5" />
              },
              {
                title: "Rap & Beatboxing",
                desc: "Urban rhythm and vocal percussion battle.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eQrg_3u06b_WZku2h2bYm-WgFTbMryaavw&s",
                icon: <Zap className="w-5 h-5" />
              },
              {
                title: "Traditional Arts",
                desc: "Celebrating our heritage through traditional competitions.",
                img: "https://img.freepik.com/free-vector/hand-drawn-sari-illustration_23-2149659049.jpg?semt=ais_user_personalization&w=740&q=80",
                icon: <Trophy className="w-5 h-5" />
              },
              {
                title: "Silambam",
                desc: "Demonstration of the ancient martial art of stick fencing.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrC1ilriohbUcHx589tRo0FXgU0qX1oT0-w&s",
                icon: <Zap className="w-5 h-5" />
              },
              {
                title: "Human Pyramid",
                desc: "A display of balance, strength, and team coordination.",
                img: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-216321,resizemode-75,msid-46987260/magazines/panache/how-to-assemble-perfect-human-pyramid-found.jpg",
                icon: <Users className="w-5 h-5" />
              }
            ].map((event, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group glass rounded-3xl overflow-hidden glass-hover shadow-lg shadow-slate-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-bold flex items-center gap-2 text-slate-900">
                    {event.icon}
                    Cultural
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold mb-3 text-slate-900">{event.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Events Section */}
      <section id="sports" className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute inset-0 -z-10 bg-orange-50/30" />
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] border-[40px] border-orange-100/20 rounded-full animate-drift" />
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] border-[30px] border-indigo-100/20 rounded-full animate-drift delay-500" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-slate-900">Sports Arena</h2>
            <p className="text-slate-600">Push your limits and showcase your athletic prowess</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cricket", icon: <Trophy className="w-8 h-8 text-yellow-600" />, desc: "The ultimate gentleman's game battle." },
              { name: "Volleyball", icon: <Zap className="w-8 h-8 text-orange-600" />, desc: "High-flying spikes and intense rallies." },
              { name: "Kabaddi", icon: <Users className="w-8 h-8 text-red-600" />, desc: "Strength, strategy, and breath control." },
              { name: "Kho-Kho", icon: <Zap className="w-8 h-8 text-blue-600" />, desc: "Speed and agility at its finest." },
              { name: "Throwball", icon: <Zap className="w-8 h-8 text-emerald-600" />, desc: "Precision and teamwork on the court." },
              { name: "Badminton", icon: <Zap className="w-8 h-8 text-indigo-600" />, desc: "Fast-paced shuttlecock action." },
              { name: "Chess", icon: <Trophy className="w-8 h-8 text-slate-700" />, desc: "The ultimate battle of the minds." },
              { name: "Carrom", icon: <Trophy className="w-8 h-8 text-amber-800" />, desc: "Striking precision and pocketing skills." },
              { name: "Athletics", icon: <Zap className="w-8 h-8 text-purple-600" />, desc: "Track and field events to test your limits." }
            ].map((sport, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-3xl flex flex-col items-center text-center glass-hover border-b-4 border-b-transparent hover:border-b-indigo-600 shadow-md shadow-slate-100"
              >
                <div className="mb-6 p-4 rounded-2xl bg-indigo-50">
                  {sport.icon}
                </div>
                <h4 className="font-display font-bold text-lg mb-4 text-slate-900">{sport.name}</h4>
                <p className="text-slate-600 text-xs">{sport.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="schedule" className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 bg-slate-50" />
        <div className="absolute inset-0 -z-10 bg-grid-slate opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-indigo-50/20 to-transparent animate-pulse-soft" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-slate-900">Event Roadmap</h2>
            <p className="text-slate-600">The journey of VVCET Events 2k26</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-indigo-100 rounded-full hidden md:block" />

            <div className="space-y-24 relative">
              {[
                {
                  title: "Sports Day",
                  date: "February 24, 2026",
                  desc: "Kickstarting the events with athletic excellence and team spirit.",
                  icon: <Trophy className="w-6 h-6 text-white" />,
                  color: "bg-orange-500"
                },
                {
                  title: "Workshop",
                  date: "March 25, 26, 27, 2026",
                  desc: "Hands-on technical sessions led by industry professionals.",
                  icon: <Users className="w-6 h-6 text-white" />,
                  color: "bg-emerald-500"
                },
                {
                  title: "Symposium",
                  date: "March 30, 2026",
                  desc: "A platform for innovation, research papers, and technical competitions.",
                  icon: <Zap className="w-6 h-6 text-white" />,
                  color: "bg-blue-500"
                },
                {
                  title: "Culturals",
                  date: "April 1, 2026",
                  desc: "The grand finale celebrating art, music, and vibrant performances.",
                  icon: <Music className="w-6 h-6 text-white" />,
                  color: "bg-purple-500"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 hover:shadow-indigo-100 transition-all group">
                      <span className="text-indigo-600 font-bold text-sm mb-2 block">{item.date}</span>
                      <h3 className="font-display text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Icon/Point */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-lg shadow-indigo-200 border-4 border-white`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-indigo-200 bg-white p-1">
                  <img 
                    src="https://vvcet.ac.in/wp-content/uploads/2020/07/logo-5.png" 
                    alt="VVCET Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/vvcet/100/100";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl tracking-tight text-slate-900 leading-none">VVCET</span>
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Tiruchengode</span>
                </div>
              </div>
              <p className="text-slate-600 max-w-sm mb-8">
                Vidyaa Vikas College of Engineering and Technology. Empowering students through innovation, culture, and sports.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/vvcetofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors text-slate-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063773751715" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-slate-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/vvcet-official" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors text-slate-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-slate-900">Quick Links</h5>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Home</a></li>
                <li><a href="#schedule" className="hover:text-indigo-600 transition-colors">Event Roadmap</a></li>
                <li><a href="#featured" className="hover:text-indigo-600 transition-colors">Featured Portals</a></li>
                <li><a href="#cultural" className="hover:text-indigo-600 transition-colors">Cultural Fest</a></li>
                <li><a href="#sports" className="hover:text-indigo-600 transition-colors">Sports Meet</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-slate-900">Contact Us</h5>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  info@vvcet.ac.in
                </li>
                <li className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-indigo-600" />
                  <a href="https://vvcet.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                    www.vvcet.ac.in
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                  <div>
                    <p className="mb-1">Tiruchengode, Tamil Nadu</p>
                    <a 
                      href="https://maps.app.goo.gl/mrCjwYk7MiSZSYuL8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2026 Vidyaa Vikas College of Engineering and Technology. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
