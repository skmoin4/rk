import { Wind, Fan, SprayCan, ChefHat, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = {
  wind: Wind,
  fan: Fan,
  "spray-can": SprayCan,
  "chef-hat": ChefHat,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Wind;
  return <Icon className={className} aria-hidden="true" />;
}
