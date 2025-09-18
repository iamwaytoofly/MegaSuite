'use client';

import { useState } from 'react';

export default function DailyDumpPage() {
  const [text, setText] = useState('');
  const [level, setLevel] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    if (!text.trim()) {
      setMessage('Please enter some text before saving.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/daily-dump', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text.trim(),
          overwhelmLevel: level,
          userId: 'temp-user-id', // TODO: Replace with actual user ID from auth
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Entry saved successfully!');
        setText('');
        setLevel(3);
      } else {
        setMessage(data.error || 'Failed to save entry');
      }
    } catch (error) {
      setMessage('Error saving entry. Please try again.');
      console.error('Save error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
      <button 
        onClick={handleSave}
        disabled={isLoading}
        className="bg-indigo-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Saving...' : 'Save Entry'}
      </button>
      {message && (
        <div className={`mt-4 p-3 rounded ${
          message.includes('successfully') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
