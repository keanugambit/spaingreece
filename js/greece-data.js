// Greece — 7-Day Trip data
window.GREECE = {
  itinerary: [
    {
      day: 1, title: "Athens (arrive)", tag: "Athens",
      items: [
        ["Settle in", "Drop bags, then wander the Plaka — the cute old neighborhood under the Acropolis."],
        ["Evening", "Rooftop dinner with a view of the lit-up Acropolis."]
      ]
    },
    {
      day: 2, title: "Athens", tag: "Athens",
      items: [
        ["Morning", "The Acropolis and the Parthenon temple. Go early to beat the heat and crowds."],
        ["Midday", "The Acropolis Museum to see the real statues up close."],
        ["Afternoon", "Ancient Agora and a slow lunch in Monastiraki."]
      ]
    },
    {
      day: 3, title: "Athens day trip", tag: "Day trip",
      items: [
        ["Option A", "Cape Sounion to watch sunset at the Temple of Poseidon by the sea."],
        ["Option B", "A day trip to Delphi, an ancient mountain sanctuary."],
        ["Evening", "Pack for the islands; early night before the ferry."]
      ]
    },
    {
      day: 4, title: "Ferry to Santorini", tag: "Santorini",
      items: [
        ["Morning", "High-speed ferry or short flight to Santorini."],
        ["Afternoon", "Settle into a cliffside town — Fira or Oia."],
        ["Evening", "The famous Oia sunset (arrive early for a good spot)."]
      ]
    },
    {
      day: 5, title: "Santorini", tag: "Santorini",
      items: [
        ["Morning", "A boat tour to the volcano and hot springs, or a wine tasting (local Assyrtiko)."],
        ["Afternoon", "Relax at a black-sand beach — Perissa or Kamari."],
        ["Evening", "Seafood dinner down at Ammoudi Bay below Oia."]
      ]
    },
    {
      day: 6, title: "Ferry to Mykonos", tag: "Mykonos",
      items: [
        ["Morning", "Ferry to Mykonos (about 2–3 hours)."],
        ["Afternoon", "Explore Mykonos Town: white lanes, the windmills, and Little Venice."],
        ["Evening", "Sunset drinks by the windmills, then a harbor-side dinner."]
      ]
    },
    {
      day: 7, title: "Mykonos beach day & depart", tag: "Mykonos",
      items: [
        ["Morning", "A famous beach — Paradise, Platis Gialos, or quiet Agios Sostis."],
        ["Afternoon", "Last swim, then fly home from Mykonos airport."]
      ]
    }
  ],

  cities: [
    { name: "Athens", kind: "Capital", emoji: "🏛️", text: "The capital and home of ancient history: the Acropolis, old markets, and great food. A lively, real city." },
    { name: "Santorini", kind: "Island", emoji: "🌅", text: "The postcard island: white houses on cliffs, blue domes, and the world's most famous sunset in Oia." },
    { name: "Mykonos", kind: "Island", emoji: "🏖️", text: "The fun island: pretty white town, windmills, great beaches, and a buzzing nightlife." },
    { name: "Delphi", kind: "Day trip", emoji: "⛰️", text: "An ancient sacred site in the mountains, once thought to be the center of the world." },
    { name: "Cape Sounion", kind: "Day trip", emoji: "🌊", text: "A seaside temple to Poseidon, perfect for sunset near Athens." },
    { name: "Nafplio", kind: "Optional", emoji: "⚓", text: "A charming seaside town, a relaxed alternative day trip from Athens." }
  ],

  poi: [
    { name: "The Acropolis & Parthenon", place: "Athens", text: "The ancient temple on the hill — Greece's most famous sight." },
    { name: "The Acropolis Museum", place: "Athens", text: "A modern museum holding the real ancient carvings." },
    { name: "Ancient Agora", place: "Athens", text: "The old marketplace where Socrates once talked and taught." },
    { name: "Oia & its sunset", place: "Santorini", text: "Blue-domed churches and the most photographed sunset in Greece." },
    { name: "The Caldera", place: "Santorini", text: "The huge cliff-ringed bay left by an old volcano." },
    { name: "Ammoudi Bay", place: "Santorini", text: "A tiny port below Oia with fresh-fish tavernas by the water." },
    { name: "Mykonos Town & the Windmills", place: "Mykonos", text: "White-washed lanes and the iconic row of windmills." },
    { name: "Little Venice", place: "Mykonos", text: "Colorful houses right at the water's edge, great for sunset." },
    { name: "Temple of Poseidon", place: "Cape Sounion", text: "A marble temple on a cliff over the sea." },
    { name: "Delphi", place: "Mainland", text: "Ancient ruins where people came to hear the famous oracle." }
  ],

  food: [
    { name: "Souvlaki & Gyro", text: "Grilled meat on a stick or wrapped in warm pita with sauce. Cheap and tasty." },
    { name: "Moussaka", text: "Layers of eggplant, potato, spiced meat, and creamy topping, baked." },
    { name: "Greek Salad (Horiatiki)", text: "Tomato, cucumber, onion, olives, and a big slab of feta." },
    { name: "Tzatziki", text: "Cool yogurt dip with cucumber and garlic." },
    { name: "Dolmades", text: "Rice wrapped in grape leaves." },
    { name: "Spanakopita", text: "Flaky pie filled with spinach and feta." },
    { name: "Fresh Grilled Fish & Octopus", text: "Simply cooked with lemon and olive oil, best by the sea." },
    { name: "Fava", text: "A smooth yellow split-pea dip — a Santorini specialty." },
    { name: "Tomatokeftedes", text: "Fried tomato fritters made with tiny local Santorini tomatoes." },
    { name: "Loukoumades", text: "Little honey doughnuts, a sweet treat." },
    { name: "Baklava", text: "Layered pastry with nuts and honey syrup." }
  ],

  restaurants: [
    {
      city: "Athens",
      list: [
        { name: "Oinomageireio Epirus", text: "A hidden gem in the old Varvakeios market for hearty home-cooked Greek food." },
        { name: "Geros Tou Moria", text: "A classic traditional taverna in the Plaka old town." },
        { name: "Stamatopoulos Taverna", text: "A Plaka taverna since 1882, with live music some nights." }
      ]
    },
    {
      city: "Santorini",
      list: [
        { name: "Metaxi Mas — Exo Gonia", text: "Many say the best food on the island; reserve well ahead, cash preferred." },
        { name: "Sunset Ammoudi / Dimitris", text: "Fresh grilled fish and octopus right by the water below Oia." },
        { name: "Lycabettus — Oia", text: "Fine dining on a terrace hanging over the caldera for a special sunset dinner." }
      ]
    },
    {
      city: "Mykonos",
      list: [
        { name: "Kounelas", text: "A beloved harbor fish taverna going since the 1960s — simple and fresh." },
        { name: "Sea Satin Market", text: "Iconic spot below the windmills; fresh fish sold by weight and grilled simply." },
        { name: "Baboulas Ouzeri", text: "Top-rated seafood and mezze in Mykonos Town." }
      ]
    }
  ],

  tips: [
    { icon: "🎟️", title: "Book big sights early", text: "The Acropolis and Santorini sunset dinners sell out. Reserve ahead." },
    { icon: "⛴️", title: "Getting around", text: "Ferries link the islands; short flights save time. Reserve summer ferries in advance." },
    { icon: "🍽️", title: "Eat late", text: "Locals eat dinner around 9–10 pm. Lunch is the big midday meal." },
    { icon: "💶", title: "Carry cash", text: "Bring some euros — a few small tavernas prefer cash." },
    { icon: "☀️", title: "Beat the heat", text: "Summer is hot. See outdoor sights early or late, and rest midday." }
  ]
};
