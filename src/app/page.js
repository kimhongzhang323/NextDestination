import SearchBar from "@/components/SearchBar/SearchBar";
import DestinationCard from "@/components/DestinationCard/DestinationCard";
import { destinations } from "@/data/destinations";

export default function HomePage() {
  const features = [
    { title: "Flight Comparison", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>, desc: "Compare all carriers for the same route side-by-side." },
    { title: "Hotel Price Parity", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, desc: "See exact matching hotel prices from every major platform." },
    { title: "Car Rental Picks", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, desc: "Compare vehicle types, rates and locations easily." },
    { title: "Arrival Card Assistant", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, desc: "Digital requirements and visa status mapped for you." },
    { title: "Currency Intelligence", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="18" x2="12" y2="6"/></svg>, desc: "Live exchange rates and accepted payment methods." },
    { title: "Transit Routes", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, desc: "Interactive maps and fare estimates for your destination." }
  ];

  const steps = [
    { num: "01", title: "Search your intent", text: "Tell us where and when via natural language." },
    { num: "02", title: "Plan the timeline", text: "Flights, hotels, cars and transit automatically align." },
    { num: "03", title: "Journey securely", text: "Know the currency, arrival cards and maps before you land." },
  ];

  return (
    <div className="pb-16 bg-[#f8f9fc] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="mb-24 pb-8 max-w-[1300px] mx-auto px-4 lg:px-0">
        <div className="relative h-[480px] rounded-sm bg-cover bg-center flex flex-col items-center justify-center text-center text-white border-4 border-slate-800 shadow-[12px_12px_0_0_#1e293b] overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
          
          <div className="relative z-20 px-4">
            <div className="inline-block bg-[#ffd166] text-slate-900 border-2 border-slate-900 px-4 py-1 mb-6 font-bold text-xs tracking-widest uppercase shadow-[3px_3px_0_0_#1e293b]">Stop searching. Start journeying.</div>
            <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-4 max-w-4xl font-['Outfit'] uppercase">
              Plan your whole trip in one timeline
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto drop-shadow-md text-slate-100">
              Flights, hotels, car rentals, transit, arrival cards, and money tips in one seamless flow.
            </p>
          </div>
        </div>
        
        {/* SEARCH BAR Wrapper */}
        <div className="relative z-30 -mt-10 max-w-[900px] mx-auto px-4">
           <SearchBar />
        </div>
      </section>

      {/* FEATURE GRID MODULE */}
      <section className="max-w-[1300px] mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2 block">System Manifesto</span>
          <h2 className="text-3xl font-extrabold font-['Outfit'] text-slate-800 uppercase tracking-tight">Unified Capabilities</h2>
          <div className="w-16 h-1 bg-[#ffd166] mx-auto mt-4 mb-4 border border-slate-800"></div>
          <p className="text-slate-500 font-bold tracking-wide uppercase text-sm">Everything you need to stop tab-switching</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <article key={i} className="relative bg-white border-2 border-slate-800 rounded-sm flex flex-col md:flex-row group hover:shadow-[8px_8px_0_0_#1e293b] transition duration-300">
              <div className="absolute left-[-14px] top-1/2 -mt-3 w-6 h-6 bg-[#f8f9fc] rounded-full border-r-2 border-slate-800 z-10 transition"></div>
              <div className="absolute right-[-14px] top-1/2 -mt-3 w-6 h-6 bg-[#f8f9fc] rounded-full border-l-2 border-slate-800 z-10 transition"></div>
              
              <div className="p-6 md:pr-0 flex-1 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-slate-800 relative">
                 <h3 className="text-lg font-extrabold text-slate-800 mb-2 font-['Outfit'] uppercase tracking-tight">{feature.title}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed pr-4 font-medium">{feature.desc}</p>
                 <div className="absolute bottom-4 left-6 font-['Courier_New'] text-slate-300 font-bold tracking-widest text-[10px]">#FEAT-0{i+1}</div>
              </div>
              
              <div className="w-full md:w-28 bg-[#ffd166]/10 flex items-center justify-center py-6 md:py-0 relative overflow-hidden rounded-r-[2px]">
                 <div className="text-slate-800 p-4 border-2 border-slate-800 bg-white transform group-hover:rotate-6 transition shadow-[4px_4px_0_0_#1e293b] group-hover:scale-110">
                   {feature.icon}
                 </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS MODULE */}
      <section className="bg-white py-20 mb-24 border-y-4 border-slate-800 relative z-20 overflow-hidden">
        {/* Ticket dashed lines at border */}
        <div className="absolute top-[-2px] left-0 w-full border-t-[8px] border-dashed border-[#f8f9fc]"></div>
        <div className="absolute bottom-[-2px] left-0 w-full border-b-[8px] border-dashed border-[#f8f9fc]"></div>
        
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
            <div className="md:w-1/3">
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2 block">Protocol</span>
              <h2 className="text-3xl font-extrabold font-['Outfit'] text-slate-800 mb-6 uppercase tracking-tight">How it works</h2>
              <div className="p-6 bg-slate-50 border-2 border-slate-800 shadow-[6px_6px_0_0_#1e293b]">
                <p className="text-slate-700 font-medium">Three simple steps to build your comprehensive travel itinerary without the tab fatigue.</p>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative bg-white border-2 border-slate-800 p-6 rounded-sm flex flex-col shadow-[6px_6px_0_0_#1e293b] hover:-translate-y-2 transition-transform">
                  <div className="absolute top-[-14px] left-1/2 ml-[-12px] w-6 h-6 bg-white border-b-2 border-slate-800 rounded-full z-10"></div>
                  
                  <div className="flex items-center gap-4 border-b-2 border-dashed border-slate-800 pb-4 mb-4">
                    <span className="uppercase text-[10px] font-bold tracking-widest text-slate-800 bg-[#ffd166] px-2 py-1 border border-slate-800">Phase</span>
                    <span className="font-['Courier_New'] font-black text-2xl text-slate-300">#{step.num}</span>
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h3 className="text-lg font-extrabold text-slate-800 mb-2 font-['Outfit'] uppercase leading-tight">{step.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS MODULE */}
      <section className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2 block">Flight Paths</span>
            <h2 className="text-3xl font-extrabold font-['Outfit'] text-slate-800 uppercase tracking-tight">Destinations</h2>
            <p className="text-slate-500 mt-2 font-bold uppercase tracking-widest text-sm">Curated packages mapped out</p>
          </div>
          <button className="text-slate-800 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-800 pb-1 hover:text-[#ffd166] hover:border-[#ffd166] transition">View full routing</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.slice(0, 4).map((destination, index) => (
            <DestinationCard key={destination.slug} destination={destination} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
