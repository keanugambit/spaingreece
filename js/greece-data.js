// Greece — 7-Day Trip data. Image values are Wikimedia Commons file names
// (resolved via Special:FilePath); broken ones fall back to a gradient tile.
window.GREECE = {
  itinerary: [
    {
      num: 1, city: "Athens", title: "Arrive & the Plaka",
      theme: "Ease into the city under the Acropolis. Drop your bags, then lose yourself in the old streets before a first dinner with a view.",
      items: [
        ["Settle in", "Drop bags, then wander the Plaka — the cute old neighborhood under the Acropolis."],
        ["Evening", "Rooftop dinner with a view of the lit-up Acropolis."]
      ]
    },
    {
      num: 2, city: "Athens", title: "Ancient Athens",
      theme: "The big day for antiquity: the Acropolis early, the real marbles in the museum, then the old marketplace and a long lunch.",
      items: [
        ["Morning", "The Acropolis and the Parthenon temple. Go early to beat the heat and crowds."],
        ["Midday", "The Acropolis Museum to see the real statues up close."],
        ["Afternoon", "Ancient Agora, then a slow lunch in Monastiraki."]
      ]
    },
    {
      num: 3, city: "Athens", title: "A day trip out",
      theme: "Pick sea or mountains: a sunset temple by the water at Cape Sounion, or the ancient oracle high up at Delphi. Then pack for the islands.",
      items: [
        ["Option A", "Cape Sounion to watch sunset at the Temple of Poseidon by the sea."],
        ["Option B", "A day trip to Delphi, an ancient mountain sanctuary."],
        ["Evening", "Pack for the islands; early night before the ferry."]
      ]
    },
    {
      num: 4, city: "Santorini", title: "Ferry to Santorini",
      theme: "Cross the Aegean to the postcard island. Settle into a cliffside town, then join the crowd for the sunset the island is famous for.",
      items: [
        ["Morning", "High-speed ferry or short flight to Santorini."],
        ["Afternoon", "Settle into a cliffside town — Fira or Oia."],
        ["Evening", "The famous Oia sunset (arrive early for a good spot)."]
      ]
    },
    {
      num: 5, city: "Santorini", title: "Volcano, beach & wine",
      theme: "A full island day: sail the caldera, taste crisp Assyrtiko wine, laze on black sand, and finish with fish by the water at Ammoudi.",
      items: [
        ["Morning", "A boat tour to the volcano and hot springs, or a wine tasting (local Assyrtiko)."],
        ["Afternoon", "Relax at a black-sand beach — Perissa or Kamari."],
        ["Evening", "Seafood dinner down at Ammoudi Bay below Oia."]
      ]
    },
    {
      num: 6, city: "Mykonos", title: "Ferry to Mykonos",
      theme: "Hop to the fun island. Wander the maze of white lanes to the windmills and Little Venice, then chase another sunset with a drink in hand.",
      items: [
        ["Morning", "Ferry to Mykonos (about 2–3 hours)."],
        ["Afternoon", "Explore Mykonos Town: white lanes, the windmills, and Little Venice."],
        ["Evening", "Sunset drinks by the windmills, then a harbor-side dinner."]
      ]
    },
    {
      num: 7, city: "Mykonos", title: "Beach day & depart",
      theme: "One last swim. Pick a beach to your taste — party or quiet cove — then fly home straight from the island.",
      items: [
        ["Morning", "A famous beach — Paradise, Platis Gialos, or quiet Agios Sostis."],
        ["Afternoon", "Last swim, then fly home from Mykonos airport."]
      ]
    }
  ],

  cities: [
    { name: "Athens", kind: "Capital", img: "Attica_06-13_Athens_50_View_from_Philopappos_-_Acropolis_Hill.jpg", text: "The capital and home of ancient history: the Acropolis, old markets, and great food. A lively, real city." },
    { name: "Santorini", kind: "Island", img: "Oia_Santorini_Greece.jpg", text: "The postcard island: white houses on cliffs, blue domes, and the world's most famous sunset in Oia." },
    { name: "Mykonos", kind: "Island", img: "Mykonos_windmills.jpg", text: "The fun island: pretty white town, windmills, great beaches, and a buzzing nightlife." },
    { name: "Delphi", kind: "Day trip", img: "Tholos_Delphi.jpg", text: "An ancient sacred site in the mountains, once thought to be the center of the world." },
    { name: "Cape Sounion", kind: "Day trip", img: "Temple_of_Poseidon_at_Sounion.jpg", text: "A seaside temple to Poseidon, perfect for sunset near Athens." },
    { name: "Nafplio", kind: "Optional", img: "20100915_Nafplio_Argolis_Greece_2_Panorama.jpg", text: "A charming seaside town, a relaxed alternative day trip from Athens." }
  ],

  poi: [
    { name: "Acropolis & Parthenon", place: "Athens", img: "The_Parthenon_in_Athens.jpg", text: "The ancient temple on the hill — Greece's most famous sight." },
    { name: "Acropolis Museum", place: "Athens", img: "Acropolis_Museum_(interior).jpg", text: "A modern museum holding the real ancient carvings." },
    { name: "Ancient Agora", place: "Athens", img: "Stoa_of_Attalos.jpg", text: "The old marketplace where Socrates once talked and taught." },
    { name: "Oia & its sunset", place: "Santorini", img: "Sunset_in_Oia,_Santorini.jpg", text: "Blue-domed churches and the most photographed sunset in Greece." },
    { name: "The Caldera", place: "Santorini", img: "Santorini_caldera.jpg", text: "The huge cliff-ringed bay left by an old volcano." },
    { name: "Ammoudi Bay", place: "Santorini", img: "Ammoudi_Bay,_Santorini.jpg", text: "A tiny port below Oia with fresh-fish tavernas by the water." },
    { name: "Windmills of Mykonos", place: "Mykonos", img: "Windmills_of_Mykonos.jpg", text: "White-washed lanes and the iconic row of windmills." },
    { name: "Little Venice", place: "Mykonos", img: "Little_Venice,_Mykonos.jpg", text: "Colorful houses right at the water's edge, great for sunset." },
    { name: "Temple of Poseidon", place: "Cape Sounion", img: "Temple_of_Poseidon_at_Sounion.jpg", text: "A marble temple on a cliff over the sea." },
    { name: "Delphi", place: "Mainland", img: "Delphi_Composite.jpg", text: "Ancient ruins where people came to hear the famous oracle." }
  ],

  food: [
    { name: "Souvlaki & Gyro", img: "Gyros_002.jpg", text: "Grilled meat on a stick or wrapped in warm pita with sauce. Cheap and tasty." },
    { name: "Moussaka", img: "Moussaka.jpg", text: "Layers of eggplant, potato, spiced meat, and creamy topping, baked." },
    { name: "Greek Salad", img: "Greek_salad.jpg", text: "Tomato, cucumber, onion, olives, and a big slab of feta (horiatiki)." },
    { name: "Tzatziki", img: "Tzatziki_sauce.jpg", text: "Cool yogurt dip with cucumber and garlic." },
    { name: "Dolmades", img: "Dolmadakia.jpg", text: "Rice wrapped in grape leaves." },
    { name: "Spanakopita", img: "Spanakopita.jpg", text: "Flaky pie filled with spinach and feta." },
    { name: "Grilled Fish & Octopus", img: "Grilled_octopus.jpg", text: "Simply cooked with lemon and olive oil, best by the sea." },
    { name: "Fava", img: "Fava_me_koukia.jpg", text: "A smooth yellow split-pea dip — a Santorini specialty." },
    { name: "Tomatokeftedes", img: "Tomatokeftedes.jpg", text: "Fried tomato fritters made with tiny local Santorini tomatoes." },
    { name: "Loukoumades", img: "Loukoumades.jpg", text: "Little honey doughnuts, a sweet treat." },
    { name: "Baklava", img: "Baklava_-_Turkish_special,_80-ply.JPG", text: "Layered pastry with nuts and honey syrup." }
  ],

  restaurants: [
    {
      city: "Athens", area: "Plaka & the old market",
      list: [
        { name: "Oinomageireio Epirus", meal: "Home cooking", tag: "Hidden gem", img: "Moussaka.jpg",
          desc: "A hidden gem in the old Varvakeios market for hearty, home-cooked Greek food at honest prices.",
          addr: "Varvakeios Central Market, Athens" },
        { name: "Geros Tou Moria", meal: "Taverna", tag: "Classic", img: "Greek_salad.jpg",
          desc: "A classic traditional taverna in the Plaka old town — grilled meats, mezze and a warm room.",
          addr: "Mnisikleous 27, Plaka, Athens" },
        { name: "Stamatopoulos Taverna", meal: "Dinner", tag: "Since 1882", img: "Gyros_002.jpg",
          desc: "A Plaka taverna running since 1882, with live Greek music on some nights and a garden.",
          addr: "Lisiou 26, Plaka, Athens" }
      ],
      extras: [["Ta Karamanlidika", "Deli & mezze"], ["Klimataria", "Taverna with music"], ["Diporto", "Cult basement cellar"]]
    },
    {
      city: "Santorini", area: "Oia & Ammoudi Bay",
      list: [
        { name: "Metaxi Mas — Exo Gonia", meal: "Local favourite", tag: "Book ahead", img: "Fava_me_koukia.jpg",
          desc: "Many say the best food on the island. Away from the crowds; reserve well ahead, cash preferred.",
          addr: "Exo Gonia, Santorini" },
        { name: "Dimitris — Sunset Ammoudi", meal: "Seafood", tag: "By the water", img: "Grilled_octopus.jpg",
          desc: "Fresh grilled fish and octopus right by the water below Oia, feet almost in the sea.",
          addr: "Ammoudi Bay, Oia, Santorini" },
        { name: "Lycabettus — Oia", meal: "Fine dining", tag: "Special night", img: "Sunset_in_Oia,_Santorini.jpg",
          desc: "Fine dining on a terrace hanging over the caldera — the special-occasion sunset dinner.",
          addr: "Oia, Santorini" }
      ],
      extras: [["Ammoudi Fish Tavern", "Grilled catch, seaside"], ["Roka", "Modern Greek, Oia"], ["To Psaraki", "Fish taverna, Vlychada"]]
    },
    {
      city: "Mykonos", area: "Mykonos Town & the windmills",
      list: [
        { name: "Kounelas", meal: "Fish taverna", tag: "Since 1960s", img: "Grilled_octopus.jpg",
          desc: "A beloved harbor fish taverna going since the 1960s — simple, fresh and unpretentious.",
          addr: "Mykonos Town (Chora), Mykonos" },
        { name: "Sea Satin Market", meal: "Seafood", tag: "Iconic", img: "Windmills_of_Mykonos.jpg",
          desc: "Iconic spot below the windmills; fresh fish sold by weight and grilled simply over coals.",
          addr: "Below the windmills, Mykonos Town" },
        { name: "Baboulas Ouzeri", meal: "Mezze", tag: "Top-rated", img: "Greek_salad.jpg",
          desc: "Top-rated seafood and mezze in Mykonos Town — order a spread and share by the harbour.",
          addr: "Old Port, Mykonos Town" }
      ],
      extras: [["Kikis Taverna", "No-power grill, Agios Sostis"], ["Nikos Taverna", "Central classic"], ["M-eating", "Modern Greek, Chora"]]
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
