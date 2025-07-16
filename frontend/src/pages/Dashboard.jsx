import ExpenseForm from "../components/Forms/ExpenseForm.jsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="max-w-lg mx-auto">
        <ExpenseForm />
      </div>
    </div>
  );
}
