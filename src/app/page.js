import SearchBar from "@/components/SearchBar/SearchBar";
import DestinationCard from "@/components/DestinationCard/DestinationCard";
import { destinations } from "@/data/destinations";

export default function HomePage() {
  const features = [
    { title: "Flight Comparison", icon: "✈️", desc: "Compare all carriers for the same route side-by-side." },
    { title: "Hotel Price Parity", icon: "🏨", desc: "See exact matching hotel prices from every major platform." },
    { title: "Car Rental Picks", icon: "🚗", desc: "Compare vehicle types, rates and locations easily." },
    { title: "Arrival Card Assistant", icon: "🛂", desc: "Digital requirements and visa status mapped for you." },
    { title: "Currency Intelligence", icon: "💱", desc: "Live exchange rates and accepted payment methods." },
    { title: "Transit Routes", icon: "🚇", desc: "Interactive maps and fare estimates for your destination." },
  ];

  const steps = [
    { num: "01", title: "Search your intent", text: "Tell us where and when via natural language." },
    { num: "02", title: "Plan the timeline", text: "Flights, hotels, cars and transit automatically align." },
    { num: "03", title: "Journey securely", text: "Know the currency, arrival cards and maps before you land." },
  ];

  return (
    <div className="pb-16 bg-[#f8f9fc] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="mb-16 pb-8 max-w-[1300px] mx-auto px-4 lg:px-0">
        <div className="relative h-[480px] rounded-[40px] bg-cover bg-center flex flex-col items-center justify-center text-center text-white shadow-2xl overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10"></div>
          
          <div className="relative z-20 px-4">
            <p className="text-[#ffd166] uppercase tracking-widest text-sm font-bold mb-2">Stop searching. Start journeying.</p>
            <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-4 max-w-4xl font-['Outfit']">
              Plan your whole trip in one timeline.
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto drop-shadow-md">
              Flights, hotels, car rentals, transit, arrival cards, and money tips in one seamless flow.
            </p>
            
            <button className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white flex items-center justify-center cursor-pointer transition transform hover:bg-white/40 hover:scale-105 mx-auto" aria-label="Play Video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* SEARCH BAR Wrapper */}
        <div className="relative z-30 -mt-10 max-w-[900px] mx-auto px-4">
           <SearchBar />
        </div>
      </section>

      {/* FEATURE GRID MODULE */}
      <section className="max-w-[1300px] mx-auto px-4 md:px-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-['Outfit'] text-slate-800">Unified Travel Capabilities</h2>
          <p className="text-slate-500 mt-2">Everything you need to stop tab-switching.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <article key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 font-['Outfit']">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS MODULE */}
      <section className="bg-white py-16 mb-20 border-y border-slate-100">
        <div className="max-w-[1300px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold font-['Outfit'] text-slate-800 mb-4">How it works</h2>
              <p className="text-slate-500">Three simple steps to build your comprehensive travel itinerary without the tab fatigue.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-6xl font-black text-slate-100 absolute -top-6 -left-4 z-0 group-hover:text-slate-200 transition">{step.num}</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 font-['Outfit']">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS MODULE */}
      <section className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold font-['Outfit'] text-slate-800">Popular Destinations</h2>
            <p className="text-slate-500 mt-2">Curated packages mapped out for you.</p>
          </div>
          <button className="text-[#333] font-semibold hover:underline">View all</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.slice(0, 4).map((destination, index) => (
            <DestinationCard key={destination.slug} destination={destination} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
