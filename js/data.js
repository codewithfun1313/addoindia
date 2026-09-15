// ADDOINDIA - Master Data Store

const PRODUCTS = [
  // Best Sellers & Featured Products
  {
    id: "prod-ava-tote",
    name: "The Ava Tote",
    tagline: "Everyday | Fits 14\" Laptop",
    category: "Tote",
    categoryLabel: "Tote Bags",
    subCategory: "Everyday Tote",
    salePrice: 3499,
    originalPrice: 6299,
    discount: 44,
    rating: 4.9,
    reviewCount: 312,
    badge: "BESTSELLER",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Cognac Brown", hex: "#7B3F00", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Classic Noir", hex: "#1B1B1B", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" },
      { name: "Ivory Cream", hex: "#F3ECE2", img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Designed for effortless transitions between morning commutes and spontaneous dinner plans. Crafted in scratch-resistant vegan saffiano leather with a padded interior laptop compartment and gold-tone custom hardware.",
    features: ["Padded 14\" Laptop Sleeve", "Magnetic Snap & Zip Closure", "Reinforced Shoulder Straps", "Scratch-Resistant Vegan Saffiano"],
    dimensions: "38cm (W) x 29cm (H) x 14cm (D)"
  },
  {
    id: "prod-harper-tote",
    name: "The Harper Tote",
    tagline: "Work | Fits 16\" Laptop",
    category: "Tote",
    categoryLabel: "Tote Bags",
    subCategory: "Work Bags",
    salePrice: 4199,
    originalPrice: 7499,
    discount: 44,
    rating: 4.8,
    reviewCount: 245,
    badge: "WORK ESSENTIAL",
    isBestSeller: true,
    isNew: false,
    colors: [
      { name: "Saddle Tan", hex: "#9E663B", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Midnight Black", hex: "#161616", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" },
      { name: "Olive Sage", hex: "#556B2F", img: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "The ultimate power bag. Structured lines, dedicated document organizers, and dual phone slips make the Harper the definitive corporate companion.",
    features: ["Dedicated 16\" MacBook Pro Sleeve", "Luggage Trolley Sleeve", "Key Leash & Water Bottle Slot", "Water-Repellent Lining"],
    dimensions: "42cm (W) x 32cm (H) x 16cm (D)"
  },
  {
    id: "prod-elara-tote",
    name: "The Elara Tote",
    tagline: "Premium | Spacious Interior",
    category: "Tote",
    categoryLabel: "Tote Bags",
    subCategory: "Premium Collection",
    salePrice: 4799,
    originalPrice: 8999,
    discount: 47,
    rating: 5.0,
    reviewCount: 189,
    badge: "LUXURY EDIT",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Burgundy Wine", hex: "#581845", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" },
      { name: "Deep Espresso", hex: "#2C1B18", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Alabaster White", hex: "#F5F5F0", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Sculptural elegance meets everyday volume. Featuring our signature fluted side panels and hand-burnished edge finishing.",
    features: ["Handcrafted Microfiber Vegan Leather", "Detachable Pouch Included", "Base Metal Studs", "Light Gold Hardware"],
    dimensions: "40cm (W) x 30cm (H) x 15cm (D)"
  },
  {
    id: "prod-mira-tote",
    name: "The Mira Tote",
    tagline: "Everyday | Lightweight Design",
    category: "Tote",
    categoryLabel: "Tote Bags",
    subCategory: "Minimal Collection",
    salePrice: 2999,
    originalPrice: 5499,
    discount: 45,
    rating: 4.7,
    reviewCount: 168,
    badge: "TRENDING",
    isBestSeller: true,
    isNew: false,
    colors: [
      { name: "Warm Taupe", hex: "#B38F61", img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Onyx Black", hex: "#111111", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Blush Nude", hex: "#E3C2B0", img: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Featherlight yet strikingly capacious. The Mira tote effortlessly drapes over the shoulder for markets, gym, or weekend getaways.",
    features: ["Ultra-Light Construction (520g)", "Spacious Main Cavity", "Interior Zip Stash Pocket", "Magnetic Snap Top"],
    dimensions: "36cm (W) x 28cm (H) x 13cm (D)"
  },
  // Shoulder Bags
  {
    id: "prod-serena-shoulder",
    name: "The Serena Baguette",
    tagline: "Effortless Style | Curved Silhouette",
    category: "Shoulder",
    categoryLabel: "Shoulder Bags",
    subCategory: "Everyday Shoulder",
    salePrice: 2799,
    originalPrice: 4999,
    discount: 44,
    rating: 4.9,
    reviewCount: 204,
    badge: "NEW ARRIVAL",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Vintage Cream", hex: "#ECE6DC", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
      { name: "Espresso Brown", hex: "#3D2B1F", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Forest Green", hex: "#2C402E", img: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Nineties minimalism reframed for the contemporary woman. Fits snugly under the arm with an ergonomic strap and a sculpted crescent profile.",
    features: ["Sculpted Underarm Crescent Arch", "Smooth YKK Metal Zip", "Central Card Divider", "Microfiber Suede Lining"],
    dimensions: "27cm (W) x 15cm (H) x 7cm (D)"
  },
  {
    id: "prod-astrid-shoulder",
    name: "The Astrid Chain Shoulder",
    tagline: "Statement | Day to Night",
    category: "Shoulder",
    categoryLabel: "Shoulder Bags",
    subCategory: "Evening Shoulder",
    salePrice: 3299,
    originalPrice: 5999,
    discount: 45,
    rating: 4.8,
    reviewCount: 154,
    badge: "MUST HAVE",
    isBestSeller: true,
    isNew: false,
    colors: [
      { name: "Pitch Black", hex: "#0F0F0F", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" },
      { name: "Champagne Gold", hex: "#C5A880", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" },
      { name: "Cherry Rouge", hex: "#7A1F29", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Features a gleaming double-link gourmette chain intertwined with supple vegan leather. A bold statement whether worn with tailored blazers or silk slips.",
    features: ["Gourmette Gold Chain Strap", "Flap Push-Lock Closure", "Dual Accordion Compartments", "Hidden Rear Lip Gloss Pocket"],
    dimensions: "25cm (W) x 16cm (H) x 8cm (D)"
  },
  // Top Handle Bags
  {
    id: "prod-claire-tophandle",
    name: "The Claire Satchel",
    tagline: "Classic Silhouette | Reimagined",
    category: "Top Handle",
    categoryLabel: "Top Handle Bags",
    subCategory: "Modern Classics",
    salePrice: 3899,
    originalPrice: 6999,
    discount: 44,
    rating: 4.9,
    reviewCount: 182,
    badge: "HOT SELLER",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Warm Biscuit", hex: "#CDB599", img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" },
      { name: "Royal Emerald", hex: "#1B4D3E", img: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Midnight Black", hex: "#161616", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "An iconic structured trapezoidal silhouette finished with an architectural top handle and a detachable crossbody strap for versatility.",
    features: ["Rigid Molded Top Handle", "Detachable Adjustable Crossbody Strap", "Signature Custom Turnlock", "Internal Zip Wall Divider"],
    dimensions: "28cm (W) x 21cm (H) x 11cm (D)"
  },
  {
    id: "prod-victoria-tophandle",
    name: "The Victoria Structured Mini",
    tagline: "Sculptural Grace | Brunch to Dinner",
    category: "Top Handle",
    categoryLabel: "Top Handle Bags",
    subCategory: "Statement Collection",
    salePrice: 3499,
    originalPrice: 6499,
    discount: 46,
    rating: 4.8,
    reviewCount: 139,
    badge: "LIMITED",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Pearl White", hex: "#F9F8F6", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
      { name: "Chestnut Croc", hex: "#4A2E1B", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Blush Rose", hex: "#E8C7BE", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Precision curves that elevate every occasion. Handcrafted with subtle croc-embossed accents and polished gold foot studs.",
    features: ["Croc-Embossed Vegan Leather", "Gold Feet Protection", "Magnetic Dual Flap", "Removable Shoulder Strap"],
    dimensions: "24cm (W) x 18cm (H) x 9.5cm (D)"
  },
  // Crossbody Bags
  {
    id: "prod-celeste-crossbody",
    name: "The Celeste Camera Bag",
    tagline: "Hands-Free | Practical Luxury",
    category: "Crossbody",
    categoryLabel: "Crossbody Bags",
    subCategory: "Everyday Crossbody",
    salePrice: 2499,
    originalPrice: 4799,
    discount: 48,
    rating: 4.9,
    reviewCount: 278,
    badge: "MOST LOVED",
    isBestSeller: true,
    isNew: false,
    colors: [
      { name: "French Vanilla", hex: "#F3EAD8", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Caramel Tan", hex: "#9E6438", img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80" },
      { name: "Classic Noir", hex: "#1A1A1A", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Compact yet surprisingly accommodating. Dual zip compartments keep phone, keys, sunglasses and cosmetics effortlessly organized while keeping your hands totally free.",
    features: ["Dual Top Zippers", "Wide Jacquard Webbing Strap Included", "Quick-Access Slip Pocket", "Fits all iPhone Pro Max models"],
    dimensions: "21cm (W) x 14cm (H) x 8cm (D)"
  },
  {
    id: "prod-luna-saddle",
    name: "The Luna Saddle Crossbody",
    tagline: "Curved Silhouette | Weekend Favourite",
    category: "Crossbody",
    categoryLabel: "Crossbody Bags",
    subCategory: "Travel & Outings",
    salePrice: 2899,
    originalPrice: 5299,
    discount: 45,
    rating: 4.7,
    reviewCount: 162,
    badge: "TRENDING",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Olive Khaki", hex: "#636F57", img: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" },
      { name: "Cognac Tan", hex: "#8A4A20", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" },
      { name: "Jet Black", hex: "#111111", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "An equestrian-inspired horseshoe curve with an embossed gold monogram ring. Lightweight, stylish and designed for all-day explorations.",
    features: ["Equestrian Horseshoe Flap", "Magnetic Auto-Snap", "Adjustable 5-hole Strap", "Scratch-Guarded Finish"],
    dimensions: "23cm (W) x 17cm (H) x 7.5cm (D)"
  },
  // Mini & Micro Bags
  {
    id: "prod-petite-micro",
    name: "The Aria Micro Vanity",
    tagline: "Small Size | Big Personality",
    category: "Mini & Micro",
    categoryLabel: "Mini & Micro Bags",
    subCategory: "Party & Evening",
    salePrice: 2199,
    originalPrice: 4299,
    discount: 49,
    rating: 4.8,
    reviewCount: 194,
    badge: "INSTA VIRAL",
    isBestSeller: true,
    isNew: true,
    colors: [
      { name: "Glossy Ruby", hex: "#9E1B32", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80" },
      { name: "Gilded Champagne", hex: "#D4AF37", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80" },
      { name: "Pitch Black", hex: "#111111", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Compact, daring and impossible to ignore. Holds cards, lipstick, keys, and AirPods in a chic structured box silhouette.",
    features: ["Vanity Box Silhouette", "Built-in Compact Mirror", "Detachable Slender Chain", "Smooth Metal 2-Way Zip"],
    dimensions: "15cm (W) x 12cm (H) x 7cm (D)"
  },
  {
    id: "prod-chloe-mini",
    name: "The Chloe Mini Flap",
    tagline: "Statement Accent | Day to Night",
    category: "Mini & Micro",
    categoryLabel: "Mini & Micro Bags",
    subCategory: "Statement Mini",
    salePrice: 2299,
    originalPrice: 4499,
    discount: 49,
    rating: 4.7,
    reviewCount: 147,
    badge: "EDITOR'S PICK",
    isBestSeller: true,
    isNew: false,
    colors: [
      { name: "Chalk Ivory", hex: "#F7F5F0", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80" },
      { name: "Taupe Camel", hex: "#A88B71", img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Rich Onyx", hex: "#161616", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80", hoverImg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80" }
    ],
    description: "Proving that less is so much more. Clean geometry with an oversized polished buckle accent, designed for cocktail hours and brunch dates.",
    features: ["Sculpted Geometric Flap", "Integrated 4-Slot Card Organizer", "Polished Gold Buckle Accent", "Crossbody or Clutch Conversion"],
    dimensions: "18cm (W) x 13cm (H) x 6cm (D)"
  }
];

// Curated Editorial Articles
const JOURNAL_ARTICLES = [
  {
    id: "post-1",
    title: "How to Choose the Perfect Handbag for Your Everyday Style",
    category: "Buying Guides",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    excerpt: "From assessing your daily commute to finding the right silhouette that complements your wardrobe palette, here is your essential guide."
  },
  {
    id: "post-2",
    title: "Tote Bag vs Shoulder Bag: Which One Is Right for You?",
    category: "Bag Styling",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    excerpt: "Unpacking the trade-offs between carrying volume, ergonomics, and desk-to-dinner transition aesthetic."
  },
  {
    id: "post-3",
    title: "How to Style a Crossbody Bag for Every Occasion",
    category: "Fashion Trends",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    excerpt: "How to wear crossbody bags high on the chest, layered over oversized blazers, or slung low for nonchalant weekend strolls."
  },
  {
    id: "post-4",
    title: "The Complete Guide to Choosing a Work Bag",
    category: "Workwear Style",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    excerpt: "Laptop dimensions, weight distribution, trolley sleeves, and the small architectural details that make 9-to-5 life seamless."
  },
  {
    id: "post-5",
    title: "How to Keep Your Handbags Looking Brand New",
    category: "Bag Care",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Maintenance tips, micro-fiber leather conditioning, proper dust-bag storage, and hardware polishing secrets."
  },
  {
    id: "post-6",
    title: "The Ultimate Guide to Gifting Bags for Her",
    category: "Gift Guides",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover the can't-go-wrong silhouettes, festive packaging ideas, and bespoke personalized gift touches."
  }
];

// Customer Reviews
const CUSTOMER_REVIEWS = [
  {
    id: 1,
    quote: "Beautiful design, excellent finishing and exactly what I was looking for. It has quickly become my everyday favourite.",
    author: "Rhea Kapoor",
    role: "Verified Buyer",
    city: "Mumbai",
    rating: 5,
    product: "The Ava Tote in Cognac Brown",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "The quality feels premium and the bag is even more beautiful in person. Absolutely loved it.",
    author: "Ananya Deshmukh",
    role: "Verified Buyer",
    city: "Bangalore",
    rating: 5,
    product: "The Claire Satchel in Royal Emerald",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "Stylish, spacious and practical. Perfect for work and everyday use. My 15-inch laptop slips right in effortlessly.",
    author: "Pooja Sharma",
    role: "Verified Buyer",
    city: "New Delhi",
    rating: 5,
    product: "The Harper Work Tote",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    quote: "AddoIndia has some really beautiful designs. The attention to detail, stitching and hardware is truly impressive.",
    author: "Tanvi Mehta",
    role: "Verified Buyer",
    city: "Hyderabad",
    rating: 5,
    product: "The Serena Baguette in Vintage Cream",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
];

// Style Switcher Data (LOOK 01 - Classic vs LOOK 02 - Bold)
const STYLE_LOOKS = {
  classic: {
    id: "look-classic",
    title: "LOOK 01 — CLASSIC",
    tagline: "Timeless Sophistication",
    description: "Elegant neutrals, clean silhouettes and timeless styling. Pairs seamlessly with tailored blazers, crisp poplin shirts, and neutral cashmere coats.",
    palette: ["#ECE5DD", "#9E6438", "#1B1B1B", "#C5A880"],
    paletteNames: ["Alabaster Cream", "Saddle Tan", "Jet Black", "Champagne Gold"],
    heroBag: {
      name: "The Ava Tote in Ivory Cream",
      price: "₹3,499",
      img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
      pairWith: "Tailored Camel Blazer + Silk Trouser",
      productId: "prod-ava-tote"
    },
    moodImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    quote: "Understated refinement that lets quality speak for itself."
  },
  bold: {
    id: "look-bold",
    title: "LOOK 02 — BOLD",
    tagline: "Statement Contrast",
    description: "Rich colours, distinctive shapes and statement details. Made for evenings out, art gallery openings, and turning heads with sculpted geometry.",
    palette: ["#7A1F29", "#1B4D3E", "#D4AF37", "#0F0F0F"],
    paletteNames: ["Deep Carmine", "Royal Emerald", "Gilded Brass", "Midnight Noir"],
    heroBag: {
      name: "The Astrid Chain Shoulder in Ruby",
      price: "₹3,299",
      img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80",
      pairWith: "Monochrome Black Slip Dress + Chunky Jewelry",
      productId: "prod-astrid-shoulder"
    },
    moodImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    quote: "Daring silhouettes that elevate simple outfits into iconic moments."
  }
};
