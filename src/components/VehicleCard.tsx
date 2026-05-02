import { motion } from "framer-motion";
import { Gauge, Zap } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";
import { formatPrice } from "@/lib/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
  onClick: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, index, onClick }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(vehicle)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-gold/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.name}`}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 right-4 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-gold-foreground">
          {vehicle.category}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
          {vehicle.brand.toUpperCase()} · {vehicle.year}
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground">{vehicle.name}</h3>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Gauge size={14} className="text-gold" />
            {vehicle.horsepower} HP
          </span>
          <span className="flex items-center gap-1">
            <Zap size={14} className="text-gold" />
            {vehicle.acceleration}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-gold-gradient text-xl font-bold">{formatPrice(vehicle.price)}</span>
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-gold">
            View Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
