import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-gold-gradient text-xl font-bold tracking-tight">APEX</span>
            <span className="ml-2 text-xs font-medium tracking-[0.3em] text-muted-foreground">MOTORS</span>
          </div>
          <nav className="flex gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/inventory", label: "Inventory" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apex Motors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
