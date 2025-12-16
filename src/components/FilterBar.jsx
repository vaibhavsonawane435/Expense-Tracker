import { useTransaction } from "../context/TransactionContext";

export default function FilterBar() {
  const { filter, setFilter } = useTransaction();

  return (
    <div className="mb-4 flex justify-end">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-lg p-2 bg-white shadow-md"
      >
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Entertainment</option>
      </select>
    </div>
  );
}