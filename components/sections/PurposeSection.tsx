const principles = [
  [
    "01",
    "Conocer",
    "Generar espacios seguros para que los alumnos puedan mostrarse, escuchar y reconocer a sus compañeros.",
  ],
  [
    "02",
    "Practicar",
    "No explicar habilidades blandas durante 50 minutos: diseñar situaciones donde tengan que ponerlas en juego.",
  ],
  [
    "03",
    "Reflexionar",
    "El aprendizaje aparece en el cierre: qué pasó, cómo se comunicaron y qué podrían hacer distinto.",
  ],
  [
    "04",
    "Transferir",
    "Conectar lo vivido con situaciones reales de un equipo tecnológico: reuniones, feedback, debugging, decisiones y demos.",
  ],
];

export function PurposeSection() {
  return (
    <section id="como-usar" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">PROPÓSITO</p>
          <h2>
            Optimizar el espacio SUP sin convertirlo en otra clase técnica
          </h2>
          <p>
            La propuesta separa intencionalmente los objetivos: los Hands On con
            los profesores técnicos trabajan contenidos tecnológicos; los SUP
            con TA entrenan comunicación, colaboración, escucha, empatía,
            participación y comunidad.
          </p>
        </div>
        <div className="principles">
          {principles.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
