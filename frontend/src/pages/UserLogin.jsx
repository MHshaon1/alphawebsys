import { useState } from "react";
import { supabase } from "../supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Admin Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input type="email" className="p-3 rounded bg-gray-800 text-white" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" className="p-3 rounded bg-gray-800 text-white" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:bg-blue-900 transition">Login</button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}
