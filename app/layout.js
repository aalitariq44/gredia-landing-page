import './globals.css';

export const metadata = {
  title: 'غريديا (Gredia) | النظام المتكامل لحسابات المدارس الأهلية',
  description: 'النظام البرمجي الأقوى والأشمل لإدارة حسابات المدارس الأهلية والشؤون المالية، مع تطبيق سطح المكتب (Windows) وتطبيق الهواتف الذكية (Android & iOS).',
  keywords: ['حسابات المدارس', 'إدارة المدارس الأهلية', 'غريديا', 'Gredia', 'أقساط الطلاب', 'رواتب المعلمين', 'برنامج محاسبة مدرسية'],
  authors: [{ name: 'علي طارق - المطور الأساسي' }],
  openGraph: {
    title: 'غريديا (Gredia) | النظام المتكامل لحسابات المدارس الأهلية',
    description: 'إدارة متكاملة لأقساط الطلاب، هويات الطلاب الذكية، الرواتب، المصروفات، والمزامنة السحابية.',
    locale: 'ar_IQ',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <head>
        <meta name="theme-color" content="#0b0f19" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Tajawal:wght@400;500;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#0b0f19] text-gray-100 antialiased min-h-screen selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
