'use client';

import { useState, useEffect } from 'react';
import { Monitor, Smartphone, Download, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DESKTOP_DOWNLOAD_URL = "https://drive.google.com/file/d/1I_vWpdzdtqVA4utOuaqnOW2JlJB1UBb_/view?usp=sharing";

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3 shadow-xl border-b border-slate-800' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand with Real Icon */}
          <div className="flex items-center gap-3">
            <img 
              src="/icon.png" 
              alt="شعار تطبيق غريديا لحسابات المدارس الأهلية" 
              className="w-10 h-10 object-contain drop-shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">غريديا</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20">
                  v1.0.44
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">نظام حسابات المدارس الأهلية</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#overview" className="hover:text-sky-400 transition-colors">نظرة عامة</a>
            <a href="#platforms" className="hover:text-sky-400 transition-colors">التطبيقات</a>
            <a href="#features" className="hover:text-sky-400 transition-colors">الميزات الرئيسية</a>
            <a href="#specs" className="hover:text-sky-400 transition-colors">المواصفات</a>
            <a href="#download" className="hover:text-sky-400 transition-colors">التحميل</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={DESKTOP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-sky-600/25 transition-all duration-200 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>تحميل البرنامج للكمبيوتر</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-gray-300 hover:text-white"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-slate-800 flex flex-col gap-4 text-center">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-sky-400 py-1">نظرة عامة</a>
            <a href="#platforms" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-sky-400 py-1">التطبيقات</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-sky-400 py-1">الميزات الرئيسية</a>
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-sky-400 py-1">المواصفات</a>
            <a 
              href={DESKTOP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm mt-2"
            >
              <Download className="w-4 h-4" />
              <span>تحميل البرنامج للكمبيوتر</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
