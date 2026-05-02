import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Award, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Apex Motors" },
      { name: "description", content: "Learn about Apex Motors — a premium automotive destination committed to delivering extraordinary vehicles and experiences." },
      { property: "og:title", content: "About — Apex Motors" },
      { property: "og:description", content: "A premium automotive destination." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Shield, title: "Trust & Transparency", desc: "Every vehicle undergoes a rigorous 200-point inspection. Full history reports and honest pricing, always." },
    { icon: Award, title: "Uncompromising Quality", desc: "We curate only the finest vehicles from the world's most prestigious manufacturers." },
    { icon: Users, title: "Client-First Experience", desc: "Our concierge team provides personalized guidance from first inquiry to delivery." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-gold">OUR STORY</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">About Apex Motors</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Founded on a passion for automotive excellence, Apex Motors is a premier destination for
            discerning drivers seeking the world's most exceptional vehicles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            At Apex Motors, we believe that choosing a vehicle is more than a transaction — it's an
            expression of identity. Our team of automotive specialists hand-selects every vehicle in
            our collection, ensuring it meets the highest standards of performance, luxury, and design.
          </p>
          <p>
            From the initial consultation to final delivery, we provide a seamless and personalized
            experience. Whether you're seeking a track-ready supercar, a versatile luxury SUV, or the
            latest in electric vehicle innovation, our curated inventory has been assembled with you in mind.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <v.icon className="mx-auto text-gold" size={32} />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
