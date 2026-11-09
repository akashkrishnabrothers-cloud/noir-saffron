export type MenuCategory = 'all' | 'starters' | 'main-course' | 'pasta' | 'seafood' | 'desserts' | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isSignature?: boolean;
  dietary?: ('Chef Special' | 'Vegetarian' | 'Gluten-Free' | 'Signature' | 'Seafood' | 'Crafted Cocktail')[];
  prepTime?: string;
  calories?: string;
  spiciness?: number;
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tablePreference: string;
  specialRequests: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tag: string;
}
