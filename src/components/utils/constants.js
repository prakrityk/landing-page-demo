// CDN Configuration (optional - upgradeable later)
export const CDN_URL = import.meta.env.VITE_CDN_URL || '';

// Helper function to get image URLs
// Uses CDN if configured, otherwise local images
export const getImageUrl = (path) => {
return CDN_URL ? `${CDN_URL}/${path}` : `images/${path}`;
};

// Classes data for Bento Grid
export const CLASSES = [
  {
    id: 1,
    name: 'Reformer Pilates',
    description: 'Transform your body with our signature reformer classes. Build strength, flexibility, and balance.',
    size: 'large',
    icon: '🏋️',
    image: 'classes/reformer.jpg', // Local path - upgradeable to CDN later
  },
  {
    id: 2,
    name: 'Mat Classes',
    description: 'Build core strength and flexibility with classic mat pilates exercises',
    size: 'medium',
    icon: '🧘‍♀️',
    image: 'classes/mat.jpg',
  },
  {
    id: 3,
    name: 'Barre Fusion',
    description: 'Ballet-inspired workout combining strength and grace',
    size: 'medium',
    icon: '💃',
    image: 'classes/barre.jpg',
  },
  {
    id: 4,
    name: 'Private Sessions',
    description: 'Personalized one-on-one training',
    size: 'small',
    icon: '✨',
    image: 'classes/private.jpg',
  },
  {
    id: 5,
    name: 'Prenatal Pilates',
    description: 'Safe exercises for expecting mothers',
    size: 'small',
    icon: '🤰',
    image: 'classes/prenatal.jpg',
  },
  {
    id: 6,
    name: 'Virtual Classes',
    description: 'Join from anywhere in the world',
    size: 'medium',
    icon: '💻',
    image: 'classes/virtual.jpg',
  },
];

// Benefits data for Why Choose ALIGN section
export const BENEFITS = [
  {
    id: 1,
    icon: 'Users',
    title: 'Expert Instructors',
    description: 'Certified professionals with years of experience guiding your journey',
  },
  {
    id: 2,
    icon: 'Sparkles',
    title: 'Premium Equipment',
    description: 'State-of-the-art reformers and apparatus for optimal results',
  },
  {
    id: 3,
    icon: 'Heart',
    title: 'Small Class Sizes',
    description: 'Personalized attention ensuring proper form and technique',
  },
  {
    id: 4,
    icon: 'Clock',
    title: 'Flexible Schedule',
    description: 'Classes available throughout the day to fit your lifestyle',
  },
];
// Pricing tiers
export const PRICING_TIERS = [
  {
    id: 1,
    name: 'Drop-In',
    price: '$25',
    period: 'per class',
    popular: false,
    features: [
      'Single class access',
      'All equipment included',
      'Perfect for trying ALIGN',
      'No commitment required',
    ],
  },
  {
    id: 2,
    name: 'Monthly Unlimited',
    price: '$149',
    period: 'per month',
    popular: true, // Highlighted tier
    features: [
      'Unlimited classes',
      'Priority booking',
      'Member community access',
      'Flexible cancellation',
      'Exclusive workshops',
    ],
  },
  {
    id: 3,
    name: 'Premium',
    price: '$199',
    period: 'per month',
    popular: false,
    features: [
      'Everything in Unlimited',
      '2 private sessions/month',
      'Guest passes (2/month)',
      'Nutrition consultation',
      'VIP event access',
    ],
  },
];

// Testimonials (optional)
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'ALIGN transformed not just my body, but my entire approach to wellness. The instructors are phenomenal!',
    role: 'Member since 2023',
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'The small class sizes mean I get personalized attention every session. Best investment in myself!',
    role: 'Premium Member',
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'I love the flexible schedule and the welcoming community. ALIGN feels like home.',
    role: 'Member since 2022',
  },
];

// Social links
export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#', icon: '📷' },
  { name: 'Facebook', url: '#', icon: '👥' },
  { name: 'TikTok', url: '#', icon: '🎵' },
];

// Contact info
export const CONTACT_INFO = {
  email: 'hello@alignpilates.com',
  phone: '(555) 123-4567',
  address: '123 Wellness Ave, City, State 12345',
};