import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <p className="section-subheading">Get in Touch</p>
        <h1 className="section-heading">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-secondary/50 p-8 rounded-lg text-center">
              <h3 className="font-heading text-2xl mb-2">Thank You</h3>
              <p className="font-body text-sm text-muted-foreground">We'll be in touch shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn-outline mt-6">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-xs uppercase tracking-[0.2em] block mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-[0.2em] block mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-[0.2em] block mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                  required
                  maxLength={1000}
                />
              </div>
              <button type="submit" className="btn-primary w-full text-center rounded-sm">Send Message</button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-2xl tracking-wide mb-6">Visit Our Store</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent" />
                <div>
                  <p className="font-body text-sm">123 Fashion Avenue</p>
                  <p className="font-body text-sm text-muted-foreground">London, W1J 5HP, UK</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-accent" />
                <p className="font-body text-sm">hello@wedallafashion.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-accent" />
                <p className="font-body text-sm">+44 20 7946 0958</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
            <span className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em]">Map</span>
          </div>

          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-3">Opening Hours</h4>
            <p className="font-body text-sm text-muted-foreground">Mon – Sat: 10:00 – 19:00</p>
            <p className="font-body text-sm text-muted-foreground">Sunday: 11:00 – 17:00</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
