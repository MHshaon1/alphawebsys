import { useState } from "react";
import { supabase } from "../../supabaseClient.js";

export default function ExpenseForm({ onSubmitted }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    let file_url = null;
    if (file) {
      // Upload file to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from("uploads")
        .upload(`receipts/${Date.now()}_${file.name}`, file);
      if (uploadError) {
        setError("File upload failed: " + uploadError.message);
        setSubmitting(false);
        return;
      }
      file_url = data.path;
    }

    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Not logged in!");
      setSubmitting(false);
      return;
    }

    // Insert expense row
    const { error: dbError } = await supabase
      .from("expenses")
      .insert([{
        user_id: user.id,
        category,
        amount,
        currency: "SAR",
        notes,
        file_url,
        status: "pending",
        submitted_at: new Date().toISOString(),
      }]);

    if (dbError) {
      setError("Database error: " + dbError.message);
      setSubmitting(false);
      return;
    }

    setSuccess("Expense submitted! Awaiting admin review.");
    setCategory("");
    setAmount("");
    setNotes("");
    setFile(null);
    setSubmitting(false);
    if (onSubmitted) onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col gap-4">
      <h2 className="text-lg font-bold text-white mb-2">Add New Expense</h2>
      <input
        type="text"
        placeholder="Category"
        className="p-3 rounded bg-gray-800 text-white"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (SAR)"
        className="p-3 rounded bg-gray-800 text-white"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes"
        className="p-3 rounded bg-gray-800 text-white"
        value={notes}
        onChange={e => setNotes(e.target.value)}
      />
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={handleFileChange}
        className="text-white"
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:bg-blue-900 transition"
      >
        {submitting ? "Submitting..." : "Submit Expense"}
      </button>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
    </form>
  );
}
