import { useState } from "react";
export default function ExpenseForm({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Supabase upload logic here
    if (onSubmit) onSubmit({ category, amount, notes, file, submitted_at: new Date().toISOString() });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col gap-4">
      <h2 className="text-lg font-bold text-white mb-2">Add New Expense</h2>
      <input type="text" placeholder="Category" className="p-3 rounded bg-gray-800 text-white" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="number" placeholder="Amount (SAR)" className="p-3 rounded bg-gray-800 text-white" value={amount} onChange={e => setAmount(e.target.value)} required />
      <textarea placeholder="Notes" className="p-3 rounded bg-gray-800 text-white" value={notes} onChange={e => setNotes(e.target.value)} />
      <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={e => setFile(e.target.files[0])} className="text-white" />
      <button type="submit" className="bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:bg-blue-900 transition">Submit Expense</button>
    </form>
  );
}
