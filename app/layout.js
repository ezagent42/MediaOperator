import './globals.css';

export const metadata = {
  title: 'MediaOperator｜AI-native 内容观察',
  description: 'AI-native 组织、agent workflow 与内容生产系统观察。'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
