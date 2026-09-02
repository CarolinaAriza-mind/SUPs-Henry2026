import type { Activity } from "@/types/activity";

export const module3Activities: Activity[] = [
  {
    id: "m3-01",
    module: 3,
    title: "Debugging humano",
    duration: "45–50 min",
    skills: ["Escucha activa", "Pensamiento crítico", "Empatía"],
    frontBack: "Front + Back",
    description:
      "Una persona relata un problema y la otra debe investigar antes de proponer soluciones.",
    objective:
      "Practicar escucha, formulación de preguntas y búsqueda de evidencia.",
    materials: "Situaciones problemáticas preparadas.",
    steps: [
      "Una persona recibe un problema ficticio.",
      "La otra debe entenderlo haciendo preguntas.",
      "Durante los primeros minutos no puede proponer soluciones.",
      "Debe resumir lo entendido.",
      "Recién después puede plantear hipótesis.",
      "Se comparan las soluciones iniciales con las obtenidas después de investigar.",
    ],
    debrief: [
      "¿Cuándo tuvimos ganas de solucionar demasiado rápido?",
      "¿Qué información apareció gracias a las preguntas?",
      "¿Qué diferencia hay entre hipótesis y evidencia?",
    ],
    transfer:
      "Debuggear software requiere observar síntomas, recolectar evidencia y formular hipótesis antes de modificar código.",
  },
  {
    id: "m3-02",
    module: 3,
    title: "Debate ético",
    duration: "45–50 min",
    skills: ["Pensamiento crítico", "Comunicación efectiva", "Empatía"],
    frontBack: "Front + Back",
    description:
      "El grupo debate una situación tecnológica donde no existe una única respuesta correcta.",
    objective:
      "Practicar argumentación, desacuerdo respetuoso y análisis de consecuencias.",
    materials: "Caso ético relacionado con tecnología.",
    steps: [
      "El TA presenta un dilema.",
      "Los participantes toman una posición.",
      "Deben justificarla con argumentos.",
      "Se habilita una ronda de preguntas.",
      "El TA introduce una nueva información que modifica el contexto.",
      "Los participantes pueden cambiar su posición.",
    ],
    debrief: [
      "¿Qué argumentos fueron más sólidos?",
      "¿Cambió alguien de opinión? ¿Por qué?",
      "¿Podemos estar en desacuerdo sin atacar a la persona?",
    ],
    transfer:
      "Los profesionales de tecnología toman decisiones con impacto sobre usuarios, datos, accesibilidad y seguridad.",
  },
  {
    id: "m3-03",
    module: 3,
    title: "Decidí con información incompleta",
    duration: "45–50 min",
    skills: ["Pensamiento crítico", "Trabajo en equipo"],
    frontBack: "Front + Back",
    description:
      "Los equipos deben tomar una decisión utilizando información parcial y cambiante.",
    objective:
      "Practicar decisiones bajo incertidumbre y distinguir datos de supuestos.",
    materials: "Tarjetas con información distribuida.",
    steps: [
      "Cada participante recibe una parte de la información.",
      "El grupo debe decidir qué hacer.",
      "No pueden ver inicialmente toda la información.",
      "Luego reciben nuevos datos.",
      "Pueden revisar su decisión.",
      "Analizan qué supuestos habían realizado.",
    ],
    debrief: [
      "¿Qué información consideramos verdadera sin comprobar?",
      "¿Quién tenía información relevante?",
      "¿Qué pasó cuando apareció evidencia nueva?",
    ],
    transfer:
      "En proyectos reales rara vez se cuenta con toda la información al decidir arquitectura, prioridades o soluciones.",
  },
  {
    id: "m3-04",
    module: 3,
    title: "La evidencia manda",
    duration: "45–50 min",
    skills: ["Pensamiento crítico", "Escucha activa"],
    frontBack: "Front + Back",
    description:
      "Los participantes reciben diferentes afirmaciones y deben separar hechos, interpretaciones e hipótesis.",
    objective:
      "Entrenar pensamiento crítico y evitar conclusiones sin evidencia.",
    materials: "Casos breves relacionados con situaciones de equipos.",
    steps: [
      "El TA presenta una situación.",
      "Los participantes clasifican afirmaciones como hecho, interpretación o hipótesis.",
      "Se comparan las respuestas.",
      "El grupo identifica qué evidencia necesitaría para confirmar una hipótesis.",
      "Se construye una conclusión prudente.",
    ],
    debrief: [
      "¿Qué confundimos con un hecho?",
      "¿Qué información faltaba?",
      "¿Cómo cambia una conversación cuando pedimos evidencia?",
    ],
    transfer:
      "Los bugs, métricas y decisiones técnicas requieren diferenciar observaciones de interpretaciones.",
  },
];
