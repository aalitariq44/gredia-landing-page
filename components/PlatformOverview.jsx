'use client';

import { useState } from 'react';
import { Monitor, Smartphone, CheckCircle, Cpu, HardDrive, Shield, Wifi, Zap, Layers, RefreshCw } from 'lucide-react';

export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState('desktop');

  return (
    <section id="platforms" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            منظومة ثنائية متكاملة لـ <span className="gradient-text">سطح المكتب والموبايل</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            تم بناء غريديا ليوفر أقوى بيئة عمل مكتبية للمحاسبين، مع تطبيق هاتف ذكي مرن للإدارة والمتابعة المباشرة
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('desktop')}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 ${
              activeTab === 'desktop'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105'
                : 'bg-slate-900 text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Monitor className="w-5 h-5" />
            <span>تطبيق سطح المكتب (Windows)</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 ${
              activeTab === 'mobile'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                : 'bg-slate-900 text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-5 h-5" />
            <span>تطبيق الموبايل (Android / iOS)</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800">
          {activeTab === 'desktop' ? (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/20">
                  <Cpu className="w-4 h-4" />
                  <span>تطبيق Python & PyQt6 متطور</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  مركز التحكم المحاسبي والإداري الرئيسي
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  تم بناء تطبيق سطح المكتب بلغة Python وتأطيره باستخدام PyQt6 ليمنحك واجهات سريعة الاستجابة بالوضع النهاري المريح، مع معالجة حقيقية للنصوص والخطوط العربية في الإيصالات والتقارير.
                </p>

                <ul className="space-y-3">
                  {[
                    'إدارة كاملة لقواعد بيانات الطلاب، الأقساط، والرسوم الإضافية.',
                    'طباعة إيصالات الدفع الفورية وهويات الطلاب الذكية (PDF High DPI).',
                    'عزل السنوات الدراسية وإدارة الترفيع والتخرج التلقائي للطلاب.',
                    'إدارة عقود المعلمين، الكادر الخدمي، الرواتب والاقطاعات والمكافآت.',
                    'تراخيص مشفرة بالعتاد (Motherboard, CPU, HDD, MAC) محلياً.',
                    'نسخ احتياطي تلقائي (محلي وسحابي عبر Google Drive) وتحديثات تلقائية عبر Firebase.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Card */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Gredia Desktop v1.0.44</span>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                      <p className="text-[11px] text-gray-400">إجمالي الطلاب</p>
                      <p className="text-lg font-bold text-white mt-1">485 طالب</p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                      <p className="text-[11px] text-gray-400">المبالغ المحصلة</p>
                      <p className="text-lg font-bold text-emerald-400 mt-1">142.5M د.ع</p>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                      <p className="text-[11px] text-gray-400">المتبقي</p>
                      <p className="text-lg font-bold text-amber-400 mt-1">38.0M د.ع</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-2">
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>إدارة السنة الدراسية</span>
                      <span className="text-sky-400 font-semibold">2026 - 2027 (نشط)</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-sky-500 h-full w-[78%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-400 pt-1">
                      <span>نسبة التحصيل: 78.9%</span>
                      <span>ترحيل تلقائي مجهز</span>
                    </div>
                  </div>

                  <div className="bg-sky-950/40 p-3 rounded-xl border border-sky-800/40 flex items-center justify-between text-xs text-sky-200">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-sky-400" />
                      حالة الترخيص: مفعل بنجاح (Hardware License OK)
                    </span>
                    <span className="bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded text-[10px]">Google Drive Backup OK</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  <Smartphone className="w-4 h-4" />
                  <span>تطبيق Flutter & Dart متوافق مع Android و iOS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  المتابعة المالية والإدارية السريعة في جيبك
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  تم تطوير تطبيق الهاتف الذكي بإطار عمل Flutter ومكتبات fl_chart الرسمية ليقدم لك رؤية لحظية شاملة للأقساط والمصروفات مع إمكانية مشاركة وصولات القبض والتقارير عبر شبكات التواصل.
                </p>

                <ul className="space-y-3">
                  {[
                    'لوحة تحكم تفاعلية مع رسوم بيانية ومؤشرات أداء سريعة.',
                    'استعراض تفصيلي لبيانات الطلاب وأقساطهم المسددة والمتبقية.',
                    'تسجيل ومتابعة المصروفات والإيرادات الخارجية أثناء التنقل.',
                    'تصدير التقارير المالية ومشاركتها فورياً كملفات PDF.',
                    'تخزين محلي آمن بـ SQLite مع دعم كامل للعمل بدون إنترنت (Offline First).',
                    'مزامنة سحابية مرنة مع نظام سطح المكتب عبر Google Drive Sync.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile App Screen Mockup */}
              <div className="flex justify-center">
                <div className="w-full max-w-[320px] bg-slate-900 rounded-[36px] p-4 border-4 border-slate-700 shadow-2xl space-y-4">
                  <div className="w-20 h-4 bg-slate-800 mx-auto rounded-full mb-2" />
                  
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl text-white">
                    <p className="text-xs text-emerald-100 font-medium">غريديا الموبايل</p>
                    <h4 className="text-xl font-bold mt-1">تقرير التحصيل اليومي</h4>
                    <p className="text-xs text-emerald-100 mt-2">تم تحصيل 12 دفعة اليوم</p>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 rounded-xl space-y-2 border border-slate-700">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-semibold">قسط الطالب: محمد علي</span>
                      <span className="text-emerald-400 font-bold">250,000 د.ع</span>
                    </div>
                    <p className="text-[10px] text-gray-400">المدرسة: الثانوية الأهلية - الدفعة الثالثة</p>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 rounded-xl space-y-2 border border-slate-700">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-300 font-semibold">مصروف: شراء مطبوعات</span>
                      <span className="text-rose-400 font-bold font-mono">-75,000 د.ع</span>
                    </div>
                    <p className="text-[10px] text-gray-400">بند المصروفات الإدارية</p>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="inline-block text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
                      مزامنة Google Drive مكتملة ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
