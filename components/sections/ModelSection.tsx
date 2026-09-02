const timeline = [
  [
    "0–5'",
    "Check-in y encuadre",
    "Saludo, cámara/micrófono, objetivo y reglas mínimas de participación.",
  ],
  ["5–10'", "Contexto", "Presentar el desafío sin resolverlo por los alumnos."],
  [
    "10–30'",
    "Dinámica",
    "Trabajo en parejas, salas pequeñas o grupo completo.",
  ],
  [
    "30–42'",
    "Puesta en común",
    "Comparar decisiones, estrategias y puntos de vista.",
  ],
  [
    "42–50'",
    "Debrief",
    "Nombrar conductas observables y conectar con situaciones de tecnología.",
  ],
];

export function ModelSection() {
  return (
    <section id="modelo" className="section dark-section">
      <div className="container">
        <div className="section-heading light">
          <p className="eyebrow">MODELO DE 50 MINUTOS</p>
          <h2>Una estructura simple para que el TA no tenga que improvisar</h2>
        </div>
        <div className="timeline">
          {timeline.map(([time, title, description]) => (
            <div key={time}>
              <strong>{time}</strong>
              <span>{title}</span>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
