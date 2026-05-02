import { useState } from "react";
import { motion } from "framer-motion";
import { vehicles, categories } from "@/lib/vehicles";
import type { Vehicle } from "@/lib/vehicles";
import { VehicleCard } from "./VehicleCard";
import { VehicleModal } from "./VehicleModal";

export function FeaturedSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filtered = activeCategory === "All"
    ? vehicles
    : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm font-medium tracking-[0.3em] text-gold">OUR COLLECTION</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Featured Vehicles</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "gold-gradient text-gold-foreground"
                : "border border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((vehicle, i) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} onClick={setSelectedVehicle} />
        ))}
      </div>

      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </section>
  );
}
