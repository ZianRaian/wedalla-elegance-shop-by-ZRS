import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "women" | "men" | "accessories";
  sizes: string[];
  colors: string[];
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cashmere Overcoat",
    price: 389,
    image: product1,
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Gray"],
    description: "Luxuriously soft cashmere overcoat with a relaxed silhouette. Crafted from 100% premium cashmere, this timeless piece features a single-button closure and notch lapels.",
    rating: 4.8,
    reviews: 124,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Tailored Blazer",
    price: 259,
    originalPrice: 329,
    image: product2,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy"],
    description: "Impeccably tailored blazer in premium wool blend. Single-button closure with flap pockets and a slim, modern fit.",
    rating: 4.6,
    reviews: 89,
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Linen Shirt",
    price: 129,
    image: product3,
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Cream", "Light Blue"],
    description: "Relaxed-fit linen shirt perfect for warm-weather dressing. Features a classic collar and short sleeves in breathable 100% linen.",
    rating: 4.5,
    reviews: 67,
    isNew: true,
  },
  {
    id: "4",
    name: "Wool Trousers",
    price: 189,
    image: product4,
    category: "men",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Gray", "Charcoal", "Navy"],
    description: "High-waisted wool trousers with pressed pleats. Made from fine Italian wool with a comfortable straight-leg silhouette.",
    rating: 4.7,
    reviews: 156,
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Ribbed Knit Sweater",
    price: 169,
    image: product5,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Ivory", "Black"],
    description: "Chunky ribbed knit sweater in a relaxed fit. Crafted from a soft wool-cashmere blend for ultimate comfort and warmth.",
    rating: 4.9,
    reviews: 203,
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Leather Crossbody",
    price: 219,
    image: product6,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Tan"],
    description: "Compact crossbody bag in smooth Italian leather with gold-tone hardware. Features an adjustable strap and interior zip pocket.",
    rating: 4.4,
    reviews: 45,
    isNew: true,
  },
  {
    id: "7",
    name: "Silk Wrap Dress",
    price: 279,
    originalPrice: 349,
    image: product7,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Navy", "Burgundy", "Black"],
    description: "Elegant silk wrap dress with a flattering V-neckline and flowing midi length. Perfect for evening occasions.",
    rating: 4.8,
    reviews: 178,
    isNew: true,
  },
  {
    id: "8",
    name: "Wide-Leg Linen Pants",
    price: 149,
    image: product8,
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Beige", "Black"],
    description: "Relaxed wide-leg pants in premium linen. Features an elastic waistband and flowing silhouette for effortless summer style.",
    rating: 4.3,
    reviews: 92,
  },
];
