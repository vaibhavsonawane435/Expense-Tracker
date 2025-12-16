// src/components/TransactionList.jsx
import React from "react";
import { useTransaction } from "../context/TransactionContext";

export default function TransactionList() {
  const { transactions, deleteTransaction, filter } = useTransaction();

  const filtered = transactions.filter((t) => {
    if (filter === "All") return true;
    if (filter === "Income") return t.type === "income";
    if (filter === "Expense") return t.type === "expense";
    return t.category === filter;
  });

  const handleDelete = (id) => {

      deleteTransaction(id);
      
  };

  const formatDate = (d) => {
    try {
      if (!d) return "-";
      const dt = new Date(d);
      if (Number.isNaN(dt.getTime())) return d;
      // Indian locale, short date
      return dt.toLocaleDateString("en-IN");
    } catch {
      return d;
    }
  };

  return (
    <section className="w-full bg-white p-4 rounded-xl shadow mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <p className="text-sm text-gray-500">{filtered.length} item{filtered.length !== 1 ? "s" : ""}</p>
      </div>

      {filtered.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          <p className="mb-2 font-medium">No transactions found</p>
          <p className="text-sm">Add your first transaction using the form above.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((t) => (
            <li
              key={t.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <p className="font-semibold truncate">{t.description || "No description"}</p>

                  {/* category badge */}
                  <span className="ml-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {t.category || "Uncategorized"}
                  </span>
                </div>

                <div className="text-sm text-gray-500">
                  <span>{formatDate(t.date)}</span>
                  <span className="mx-2">•</span>
                  <span className="capitalize">{t.type}</span>
                </div>
              </div>

              <div className="mt-3 sm:mt-0 sm:ml-6 flex items-center gap-4">
                <div className={`text-lg font-bold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  {t.type === "income" ? "+" : "-"}₹{Number(t.amount).toLocaleString("en-IN")}
                </div>

                <div className="flex items-center gap-2">
                  {/* future: replace with edit handler */}
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id)}
                    className="text-sm px-3 py-1 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
                    aria-label={`Delete transaction ${t.description}`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
