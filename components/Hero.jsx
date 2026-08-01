'use client';

import { Monitor, Smartphone, ShieldCheck, ArrowLeft, Download, Database, RefreshCw, FileText, Clock } from 'lucide-react';

export default function Hero() {
  const DESKTOP_DOWNLOAD_URL = "https://drive.google.com/file/d/1I_vWpdzdtqVA4utOuaqnOW2JlJB1UBb_/view?usp=sharing";

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden hero-gradient-bg">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Real App Icon Header Preview */}
          <div className="flex justify-center mb-2">
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-2xl shadow-sky-500/10">
              <img 
                src="/icon.png" 
                alt="شعار غريديا لحسابات المدارس الأهلية" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-sky-400 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span>الإصدار الرئيسي 1.0.44 متوفر للتحميل الآن مخصص لنظام Windows</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            نظام <span className="gradient-text">غريديا</span> لحسابات المدارس الأهلية
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
            الحل البرمجي المتكامل المصمم خصيصاً لإدارة شؤون الطلاب، الأقساط، الرواتب، والمصروفات بدقة متناهية. 
            يمنحك <strong className="text-white font-semibold">تطبيق سطح المكتب (Windows)</strong> لإدارة مالية متميزة وفائقة، مع <strong className="text-white font-semibold">تطبيق الموبايل (Android/iOS)</strong> المخصص لمتابعة الإحصائيات (قريباً جداً).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={DESKTOP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Monitor className="w-5 h-5" />
              <span>تحميل تطبيق سطح المكتب (Windows)</span>
              <ArrowLeft className="w-4 h-4 mr-1" />
            </a>

            <div 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900/90 text-gray-400 font-semibold text-base border border-slate-800 cursor-not-allowed"
            >
              <Smartphone className="w-5 h-5 text-emerald-400/60" />
              <span>تطبيق الموبايل</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                قريباً جداً
              </span>
            </div>
          </div>

          {/* Quick Platform Highlights */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-right">
            <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-start gap-3">
              <Database className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white text-sm font-bold">عزل الأعوام الدراسية</h4>
                <p className="text-gray-400 text-xs mt-0.5">قاعدة بيانات مستقلة لكل سنة مع ترحيل الطلاب الآلي</p>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-start gap-3">
              <FileText className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white text-sm font-bold">طباعة PDF احترافية</h4>
                <p className="text-gray-400 text-xs mt-0.5">وصولات القبض وهويات الطلاب بدقة عالية ومعالجة RTL</p>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white text-sm font-bold">تفعيل وأمان عتادي</h4>
                <p className="text-gray-400 text-xs mt-0.5">ترخيص مشفر مربوط ببصمة العتاد وSupabase السحابية</p>
              </div>
            </div>

            <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-start gap-3">
              <RefreshCw className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white text-sm font-bold">مزامنة تلقائية</h4>
                <p className="text-gray-400 text-xs mt-0.5">نسخ احتياطي محلي وسحابي منظم مع تحديثات تلقائية</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
