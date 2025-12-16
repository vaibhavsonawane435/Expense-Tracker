import { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();
export const useTransaction = () => useContext(TransactionContext);

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (t) => setTransactions([t, ...transactions]);

  const deleteTransaction = (id) => setTransactions(transactions.filter((t) => t.id !== id));

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction, filter, setFilter }}
    >
      {children}
    </TransactionContext.Provider>
  );
}