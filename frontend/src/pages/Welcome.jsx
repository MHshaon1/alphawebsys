import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="mb-6">
        <img src="/assets/alpha-logo.png" alt="ALPHA ULTIMATE" className="h-20 mb-3" />
        <h1 className="text-4xl font-bold text-white">ALPHA ULTIMATE LTD</h1>
        <p className="text-xl text-gray-400 mt-1">Finance Tracker System</p>
      </div>
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Link to="/admin-login" className="bg-blue-700 text-white p-4 rounded-2xl font-semibold hover:bg-blue-900 transition">Admin Login</Link>
        <Link to="/user-login" className="bg-green-600 text-white p-4 rounded-2xl font-semibold hover:bg-green-800 transition">Employee/User Login</Link>
      </div>
      <footer className="text-gray-600 mt-12 text-xs">Secured & powered by Supabase</footer>
    </div>
  );
}
