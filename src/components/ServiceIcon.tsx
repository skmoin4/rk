import {
  Wind,
  Fan,
  SprayCan,
  ChefHat,
  Hotel,
  UtensilsCrossed,
  Factory,
  Warehouse,
  HeartPulse,
  GraduationCap,
  Shirt,
  Building2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  wind: Wind,
  fan: Fan,
  "spray-can": SprayCan,
  "chef-hat": ChefHat,
  hotel: Hotel,
  "utensils-crossed": UtensilsCrossed,
  factory: Factory,
  warehouse: Warehouse,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  shirt: Shirt,
  "building-2": Building2,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Wind;
  return <Icon className={className} aria-hidden="true" />;
}
