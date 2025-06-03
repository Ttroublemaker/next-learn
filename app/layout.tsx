import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 加这个classname解决使用trancy插件报错问题
    <html lang="en" className="trancy-zh-CN">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
