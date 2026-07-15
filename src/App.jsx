import reactLogo from './assets/react.svg';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import useCounterStore from "./Advanced Concepts/state-management/Zustand/Zustand";
import { useSelector } from 'react-redux';
import useAuthStore from './Auth/AuthStore.jsx';
import { useNavigate } from 'react-router-dom';

function CounterDisplay() {
  const zustandCount = useCounterStore((state) => state.count);
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 transition-all hover:shadow-md">
      <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-2">Zustand Store</h3>
      <span className="text-5xl font-black bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">{zustandCount}</span>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const reduxCount = useSelector((state) => state.count);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } 
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      
      <main className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 py-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="relative flex items-center justify-center w-24 h-24 bg-white dark:bg-slate-800 rounded-full ring-1 ring-slate-900/5 shadow-sm">
              <img src={reactLogo} className="w-12 h-12 hover:rotate-180 transition-transform duration-700 ease-in-out" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            React Note App
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Welcome back, <span className="font-semibold text-indigo-600 dark:text-indigo-400">{user ? user.name : "Guest"}</span>.
          </p>
        </div>

        {/* State Management Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <CounterDisplay />
          
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 transition-all hover:shadow-md">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-2">Redux Store</h3>
            <span className="text-5xl font-black bg-gradient-to-br from-rose-500 to-orange-500 bg-clip-text text-transparent">{reduxCount || 0}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 pt-12">
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Go Back
          </button>
          <button 
            onClick={logout} 
            className="px-6 py-2.5 text-sm font-medium text-white bg-slate-900 dark:bg-indigo-600 rounded-lg hover:bg-slate-800 dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors shadow-sm"
          >
            Log Out
          </button>
        </div>

      </main>
    </div>
  );
}

export default App;
