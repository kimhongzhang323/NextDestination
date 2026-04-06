import Link from "next/link";

const cardImages = [
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1587313632739-c894c03b1349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

export default function DestinationCard({ destination, index }) {
  const isHorizontal = index < 2;
  const image = cardImages[index % cardImages.length];

  // Ticket styling for horizontal cards
  if (isHorizontal) {
    return (
      <article className="col-span-1 md:col-span-2 relative bg-white rounded-sm flex flex-col md:flex-row border-2 border-slate-800 shadow-[6px_6px_0_0_#1e293b] hover:shadow-[10px_10px_0_0_#1e293b] transition group hover:-translate-y-1">
        {/* Top/bottom ticket semi-circles for vertical dashed line */}
        <div className="absolute top-[-14px] left-1/3 md:left-[240px] ml-[-12px] w-6 h-6 bg-[#f8f9fc] rounded-full border-b-2 border-slate-800 hidden md:block"></div>
        <div className="absolute bottom-[-14px] left-1/3 md:left-[240px] ml-[-12px] w-6 h-6 bg-[#f8f9fc] rounded-full border-t-2 border-slate-800 hidden md:block"></div>
        
        <div className="w-full md:w-[240px] h-48 md:h-full bg-cover bg-center border-r-2 border-dashed border-slate-800 rounded-l-[1px]" style={{ backgroundImage: `url(${image})` }}></div>
        
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
             <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1 block">Boarding Pass</span>
             <h3 className="text-3xl font-extrabold text-slate-800 font-['Outfit'] mb-2 uppercase">{destination.country}</h3>
             <div className="flex items-center gap-2 mb-4">
               <span className="px-2 py-1 bg-slate-100 text-slate-800 font-bold uppercase text-xs rounded-sm tracking-wider">Flight</span>
               <span className="font-['Courier_New'] font-bold text-slate-500 tracking-widest uppercase">#ND-{destination.slug.substring(0, 4)}</span>
             </div>
             <p className="flex items-center gap-2 text-slate-800 font-bold text-sm tracking-wide uppercase">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
               </svg> {destination.city}
             </p>
          </div>
          <div className="mt-8 flex justify-end">
            <Link href={`/destination/${destination.slug}`} className="inline-block bg-white border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 font-bold text-xs tracking-widest uppercase transition group-hover:scale-105">
               Issue Ticket
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Vertical Ticket Card
  return (
    <article className="col-span-1 relative bg-white rounded-sm flex flex-col border-2 border-slate-800 shadow-[6px_6px_0_0_#1e293b] hover:shadow-[10px_10px_0_0_#1e293b] transition group hover:-translate-y-1">
       {/* Left/right side cutouts */}
       <div className="absolute left-[-14px] top-[200px] mt-[-12px] w-6 h-6 bg-[#f8f9fc] rounded-full border-r-2 border-slate-800"></div>
       <div className="absolute right-[-14px] top-[200px] mt-[-12px] w-6 h-6 bg-[#f8f9fc] rounded-full border-l-2 border-slate-800 z-10"></div>

       <div className="w-full h-[200px] bg-cover bg-center border-b-2 border-dashed border-slate-800 relative rounded-t-[1px]" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute top-4 right-4 bg-white border-2 border-slate-800 text-slate-800 px-3 py-1 font-bold text-[10px] flex items-center gap-1 uppercase tracking-widest shadow-[2px_2px_0_0_#1e293b]">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
             </svg>
             {destination.country}
          </div>
       </div>

       <div className="p-6 flex flex-col pt-8">
         <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Destination</span>
            <span className="font-['Courier_New'] font-bold text-slate-500 tracking-widest uppercase text-[10px]">#ND-{destination.slug.substring(0, 4)}</span>
         </div>
         <h3 className="text-2xl font-extrabold text-slate-800 font-['Outfit'] uppercase block mt-1 line-clamp-1 truncate">{destination.city}</h3>
         <div className="text-slate-800 text-sm tracking-widest mt-2 mb-4 font-black">★★★★★</div>
         <Link href={`/destination/${destination.slug}`} className="mt-4 text-center w-full block bg-[#ffd166] text-slate-900 border-2 border-slate-800 py-3 font-bold text-xs tracking-widest uppercase transition group-hover:bg-slate-800 group-hover:text-white relative overflow-hidden">
            Book Now
         </Link>
       </div>
    </article>
  );
}
