'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Dashboard() {
  const [msg, setMsg] = useState('');

  const handleUpdate = async () => {
    // Basic placeholder for dashboard action
    setMsg('Content updated successfully.');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl mb-8">Admin Dashboard</h1>
      <div className="bg-white p-8 rounded shadow-sm">
        <h2 className="text-2xl mb-4">Manage Inventory</h2>
        <button 
          onClick={handleUpdate}
          className="bg-[#C56A3C] text-white px-6 py-2 rounded"
        >
          Save Changes
        </button>
        {msg && <p className="mt-4 text-green-600">{msg}</p>}
      </div>
    </div>
  );
}