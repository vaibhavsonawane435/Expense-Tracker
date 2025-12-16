import { useState } from "react";
import { useTransaction } from "../context/TransactionContext";

export default function TransactionForm() {
  const { addTransaction } = useTransaction();

  const [form, setForm] = useState({
    type: "expense",
    description: "",
    amount: "",
    category: "choose",
    date: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.description.trim() || !form.amount || !form.date) {
      setError("All fields are required! Please fill properly.");
      return;
    }

    addTransaction({ ...form, id: Date.now() });
    setForm({ type: "expense", description: "", amount: "", category: "Food", date: "" });
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 border border-gray-300 p-4 rounded-xl shadow mb-6"
    >
      {error && <p className="text-red-600 text-center mb-2 font-medium">⚠ {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="p-2 border rounded-lg bg-white"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Enter description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="p-2 border rounded-lg"
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="p-2 border rounded-lg"
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="p-2 border rounded-lg bg-white"
        >
         
          <option value={""}>Choose</option>
          <option>Salary</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="p-2 border rounded-lg"
        />
      </div>
      {
        form.type === "expense" ?if :
      }

      <button
        disabled={form.category === "choose" }
        className="mt-4 bg-blue-700 hover:bg-blue-800 text-white w-full py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ADD TRANSACTION
      </button>
    </form>
  );
}
