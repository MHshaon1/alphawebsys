export default function UserLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Employee Login</h2>
        <form className="flex flex-col gap-4">
          <input type="email" className="p-3 rounded bg-gray-800 text-white" placeholder="Email" />
          <input type="password" className="p-3 rounded bg-gray-800 text-white" placeholder="Password" />
          <button type="submit" className="bg-green-600 text-white py-3 rounded-2xl font-semibold hover:bg-green-800 transition">Login</button>
        </form>
      </div>
    </div>
  );
}
