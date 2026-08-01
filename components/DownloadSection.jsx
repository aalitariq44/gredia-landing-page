'use client';

import { Download, Monitor, Smartphone, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

export default function DownloadSection() {
  const DESKTOP_DOWNLOAD_URL = "https://drive.google.com/file/d/1I_vWpdzdtqVA4utOuaqnOW2JlJB1UBb_/view?usp=sharing";

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
            احصل على النسخة الكاملة المستقرة من برنامج سطح المكتب ومباشرة العمل على إدارة حسابات مدرستك الأهلية
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
                  متاح للتحميل الفوري (Windows)
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  تطبيق سطح المكتب
                </h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  النسخة التنفيذية المخصصة لأجهزة الكمبيوتر والمحاسبين. تشمل المحرك المحاسبي الكامل وطباعة وصولات PDF وإدارة هويات الطلاب والتفعيل الآمن.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>ملف تنفيذي مجهز لتشغيل مباشر على Windows 10/11</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>يتضمن محرك SQLite وقوالب الطباعة العربية المتقدمة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>دعم النسخ الاحتياطي السحابي عبر Google Drive وتفعيل العتاد</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a 
                href={DESKTOP_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-sky-600/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                <span>تحميل برنامج الكمبيوتر المباشر (Google Drive)</span>
                <ExternalLink className="w-4 h-4 mr-1 opacity-80" />
              </a>
              <p className="text-center text-[11px] text-gray-400">ملف مفحص وآمن 100% | تحميل مباشر متاح الآن</p>
            </div>
          </div>

          {/* Mobile Download Card (Coming Soon) */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-400/80 border border-slate-700">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  قريباً جداً
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">تطبيق الهاتف المحمول</h3>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                  تطبيق فلاتر المباشر لمتابعة الإحصائيات والأقساط والمصروفات من هاتفك الذكي أينما كنت.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>تطوير متقدم بإطار عمل Flutter متوافق مع Android و iOS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>رسوم بيانية تفاعلية ومؤشرات سريعة لإدارة المدرسة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0" />
                  <span>مزامنة سحابية مرنة عبر Google Drive</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 font-bold text-base cursor-not-allowed">
                <Clock className="w-5 h-5" />
                <span>تطبيق الموبايل (قريباً جداً)</span>
              </div>
              <p className="text-center text-[11px] text-gray-400">يتم الآن تجهيز وتدقيق النسخة النهائية لنشرها على المتاجر</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
