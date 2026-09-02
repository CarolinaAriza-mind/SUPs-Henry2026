import type { Activity } from "@/types/activity";

export const module2Activities: Activity[] = [
  {
    id: "m2-01",
    module: 2,
    title: "Entrená al robot",
    duration: "45–50 min",
    skills: ["Comunicación efectiva", "Trabajo en equipo"],
    frontBack: "Front + Back",
    description:
      "Una persona debe dar instrucciones extremadamente precisas para que otra ejecute una tarea.",
    objective:
      "Experimentar cómo la falta de contexto, precisión o validación genera errores.",
    materials:
      "Una imagen simple, figura geométrica o secuencia de instrucciones.",
    steps: [
      "El TA divide al grupo en parejas.",
      "Una persona recibe una imagen o procedimiento que la otra no puede ver.",
      "Debe explicar exactamente qué hacer.",
      "La segunda persona ejecuta sin realizar interpretaciones adicionales.",
      "Se comparan resultado e instrucciones originales.",
      "Las parejas identifican dónde apareció cada error.",
    ],
    debrief: [
      "¿Dónde apareció la ambigüedad?",
      "¿Qué información faltaba?",
      "¿Quién asumió cosas que nunca fueron dichas?",
      "¿Cómo validamos que la otra persona entendió?",
    ],
    transfer:
      "Una especificación técnica, un ticket o una API funcionan mejor cuando el contexto y los criterios esperados están claros.",
  },
  {
    id: "m2-02",
    module: 2,
    title: "Feedback en tres capas",
    duration: "45–50 min",
    skills: ["Comunicación efectiva", "Feedback", "Empatía"],
    frontBack: "Front + Back",
    description:
      "Práctica guiada para transformar opiniones generales en feedback accionable.",
    objective:
      "Aprender a describir conductas, impacto y próximos pasos sin atacar a la persona.",
    materials: "Situaciones hipotéticas de trabajo.",
    steps: [
      "El TA presenta ejemplos de feedback poco útil.",
      "El grupo identifica qué problema tienen.",
      "Se transforma cada ejemplo utilizando conducta, impacto y propuesta.",
      "Los participantes practican en parejas.",
      "Se intercambian observaciones.",
    ],
    debrief: [
      "¿Qué diferencia hay entre criticar y dar feedback?",
      "¿Qué pasa cuando hablamos de la persona en lugar de la conducta?",
      "¿Qué hace que un feedback sea accionable?",
    ],
    transfer:
      "Code reviews, retrospectivas y reuniones uno a uno requieren feedback concreto y orientado a mejorar.",
  },
  {
    id: "m2-03",
    module: 2,
    title: "Mensaje perdido",
    duration: "45–50 min",
    skills: ["Escucha activa", "Comunicación efectiva"],
    frontBack: "Front + Back",
    description:
      "Una cadena de comunicación permite observar cómo cambia un mensaje cuando circula entre varias personas.",
    objective:
      "Mostrar la importancia del contexto, la precisión y la confirmación.",
    materials: "Una consigna preparada por el TA.",
    steps: [
      "El TA entrega una consigna a una primera persona.",
      "La persona transmite el mensaje a otra.",
      "La transmisión continúa hasta completar la cadena.",
      "La última persona comparte el mensaje recibido.",
      "Se compara con el original.",
    ],
    debrief: [
      "¿Qué información se perdió?",
      "¿Qué información se agregó?",
      "¿En qué momento cambió el significado?",
      "¿Cómo podemos evitar esto en un equipo?",
    ],
    transfer:
      "La información técnica puede degradarse cuando pasa por múltiples personas sin documentación ni confirmación.",
  },
  {
    id: "m2-04",
    module: 2,
    title: "Reunión imposible",
    duration: "45–50 min",
    skills: ["Comunicación efectiva", "Trabajo en equipo", "Participación"],
    frontBack: "Front + Back",
    description:
      "Simulación de una reunión con objetivos, roles y restricciones diferentes.",
    objective:
      "Practicar coordinación, escucha, síntesis y toma de decisiones.",
    materials: "Tarjetas o instrucciones con roles.",
    steps: [
      "Cada participante recibe un rol o interés.",
      "El grupo debe resolver un problema en tiempo limitado.",
      "Algunas personas tienen información que otras no conocen.",
      "El grupo debe llegar a una decisión.",
      "Se analiza cómo se organizó la conversación.",
    ],
    debrief: [
      "¿Quién tomó la iniciativa?",
      "¿Quién quedó fuera?",
      "¿Cómo se tomaron las decisiones?",
      "¿Qué información no se compartió?",
    ],
    transfer:
      "Las reuniones técnicas requieren ordenar información, escuchar posiciones y cerrar decisiones concretas.",
  },
];
