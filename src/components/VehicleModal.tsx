import { motion, AnimatePresence } from "framer-motion";
import { X, Gauge, Zap, Cog, Fuel } from "lucide-react";
import type { Vehicle } from "@/lib/vehicles";
import { formatPrice } from "@/lib/vehicles";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  return (
    <AnimatePresence>
      {vehicle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.name}`}
                className="h-full w-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <p className="text-sm font-medium tracking-[0.3em] text-gold">
                {vehicle.brand.toUpperCase()} · {vehicle.year}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">{vehicle.name}</h2>
              <p className="mt-3 text-muted-foreground">{vehicle.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Gauge, label: "Horsepower", value: `${vehicle.horsepower} HP` },
                  { icon: Zap, label: "0-60 mph", value: vehicle.acceleration },
                  { icon: Cog, label: "Transmission", value: vehicle.transmission },
                  { icon: Fuel, label: "Fuel Type", value: vehicle.fuelType },
                ].map((spec) => (
                  <div key={spec.label} className="rounded-lg border border-border bg-muted/30 p-4 text-center">
                    <spec.icon size={20} className="mx-auto text-gold" />
                    <p className="mt-2 text-xs text-muted-foreground">{spec.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 rounded-lg border border-border bg-muted/20 p-4">
                <div>
                  <p className="text-xs text-muted-foreground">Engine</p>
                  <p className="text-sm font-medium text-foreground">{vehicle.engine}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Drivetrain</p>
                  <p className="text-sm font-medium text-foreground">{vehicle.drivetrain}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Top Speed</p>
                  <p className="text-sm font-medium text-foreground">{vehicle.topSpeed}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="text-gold-gradient text-3xl font-bold">{formatPrice(vehicle.price)}</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="heroOutline" asChild>
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                  <Button variant="hero" asChild>
                    <Link to="/contact">Book Test Drive</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
