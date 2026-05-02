import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury sports car with dramatic lighting"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-[0.3em] text-gold"
          >
            PREMIUM COLLECTION 2026
          </motion.p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Drive the
            <span className="text-gold-gradient"> Extraordinary</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Discover our curated collection of the world's most exceptional vehicles.
            Performance, luxury, and innovation — redefined.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/inventory">
                Explore Collection
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Book a Test Drive</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
