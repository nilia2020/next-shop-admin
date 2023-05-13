import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`bg-slate-300 ${inter.className} h-screen  `}>
      <h1>Hello</h1>
    </main>
  );
}
