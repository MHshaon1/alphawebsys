import { Pie } from "react-chartjs-2";
const data = {
  labels: ["Profit", "Expense", "Investment"],
  datasets: [
    {
      data: [50000, 35000, 10000],
      backgroundColor: [
        "rgb(34,197,94)",
        "rgb(239,68,68)",
        "rgb(59,130,246)",
      ],
    },
  ],
};
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center">
          <h2 className="text-xl mb-3">Financial Overview</h2>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}
