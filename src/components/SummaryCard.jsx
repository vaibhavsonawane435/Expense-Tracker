import { useTransaction } from "../context/TransactionContext";

export default function SummaryCard() {
  const { transactions } = useTransaction();

  const income = transactions.filter((t) => t.type === "income").reduce((a, b) => a + Number(b.amount), 0);
  const expense = transactions.filter((t) => t.type === "expense").reduce((a, b) => a + Number(b.amount), 0);
  const balance = income - expense;

  const summaryClass = `text-2xl font-bold ${balance >= 0 ? "text-green-600" : "text-red-600"}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-green-700">Total Income</h2>
        <p className="text-3xl font-bold">₹{income}</p>
      </div>

      <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-red-700">Total Expense</h2>
        <p className="text-3xl font-bold">₹{expense}</p>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-blue-700">Net Balance</h2>
        <p className={summaryClass}>₹{balance}</p>
      </div>
    </div>
  );
}