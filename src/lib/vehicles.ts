import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  category: "Sports" | "SUV" | "Sedan" | "Coupe" | "Convertible";
  engine: string;
  horsepower: number;
  topSpeed: string;
  acceleration: string;
  transmission: string;
  drivetrain: string;
  fuelType: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Veloce GT-R",
    brand: "Veloce",
    year: 2026,
    price: 185000,
    image: car1,
    category: "Sports",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 620,
    topSpeed: "205 mph",
    acceleration: "2.9s 0-60",
    transmission: "7-Speed DCT",
    drivetrain: "RWD",
    fuelType: "Premium Gasoline",
    description: "A masterpiece of Italian engineering. The Veloce GT-R combines raw power with surgical precision, delivering an unforgettable driving experience.",
  },
  {
    id: "2",
    name: "Atlas Prestige",
    brand: "Atlas",
    year: 2026,
    price: 92000,
    image: car2,
    category: "SUV",
    engine: "3.0L Turbo V6",
    horsepower: 380,
    topSpeed: "155 mph",
    acceleration: "4.8s 0-60",
    transmission: "8-Speed Automatic",
    drivetrain: "AWD",
    fuelType: "Premium Gasoline",
    description: "Commanding presence meets refined luxury. The Atlas Prestige redefines what an SUV can be, with effortless performance and unmatched comfort.",
  },
  {
    id: "3",
    name: "Volt EV-S",
    brand: "Volt",
    year: 2026,
    price: 78000,
    image: car3,
    category: "Sedan",
    engine: "Dual Electric Motors",
    horsepower: 450,
    topSpeed: "162 mph",
    acceleration: "3.2s 0-60",
    transmission: "Single-Speed Direct",
    drivetrain: "AWD",
    fuelType: "Electric",
    description: "The future of performance, today. The Volt EV-S delivers instant torque, whisper-quiet refinement, and 400 miles of range.",
  },
  {
    id: "4",
    name: "Nocturne GTS",
    brand: "Nocturne",
    year: 2026,
    price: 145000,
    image: car4,
    category: "Coupe",
    engine: "4.4L Twin-Turbo V8",
    horsepower: 523,
    topSpeed: "190 mph",
    acceleration: "3.4s 0-60",
    transmission: "8-Speed Automatic",
    drivetrain: "AWD",
    fuelType: "Premium Gasoline",
    description: "Born for the night. The Nocturne GTS blends dramatic design with devastating performance, turning every drive into an event.",
  },
  {
    id: "5",
    name: "Viper Evo",
    brand: "Viper",
    year: 2026,
    price: 275000,
    image: car5,
    category: "Sports",
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 740,
    topSpeed: "218 mph",
    acceleration: "2.6s 0-60",
    transmission: "7-Speed DCT",
    drivetrain: "AWD",
    fuelType: "Premium Gasoline",
    description: "Extreme performance distilled. The Viper Evo is a track-bred hypercar engineered for those who demand the absolute pinnacle.",
  },
  {
    id: "6",
    name: "Eclipse Spyder",
    brand: "Eclipse",
    year: 2026,
    price: 198000,
    image: car6,
    category: "Convertible",
    engine: "4.0L Twin-Turbo V8",
    horsepower: 580,
    topSpeed: "195 mph",
    acceleration: "3.1s 0-60",
    transmission: "7-Speed DCT",
    drivetrain: "RWD",
    fuelType: "Premium Gasoline",
    description: "Open-air excellence. The Eclipse Spyder delivers breathtaking performance with the sky as your ceiling.",
  },
];

export const categories = ["All", "Sports", "SUV", "Sedan", "Coupe", "Convertible"] as const;

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
