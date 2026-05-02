import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apex Motors" },
      { name: "description", content: "Get in touch with Apex Motors. Schedule a test drive, inquire about a vehicle, or visit our showroom." },
      { property: "og:title", content: "Contact — Apex Motors" },
      { property: "og:description", content: "Get in touch with Apex Motors." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+1 (555) 987-6543" },
    { icon: Mail, label: "Email", value: "concierge@apexmotors.com" },
    { icon: MapPin, label: "Showroom", value: "1200 Prestige Boulevard, Beverly Hills, CA" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-gold">GET IN TOUCH</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">We'd love to hear from you. Reach out for inquiries, test drives, or a private viewing.</p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <div className="rounded-lg gold-gradient p-2.5">
                    <item.icon size={20} className="text-gold-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Showroom Hours</h3>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Monday - Friday</span><span className="text-foreground">9:00 AM - 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-foreground">10:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-foreground">By Appointment</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-gold/30 bg-card p-12 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gold-gradient">
                    <Send size={28} className="text-gold-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">Our team will get back to you within 24 hours.</p>
                  <Button variant="heroOutline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send Another
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground">Send Us a Message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">First Name</label>
                    <input required className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-muted-foreground">Last Name</label>
                    <input required className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted-foreground">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted-foreground">Interest</label>
                  <select className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Schedule Test Drive</option>
                    <option>Vehicle Availability</option>
                    <option>Financing Options</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted-foreground">Message</label>
                  <textarea required rows={4} className="w-full resize-none rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none" />
                </div>
                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
