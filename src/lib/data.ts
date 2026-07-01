export const BRAND = {
  name: "Design1123",
  tagline: "Your Ultimate Business Branding Studio",
  phone: "+91 8261090881",
  email: "hello@design1123.com",
  users: "2.5 million+",
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Industries", href: "/#industries" },
  { label: "Events", href: "/#events" },
  // { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/#blog" },
] as const;

export const footerLinks = {
  useful: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#home" },
    { label: "Blogs", href: "/#blog" },
    { label: "FAQ", href: "/#home" },
    { label: "Industries", href: "/#industries" },
    { label: "Quotes", href: "/#home" },
    { label: "Free Logo Maker", href: "/#download" },
    { label: "All Events", href: "/#events" },
  ],
  legal: [
    { label: "Careers", href: "/#home" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Dealer Program", href: "/#home" },
  ],
} as const;

export const industries = [
  "Apparel & Clothing",
  "Arts & Entertainment",
  "Astrologer",
  "Audit & Taxation",
  "Automotive Service",
  "Bakery & Confectionery",
  "Banking & Finance",
  "Beauty & Personal Care",
  "Digital Marketing",
  "Education & Coaching",
  "Event Planning",
  "Health & Fitness",
  "Hotel & Restaurant",
  "Information Technology",
  "Insurance",
  "Logistics",
  "Manufacturing",
  "Medical & Pharmacy",
  "Photography & Videography",
  "Real Estate",
  "Retail & Grocery",
  "Sports Academy",
  "Tours & Travels",
  "Other",
] as const;

export const festivals = [
  "Diwali",
  "Holi",
  "Navratri",
  "Ganesh Chaturthi",
  "Independence Day",
  "Republic Day",
  "Christmas",
  "New Year",
  "Raksha Bandhan",
  "Eid",
  "Onam",
  "Pongal",
  "Makar Sankranti",
  "Mother's Day",
  "Father's Day",
  "Valentine's Day",
  "Teachers' Day",
  "Guru Purnima",
  "Karwa Chauth",
  "Dussehra",
] as const;

export const features = [
  {
    title: "Festival-ready posters",
    description:
      "Month-wise festival calendars with instant alerts so you never miss a celebration moment for your brand.",
    icon: "calendar",
  },
  {
    title: "Industry templates",
    description:
      "Thousands of layouts tailored for your trade—from clinics to cafés—customized in minutes.",
    icon: "layers",
  },
  {
    title: "WhatsApp creatives",
    description:
      "Stickers, status images, and share-ready formats optimized for how Indian businesses actually connect.",
    icon: "message",
  },
  {
    title: "AI video & reels",
    description:
      "Turn static designs into scroll-stopping reels without hiring an editor or agency.",
    icon: "video",
  },
  {
    title: "Background removal",
    description:
      "One-tap cutouts for product shots and portraits—studio quality on your phone.",
    icon: "sparkle",
  },
  {
    title: "Digital business cards",
    description:
      "Multi-page DBCs with your logo, offers, and contact—always updated, always on-brand.",
    icon: "card",
  },
  {
    title: "Custom QR branding",
    description:
      "Branded QR codes that link menus, catalogs, and offers—built for local business growth.",
    icon: "qr",
  },
  {
    title: "Audio jingles",
    description:
      "Short branded sounds for reels and ads that make your business instantly recognizable.",
    icon: "audio",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Pick your industry",
    description: "Choose from 80+ categories and get templates that speak your customers' language.",
  },
  {
    step: "02",
    title: "Customize in minutes",
    description: "Add logo, colors, and offers—no design degree required.",
  },
  {
    step: "03",
    title: "Share everywhere",
    description: "Export for Instagram, WhatsApp, print, and video—all from one workflow.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter Trial",
    badge: null,
    price: "₹197",
    original: null,
    perUnit: "₹39.40/design",
    savings: null,
    highlight: false,
    features: {
      validity: "5 days",
      credits: "5 images + BG removal",
      frames: "Limited",
      stickers: true,
      removeBg: true,
      dbc: true,
      jingles: true,
      desktop: true,
      logos: true,
      captions: true,
      support: true,
    },
  },
  {
    name: "Growth Annual",
    badge: "RECOMMENDED",
    price: "₹3,249",
    original: "₹4,999",
    perUnit: "₹1/design",
    savings: "Save ₹2,250",
    highlight: true,
    features: {
      validity: "1 year",
      credits: "Unlimited images & videos",
      frames: "50",
      stickers: true,
      removeBg: "50",
      dbc: true,
      jingles: "Unlimited",
      desktop: true,
      logos: "Unlimited",
      captions: true,
      support: true,
    },
  },
  {
    name: "Pro Quarterly",
    badge: null,
    price: "₹2,249",
    original: "₹3,249",
    perUnit: "₹1/design",
    savings: "Save ₹1,000",
    highlight: false,
    features: {
      validity: "3 months",
      credits: "90 images & videos",
      frames: "10",
      stickers: true,
      removeBg: "10",
      dbc: true,
      jingles: "Unlimited",
      desktop: true,
      logos: "Unlimited",
      captions: true,
      support: true,
    },
  },
  {
    name: "Studio Mega",
    badge: "BEST VALUE",
    price: "₹7,220",
    original: "₹14,997",
    perUnit: "₹0.52/design",
    savings: "Save ₹7,757",
    highlight: false,
    features: {
      validity: "3 years",
      credits: "15,000 images & videos",
      frames: "70",
      stickers: true,
      removeBg: "100",
      dbc: "Single page",
      jingles: "Unlimited",
      desktop: true,
      logos: "Unlimited",
      captions: true,
      support: true,
    },
  },
] as const;

export const stats = [
  { value: "2.5M+", label: "Active creators" },
  { value: "80+", label: "Industries covered" },
  { value: "200+", label: "Festival & event kits" },
  { value: "4.8★", label: "Average app rating" },
] as const;

export const testimonials = [
  {
    name: "Priya Sharma",
    business: "Sharma Sweets, Pune",
    quote:
      "Design1123 turned our Diwali campaign around in an afternoon. Customers still ask which agency we used—we just smile.",
  },
  {
    name: "Rahul Mehta",
    business: "Mehta Motors, Ahmedabad",
    quote:
      "Festival posts, offer banners, WhatsApp stickers—everything matches our logo. Our walk-ins definitely noticed.",
  },
  {
    name: "Anita Desai",
    business: "Glow Studio Salon, Mumbai",
    quote:
      "I run the salon and the social pages. Design1123 is the only tool that keeps up with both without burning my Sundays.",
  },
] as const;

export const blogs = [
  {
    title: "5 Festival Post Ideas That Actually Drive Footfall",
    excerpt: "Simple layouts local shops use before Diwali, Navratri, and wedding season.",
    date: "May 12, 2026",
  },
  {
    title: "WhatsApp Status vs Instagram Reels for Small Business",
    excerpt: "Where to post first when you only have fifteen minutes a day.",
    date: "May 8, 2026",
  },
  {
    title: "How to Brand Your QR Menu in One Evening",
    excerpt: "Link tables, offers, and reviews with a cohesive visual system.",
    date: "Apr 29, 2026",
  },
] as const;

export const featureRows = [
  "Validity",
  "Images & Video Credits",
  "Frames",
  "WhatsApp Stickers",
  "Remove Bg Credits",
  "Multi Page DBC",
  "Audio Jingles",
  "Desktop Version Access",
  "Free Logos",
  "Social Media Captions",
  "Dedicated Support",
] as const;
