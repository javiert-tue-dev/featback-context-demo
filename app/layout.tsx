import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FEATBACK contextual feedback walkthrough',
  description: 'A fictional classroom walkthrough of an optional contextual feedback extension and its proposed evaluation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
