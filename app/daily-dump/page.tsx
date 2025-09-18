'use client';

import { useState } from 'react';

export default function DailyDumpPage() {
  const [text, setText] = useState('');
  const [level, setLevel] = useState(3);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daily Dump</h2>
      <label className="block mb-2 font-semibold">Overwhelm Level: {level}</label>
      <input
        type="range"
        min="1"
        max="5"
        value={level}
        onChange={e => setLevel(Number(e.target.value))}
        className="mb-4 w-full"
      />
      <textarea
        rows={6}
        className="w-full border rounded p-2 mb-4"
        placeholder="Dump your thoughts here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="bg-indigo-500 text-white px-4 py-2 rounded">Save Entry</button>
    </div>
  );
}
