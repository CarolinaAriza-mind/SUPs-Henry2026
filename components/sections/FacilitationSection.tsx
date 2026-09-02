const checklist = [
  "Pedí cámara cuando la actividad dependa de señales visuales, pero explicá el propósito.",
  "Invitá al micrófono; no obligues a hablar sin dar alternativas graduales.",
  "Observá quién participa, quién interrumpe, quién pregunta y quién queda afuera.",
  "No evalúes personalidad: describí conductas observables.",
  "Cerrá siempre con transferencia: “¿Dónde aparece esto en un equipo de desarrollo?”",
  "Adaptá la cantidad de integrantes a la asistencia real.",
];

export function FacilitationSection() {
  return (
    <section id="facilitacion" className="section">
      <div className="container facilitator-grid">
        <div className="section-heading">
          <p className="eyebrow">GUÍA PARA TA</p>
          <h2>Facilitar no es controlar la conversación</h2>
          <p>
            El rol del TA es crear las condiciones, observar y hacer preguntas.
            Evitá rescatar al grupo cuando aparece el silencio: ese silencio
            también puede ser parte del aprendizaje.
          </p>
        </div>
        <div className="checklist">
          {checklist.map((item) => (
            <div key={item}>☐ {item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
