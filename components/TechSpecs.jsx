'use client';

import { Monitor, Smartphone, Database, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

export default function TechSpecs() {
  return (
    <section id="specs" className="py-20 bg-slate-950/80 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            المواصفات التقنية و<span className="gradient-text">متطلبات التشغيل</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            تم بناء المنظومة باستخدام أحدث التقنيات لضمان الاستقرار، السرعة العالية، وأعلى مستويات الأمان
          </p>
        </div>

        {/* Specs Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Desktop Specs */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">متطلبات تطبيق سطح المكتب</h3>
                <p className="text-xs text-gray-400">Windows Executable Edition</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">نظام التشغيل المدعوم</span>
                <span className="text-white font-semibold">Windows 10 / 11 (64-bit)</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">إطار الواجهة (GUI)</span>
                <span className="text-sky-400 font-semibold">PyQt6 (High-DPI Support)</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">محرك قواعد البيانات</span>
                <span className="text-white font-semibold">SQLite (محلي) + Google Drive (سحابي)</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">تشفير التراخيص والأمان</span>
                <span className="text-emerald-400 font-semibold">bcrypt & Fernet Hardware Key</span>
              </div>

              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-gray-400 font-medium">طباعة التقارير والباجات</span>
                <span className="text-white font-semibold">ReportLab (PDF High Resolution)</span>
              </div>
            </div>
          </div>

          {/* Mobile Specs */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">متطلبات تطبيق الهاتف المحمول</h3>
                <p className="text-xs text-gray-400">Cross-Platform Mobile App</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">الأنظمة المدعومة</span>
                <span className="text-white font-semibold">Android 7.0+ / iOS 12.0+</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">تقنية التطوير</span>
                <span className="text-emerald-400 font-semibold">Flutter & Dart SDK</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">الرسوم البيانية والتحليل</span>
                <span className="text-white font-semibold">fl_chart Engine</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-gray-400 font-medium">نمط العمل offline</span>
                <span className="text-emerald-400 font-semibold">محتفظ محلياً بـ SQLite3</span>
              </div>

              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-gray-400 font-medium">آلية المزامنة</span>
                <span className="text-white font-semibold">Google Drive Sync</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
