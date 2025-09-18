import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gradient-to-r from-indigo-500 via-purple-400 to-fuchsia-500 text-white p-4 shadow">
          <h1 className="text-3xl font-bold">MEGA Suite</h1>
        </header>
        <main className="flex min-h-screen">
          <nav className="w-56 bg-white border-r p-4">
            <ul className="space-y-2">
              <li><a href="/dashboard" className="font-semibold">Dashboard</a></li>
              <li><a href="/daily-dump">Daily Dump</a></li>
              <li><a href="/weekly-planning">Weekly Planning</a></li>
              <li><a href="/affirmation">Affirmation</a></li>
            </ul>
          </nav>
          <section className="flex-1 p-6">{children}</section>
        </main>
      </body>
    </html>
  );
}
