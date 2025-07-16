import { useState } from "react";
import { supabase } from "../supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("employee");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Register user with Supabase Auth
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    // Add user to users table
    const { error: dbError } = await supabase
      .from("users")
      .insert([{ email, role, name }]);

    if (dbError) {
      setError("Registered in auth but failed to add user details: " + dbError.message);
      return;
    }

    setSuccess("Registration successful! Please check your email to confirm and then login.");
    setEmail("");
    setPassword("");
    setName("");
    setRole("employee");
    setTimeout(() => navigate("/user-login"), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Register New User</h2>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <input type="text" className="p-3 rounded bg-gray-800 text-white" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" className="p-3 rounded bg-gray-800 text-white" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" className="p-3 rounded bg-gray-800 text-white" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <select className="p-3 rounded bg-gray-800 text-white" value={role} onChange={e => setRole(e.target.value)}>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:bg-blue-900 transition">Register</button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
        </form>
      </div>
    </div>
  );
}
