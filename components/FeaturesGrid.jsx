'use client';

import { 
  Building2, Users, CreditCard, IdCard, Briefcase, 
  Receipt, ArrowUpRight, ShieldCheck, CloudDownload, RefreshCw, Sparkles 
} from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Building2,
      color: 'from-sky-500 to-blue-600',
      textColor: 'text-sky-400',
      title: 'إدارة المدارس المتعددة',
      desc: 'دعم كامل لإدارة عدة مدارس تابعة لنفس المؤسسة (روضة، ابتدائي، متوسط، ثانوي) مع تعيين شعار وإعدادات منفصلة لكل مدرسة تظهر على المطبوعات.'
    },
    {
      icon: CreditCard,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      title: 'شؤون الطلاب وحساب الأقساط',
      desc: 'متابعة دقيقة للقسط الكلي، المدفوعات المسددة، والمبالغ المتبقية لكل طالب، مع طباعة فورية لوصولات القبض الرسمية بصيغة PDF.'
    },
    {
      icon: IdCard,
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      title: 'مولد هويات الطلاب الذكية (PDF)',
      desc: 'أداة مبتكرة لتصميم وتوليد باجات وهويات الطلاب المدرسية مباشرة وجاهزة للطباعة مع المعالجة التلقائية للأسماء والخطوط العربية RTL.'
    },
    {
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400',
      title: 'الكادر التدريسي والرواتب',
      desc: 'تنظيم بيانات الهيئة التدريسية والكادر الخدمي، حساب الرواتب الشهرية على أساس الحصص أو العقود الثابتة، وتسجيل المكافآت والاستقطاعات.'
    },
    {
      icon: Receipt,
      color: 'from-rose-500 to-pink-600',
      textColor: 'text-rose-400',
      title: 'الرسوم الإضافية والمصروفات',
      desc: 'فصل الرسوم الدراسية عن خدمات النقل والكتب والزي المدرسي، وتتبع المصروفات الإدارية التشغيلية والإيرادات الخارجية كالكافتيريا.'
    },
    {
      icon: ArrowUpRight,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      title: 'ترحيل الطلاب والتخرج الآلي',
      desc: 'عزل البيانات المالية لكل عام دراسي في قاعدة منفصلة، مع خريطة ترفيع آلي للطلاب بين الصفوف واستثناء صفوف التخرج تلقائياً.'
    },
    {
      icon: ShieldCheck,
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      title: 'تفعيل مشفر ببصمة العتاد',
      desc: 'نظام حماية هجين مشفر يربط الترخيص بعتاد الجهاز الفريد (Motherboard, CPU, HDD) مع التحقق والأمان التام والعمل أوفلاين.'
    },
    {
      icon: CloudDownload,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      title: 'نسخ احتياطي سحابي بـ Google Drive',
      desc: 'حماية بياناتك من الضياع عبر إنشاء نسخ احتياطية تلقائية مخصصة (يومية/أسبوعية) محلياً، ورفعها ومزامنتها سحابياً عبر Google Drive.'
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold border border-sky-500/20">
            <Sparkles className="w-4 h-4" />
            <span>ميزات فعلية مدعومة 100%</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            كل ما تحتاجه لإدارة <span className="gradient-text">حسابات مدرستك</span> في مكان واحد
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            تم تصميم واختبار كل خاصية داخل غريديا لتلائم متطلبات المحاسبة في المدارس الأهلية بدون تعقيد
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
