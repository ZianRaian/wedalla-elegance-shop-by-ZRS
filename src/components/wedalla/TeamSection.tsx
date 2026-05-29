import nazmusSakib from "@/assets/team/nazmus-sakib.jpg";
import alMumithMejor from "@/assets/team/al-mumith-mejor.jpg";
import akibRahman from "@/assets/team/akib-rahman.jpg";
import arafathHasan from "@/assets/team/arafath-hasan.jpg";
import subarnaMostafa from "@/assets/team/subarna-mostafa.jpg";
import shalinurIslam from "@/assets/team-member-6.jpg";

const team = [
  { name: "Nazmus Sakib", role: "Founder & CEO", photo: nazmusSakib },
  { name: "Al Mumith Mejor", role: "Co-Founder & Managing Director", photo: alMumithMejor },
  { name: "Akib Rahman", role: "CO-Founder & Creative Director", photo: akibRahman },
  { name: "Arafath Hasan", role: "CO-Founder & logistics Director", photo: arafathHasan },
  { name: "Subarna Mostafa", role: "General Manager", photo: subarnaMostafa },
  { name: "Shalinur Islam", role: "Director of Marketing", photo: shalinurIslam as string | null },
];

const TeamSection = () => {
  return (
    <section className="section-slide">
      <div className="bg-blob w-64 h-64 bottom-10 right-10" style={{ background: 'var(--glow-purple)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">The People</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Meet Our <span className="gradient-text">Team</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 text-center">30+ Experts In Our Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((t) => (
            <div
              key={t.name}
              className="glass-card glass-card-hover p-8 text-center transition-all duration-500 hover:scale-[1.04]"
            >
              {t.photo ? (
                <img src={t.photo} alt={t.name} className="w-20 h-20 mx-auto mb-5 rounded-2xl object-cover" />
              ) : (
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary text-center">{t.name.charAt(0)}</span>
                </div>
              )}
              <h3 className="font-semibold text-foreground mb-1">{t.name}</h3>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
