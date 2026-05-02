import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Vehicles Sold" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "15+", label: "Premium Brands" },
  { value: "24/7", label: "Concierge Support" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-surface/50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-gold-gradient text-3xl font-bold md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
