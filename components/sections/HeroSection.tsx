interface HeroSectionProps {
  moduleCount: number;
  activityCount: number;
}

export function HeroSection({ moduleCount, activityCount }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">
            RECURSO ABIERTO PARA TA · FORMACIÓN TECNOLÓGICA
          </p>
          <h1>
            Habilidades blandas, <span>puestas en práctica.</span>
          </h1>
          <p className="hero-copy">
            Un banco de dinámicas de 50 minutos para espacios SUP, pensado para
            conocer a los alumnos, fortalecer la comunidad y entrenar
            habilidades que también hacen a un buen profesional de tecnología.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#actividades">
              Explorar actividades
            </a>
            <a className="btn ghost" href="#como-usar">
              Ver modelo de clase
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-stat">
            <strong>{moduleCount}</strong>
            <span>módulos</span>
          </div>
          <div className="hero-stat">
            <strong>{activityCount}</strong>
            <span>dinámicas</span>
          </div>
          <div className="hero-stat">
            <strong>50&apos;</strong>
            <span>por encuentro</span>
          </div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
