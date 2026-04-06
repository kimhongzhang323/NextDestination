"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("Tokyo");

  function onSubmit(event) {
    event.preventDefault();
    router.push(`/results?q=${encodeURIComponent(`KL to ${location}, 5 days, RM5000 budget`)}`);
  }

  return (
    <form className="flex flex-col md:flex-row shadow-lg bg-white rounded-sm mx-auto border-4 border-slate-800 relative max-w-[850px] shadow-[8px_8px_0_0_#1e293b]" onSubmit={onSubmit}>
      {/* Ticket Cutouts */}
      <div className="absolute left-[-12px] top-1/2 -mt-3 w-6 h-6 bg-[url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] rounded-full border-r-4 border-slate-800 hidden md:block"></div>
      <div className="absolute right-[-12px] top-1/2 -mt-3 w-6 h-6 bg-transparent rounded-full border-l-4 border-slate-800 hidden md:block bg-white shadow-[-8px_0_0_0_#1e293b]"></div>

      <div className="flex-1 p-4 md:px-6 md:py-5 flex flex-col pl-8">
        <label className="font-bold text-slate-800 mb-1 flex items-center gap-1 text-sm tracking-widest uppercase">
          Location <span className="text-slate-400 text-xs">&#8964;</span>
        </label>
        <input 
           className="border-none outline-none bg-transparent text-slate-500 text-sm w-full font-medium"
           placeholder="Where are you going" 
           aria-label="Location"
           value={location}
           onChange={(e) => setLocation(e.target.value)} 
        />
      </div>
      <div className="hidden md:block w-[4px] bg-white border-l-4 border-dashed border-slate-800 my-2"></div>
      
      <div className="flex-1 p-4 md:px-6 md:py-5 flex flex-col border-t-4 md:border-t-0 border-slate-800 border-dashed">
        <label className="font-bold text-slate-800 mb-1 flex items-center gap-1 text-sm tracking-widest uppercase">
          Date <span className="text-slate-400 text-xs">&#8964;</span>
        </label>
        <input className="border-none outline-none bg-transparent text-slate-500 text-sm w-full font-medium placeholder:text-slate-400" placeholder="Choose date" aria-label="Date" />
      </div>
      <div className="hidden md:block w-[4px] bg-white border-l-4 border-dashed border-slate-800 my-2"></div>
      
      <div className="flex-1 p-4 md:px-6 md:py-5 flex flex-col border-t-4 md:border-t-0 border-slate-800 border-dashed md:pr-4">
        <label className="font-bold text-slate-800 mb-1 flex items-center gap-1 text-sm tracking-widest uppercase">
          Guest <span className="text-slate-400 text-xs">&#8964;</span>
        </label>
        <input className="border-none outline-none bg-transparent text-slate-500 text-sm w-full font-medium placeholder:text-slate-400" placeholder="- Add +" aria-label="Guest" />
      </div>
      <div className="hidden md:block w-[4px] bg-white border-l-4 border-dashed border-slate-800 my-2"></div>
      
      <div className="flex-1 p-4 md:px-6 md:py-5 flex flex-col border-t-4 md:border-t-0 border-slate-800 border-dashed md:pr-10">
        <label className="font-bold text-slate-800 mb-1 flex items-center gap-1 text-sm tracking-widest uppercase">
          Budget <span className="text-slate-400 text-xs">&#8964;</span>
        </label>
        <input className="border-none outline-none bg-transparent text-slate-500 text-sm w-full font-medium placeholder:text-slate-400" placeholder="$0-1000" aria-label="Budget" />
      </div>

      <div className="pr-4 pb-4 md:pt-4 md:pr-6 pl-4 md:pl-0 w-full md:w-auto">
        <button type="submit" className="w-full md:w-auto bg-slate-800 hover:bg-slate-900 text-white border-none py-3 px-6 md:py-4 md:px-8 rounded-sm font-bold cursor-pointer flex items-center justify-center gap-2 transition uppercase tracking-widest text-xs h-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
      </div>
    </form>
  );
}
