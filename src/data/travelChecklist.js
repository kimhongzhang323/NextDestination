export const travelChecklistByDestination = {
  tokyo: {
    country: "Japan",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "Visa waiver — 90-day stay for Malaysian passport holders", required: true },
        { task: "Print/save hotel booking confirmation", required: true },
        { task: "Print/save return flight booking", required: true },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Fill in Visit Japan Web (VJW) form online before arrival", required: true },
        { task: "Declare items exceeding ¥200,000 or restricted goods", required: false },
        { task: "No more than ¥1,000,000 cash undeclared", required: false },
        { task: "Prohibited: certain fruits, meats, and plant products", required: true },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Purchase travel insurance covering medical expenses", required: true },
        { task: "Pack personal medications with prescriptions", required: false },
        { task: "COVID-19 vaccination certificate (if applicable)", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "Notify bank of overseas travel", required: true },
        { task: "Purchase Japan eSIM or pocket Wi-Fi", required: false },
        { task: "Prepare Japanese Yen cash for small shops", required: false },
        { task: "Download Google Translate for offline Japanese", required: false },
      ]},
      { category: "Packing Essentials", tasks: [
        { task: "Power adapter (Type A, 100V)", required: true },
        { task: "Comfortable walking shoes", required: false },
        { task: "Rain gear — check seasonal forecast", required: false },
      ]},
    ],
  },
  seoul: {
    country: "South Korea",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "K-ETA (Korea Electronic Travel Authorization)", required: true },
        { task: "Print/save hotel and flight confirmations", required: true },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Fill in Arrival Card on the plane", required: true },
        { task: "Customs declaration for items > USD 10,000", required: false },
        { task: "Prohibited: fresh fruits, meat, seeds", required: true },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Travel insurance recommended", required: true },
        { task: "Pack personal medications with prescriptions", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "Get T-money card at airport for transit", required: false },
        { task: "Purchase Korea SIM or eSIM", required: false },
        { task: "KRW cash for traditional markets", required: false },
      ]},
    ],
  },
  bangkok: {
    country: "Thailand",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "Visa-free entry for 30 days (Malaysian passport)", required: true },
        { task: "Print/save hotel and flight confirmations", required: true },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Fill in TM.6 arrival/departure card", required: true },
        { task: "Declare items exceeding THB 200,000", required: false },
        { task: "Max 200 cigarettes and 1L alcohol duty-free", required: false },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Travel insurance recommended", required: true },
        { task: "Mosquito repellent — dengue risk", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "THB cash widely needed for street food/taxis", required: false },
        { task: "Purchase Thai SIM at airport", required: false },
        { task: "Download Grab app for rides", required: false },
      ]},
    ],
  },
  bali: {
    country: "Indonesia",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "Visa on Arrival (VOA) — purchase at airport", required: true },
        { task: "Print/save hotel and flight confirmations", required: true },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Fill in customs declaration form", required: true },
        { task: "Declare items exceeding USD 500", required: false },
        { task: "Prohibited: drugs (severe penalties), fresh food", required: true },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Travel insurance mandatory for tourist visa", required: true },
        { task: "Mosquito repellent and sunscreen", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "IDR cash essential for small vendors", required: false },
        { task: "Purchase Indonesian SIM at airport", required: false },
        { task: "Download Grab/Gojek for rides", required: false },
      ]},
    ],
  },
  london: {
    country: "United Kingdom",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "Electronic Travel Authorisation (ETA) — apply online", required: true },
        { task: "Print/save hotel and flight confirmations", required: true },
        { task: "Proof of sufficient funds if asked", required: false },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Use ePassport gates at Heathrow", required: false },
        { task: "Declare goods exceeding £390", required: false },
        { task: "Prohibited: meat/dairy from non-EU countries", required: true },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Travel insurance highly recommended (NHS limited for tourists)", required: true },
        { task: "Pack prescription medications in original packaging", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "Contactless payment widely accepted (use bank card directly)", required: false },
        { task: "UK SIM or eSIM for data", required: false },
        { task: "GBP cash for small markets", required: false },
      ]},
    ],
  },
  istanbul: {
    country: "Turkey",
    items: [
      { category: "Documentation", tasks: [
        { task: "Valid passport (6+ months validity)", required: true },
        { task: "e-Visa required — apply at evisa.gov.tr", required: true },
        { task: "Print/save hotel and flight confirmations", required: true },
      ]},
      { category: "Immigration & Customs", tasks: [
        { task: "Fill in customs declaration if carrying > EUR 10,000", required: false },
        { task: "Duty-free: 200 cigarettes, 1L liquor", required: false },
        { task: "Antiques export requires permit", required: false },
      ]},
      { category: "Health & Insurance", tasks: [
        { task: "Travel insurance recommended", required: true },
        { task: "Hepatitis A vaccination recommended", required: false },
      ]},
      { category: "Money & Connectivity", tasks: [
        { task: "Get Istanbulkart at airport for transit", required: false },
        { task: "Turkish Lira cash for bazaars", required: false },
        { task: "Purchase Turkish SIM or eSIM", required: false },
      ]},
    ],
  },
};
