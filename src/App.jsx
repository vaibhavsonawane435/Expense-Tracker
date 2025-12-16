import { TransactionProvider } from "./context/TransactionContext";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SummaryCard from "./components/SummaryCard";
import FilterBar from "./components/FilterBar";

export default function App() {
  return (
    <TransactionProvider>
      <div className="min-h-screen relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 backdrop-blur-md bg-white/20"></div>

        <div className="relative z-10 p-6 flex flex-col items-center">
          <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/40 animate-fadeIn">
            <Header />
            <SummaryCard />
            <FilterBar />
            <TransactionForm />
            <TransactionList />
          </div>
        </div>
      </div>
    </TransactionProvider>
  );
}