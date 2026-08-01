'use client';

import { Monitor, Smartphone, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl">
              غ
            </div>
            <div>
              <span className="text-lg font-bold text-white">غريديا (Gredia)</span>
              <p className="text-xs text-gray-400">نظام حسابات المدارس الأهلية المتكامل</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a href="#overview" className="hover:text-sky-400 transition-colors">نظرة عامة</a>
            <a href="#platforms" className="hover:text-sky-400 transition-colors">التطبيقات</a>
            <a href="#features" className="hover:text-sky-400 transition-colors">الميزات</a>
            <a href="#specs" className="hover:text-sky-400 transition-colors">المواصفات</a>
            <a href="#download" className="hover:text-sky-400 transition-colors">التحميل</a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ نظام غريديا بحسابات المدارس الأهلية.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-4 h-4 text-sky-400" />
            <span>تطوير وإشراف المطور الأساسي: <strong className="text-gray-200">علي طارق</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
