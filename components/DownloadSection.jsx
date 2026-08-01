'use client';

import { Download, Monitor, Smartphone, CheckCircle2, FileCheck, Shield, ExternalLink } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-sky-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            حمل تطبيق <span className="gradient-text">غريديا</span> الآن
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            احصل على النسخة المستقرة من تطبيق سطح المكتب أو تطبيق الموبايل وابدأ في تنظيم حسابات مدرستك الأهلية باحترافية
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Desktop Download Card */}
          <div className="glass-panel rounded-3xl p-8 border border-sky-500/30 flex flex-col justify-between space-y-8 hover:border-sky-500/60 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-600/30">
                  <Monitor className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/20">
                  الإصدار 1.0.44 (Windows)
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">تطبيق سطح المكتب</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  الملف التنفيذي النهائي المخصص لأجهزة الكمبيوتر والمحاسبين. يشمل المحرك المحاسبي كاملاً وطباعة PDF والتفعيل الآمن.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>تثبيت سريع وخفيف على أنظمة Windows 10/11</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>يتضمن محرك SQLite وقوالب الطباعة العربية</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>دعم كامل للنسخ الاحتياطي السحابي والمحلي</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a 
                href="#download-desktop"
                onClick={(e) => {
                  e.preventDefault();
                  alert('رابط التحميل المباشر لنسخة سطح المكتب جاهز للربط باللينك النهائي الخاص بك.');
                }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                <span>تحميل برنامج الكمبيوتر (.EXE)</span>
              </a>
              <p className="text-center text-[11px] text-gray-400">حجم الملف: متوافق وسريع | آمن ومفحص 100%</p>
            </div>
          </div>

          {/* Mobile Download Card */}
          <div className="glass-panel rounded-3xl p-8 border border-emerald-500/30 flex flex-col justify-between space-y-8 hover:border-emerald-500/60 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  الإصدار 1.0.11 (Mobile)
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">تطبيق الهاتف المحمول</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  تطبيق فلاتر المباشر لمتابعة الإحصائيات والأقساط والمصروفات من هاتفك الذكي أينما كنت.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تحميل مباشر بصيغة APK لأجهزة Android</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>لوحة إحصائيات تفاعلية ورسوم بيانية سريعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>مزامنة سحابية لحظية مع بيانات الكمبيوتر</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a 
                href="#download-mobile"
                onClick={(e) => {
                  e.preventDefault();
                  alert('رابط التحميل المباشر لتطبيق الموبايل جاهز للربط باللينك النهائي الخاص بك.');
                }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                <span>تحميل تطبيق الموبايل (.APK)</span>
              </a>
              <p className="text-center text-[11px] text-gray-400">متوافق مع جميع الهواتف واللوحيات الذكية</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
