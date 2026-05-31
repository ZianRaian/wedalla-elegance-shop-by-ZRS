import { Mail, Phone, MapPin } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Event Booking Inquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:hellowedalla@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section-slide">
      <div className="bg-blob w-80 h-80 top-10 left-10" style={{ background: 'var(--glow-purple)' }} />
      <div className="bg-blob w-64 h-64 bottom-10 right-10" style={{ background: 'var(--glow-blue)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Let's Create <span className="gradient-text">Magic</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Submitting opens your email app with the message pre-filled. Please send it from there.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your dream event..."
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-glow py-4 rounded-full text-primary-foreground font-semibold text-lg block text-center"
              >
                Book Your Event Or Service's
              </button>
            </form>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            {[
              { icon: Mail, label: "hellowedalla@gmail.com" },
              { icon: Phone, label: "+8801401983744" },
              { icon: MapPin, label: "209 2nd faze , Khulna 9100, Khulna,\nBangladesh, 9100" },
            ].map((item) => (
              <div key={item.label} className="glass-card glass-card-hover p-6 flex items-center gap-5 transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium whitespace-pre-line">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
