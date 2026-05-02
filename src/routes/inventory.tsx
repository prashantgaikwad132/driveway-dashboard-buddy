import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VehicleCard } from "@/components/VehicleCard";
import { VehicleModal } from "@/components/VehicleModal";
import { vehicles, categories } from "@/lib/vehicles";
import type { Vehicle } from "@/lib/vehicles";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Apex Motors" },
      { name: "description", content: "Browse our full collection of premium vehicles. Filter by category, search by name." },
      { property: "og:title", content: "Inventory — Apex Motors" },
      { property: "og:description", content: "Browse our full collection of premium vehicles." },
    ],
  }),
  component: InventoryPage,
});

function InventoryPage() {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const filtered = vehicles.filter((v) => {
    const matchesCat = category === "All" || v.category === category;
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.brand.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-foreground">Our Collection</h1>
          <p className="mt-2 text-muted-foreground">Browse and filter our premium vehicle inventory.</p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative">
            <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-lg border border-border bg-input pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  category === cat
                    ? "gold-gradient text-gold-foreground"
                    : "border border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} onClick={setSelectedVehicle} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No vehicles match your search criteria.
          </div>
        )}
      </div>
      <Footer />
      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </div>
  );
}
