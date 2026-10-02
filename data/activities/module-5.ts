import type { Activity } from "@/types/activity";

export const module5Activities: Activity[] = [
  {
    id: "m5-01",
    module: 5,
    title: " Elevator pitch técnico",
    duration: " 45 min",
    skills: [" Presentación", "Comunicación efectiva"],
    frontBack: " Front + Back",
    description:
      "Cada participante presenta una idea técnica en menos de un minuto utilizando lenguaje comprensible.",
    objective:
      "Aprender a comunicar valor sin esconderse detrás de tecnicismos.",
    materials:
      "Discord con voz o chat, cronómetro y plantilla: para quién | problema | solución | beneficio | próximo paso. No se requiere proyecto real.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Prepará tríos y avisá que el objetivo es hacerse entender, no vender una trayectoria inventada. Ofrecé el caso ficticio a quien no tenga un proyecto.",

      "CONSIGNA PARA COMPARTIR · Presentá una idea en 60 segundos para una persona que no conoce tu proyecto. Después escuchá qué entendió tu audiencia y repetí el mensaje con una mejora concreta.",

      "RECURSOS DEL DESAFÍO · Caso opcional: una app permite que una biblioteca registre préstamos y consulte devoluciones pendientes. Antes usaban un cuaderno y les costaba encontrar qué libro tenía cada socio. Todavía no hay métricas de mejora. Ejemplo de inicio: «Para quienes administran una biblioteca, esta app reúne préstamos y devoluciones en un lugar». No inventen resultados ni porcentajes. Cierre posible: invitar a probar el flujo o pedir feedback.",

      "ROLES Y REGLAS · Tríos: presentador, oyente y observador; roten. El oyente devuelve qué problema y beneficio entendió, sin completar lo que faltó. El observador registra tiempo, claridad y tecnicismos. No se evalúa acento, cámara ni extroversión.",

      "Modelo y objetivo (5 min) · El TA presenta la plantilla y un ejemplo de jerga que puede traducirse a lenguaje cotidiano.",

      "Preparación (7 min) · Cada persona redacta cinco frases y elige una audiencia concreta.",

      "Primera ronda (12 min) · Tres turnos de cuatro minutos: pitch de un minuto, devolución del oyente, observación y anotación de mejoras.",

      "Reescritura (6 min) · Eliminen información secundaria y aclaren el beneficio sin inventar evidencia.",

      "Segunda ronda (9 min) · Tres turnos de tres minutos: nuevo pitch, paráfrasis del oyente y comparación con la versión anterior.",

      "Cierre (6 min) · Compartan qué cambio mejoró la comprensión y qué pregunta harían a una audiencia real.",

      "ADAPTACIONES · Con dos personas, alternen presentación y devolución y hagan una tercera versión. Con cuatro, sumen otro oyente de una audiencia distinta. Puede presentarse por escrito con una extensión equivalente. Para 40 minutos, reduzcan preparación a cinco y primera ronda a nueve minutos.",
    ],
    debrief: [
      "¿Qué recordó la persona que escuchó?",
      "¿Qué palabra necesitó explicación?",
      "¿El beneficio era concreto y estaba respaldado?",
      "¿Qué decidiste dejar afuera para que se entendiera mejor?",
    ],
    transfer:
      "Comunicar valor requiere adecuar el mensaje a la audiencia. Entregable: pitch de hasta 60 segundos y una mejora basada en lo que entendió otro. Aplicación: explicar un proyecto en una entrevista o reunión sin depender de una lista de tecnologías.",
  },
  {
    id: "m5-02",
    module: 5,
    title: " Demo sin rescate",
    duration: " 45 min",
    skills: [" Presentación", "Comunicación efectiva", "Empatía"],
    frontBack: " Front + Back",
    description:
      "Simulación de una demo donde aparecen errores y preguntas inesperadas.",
    objective: "Practicar comunicación profesional frente a imprevistos.",
    materials:
      "Discord, cronómetro, capturas o guion de una funcionalidad y tarjetas de imprevistos. No se necesita una app funcionando.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Explicá que “sin rescate” significa que quien presenta practica cómo conducir la respuesta; puede pedir ayuda explícitamente o pausar. No se provocan fallas reales ni se expone información privada. Prepará tríos.",

      "CONSIGNA PARA COMPARTIR · Mostrá una funcionalidad durante dos minutos. Ante un imprevisto, explicá qué pasó, qué podés mostrar ahora y cómo verificarías lo pendiente. Practiquemos responder con claridad sin inventar una solución.",

      "RECURSOS DEL DESAFÍO · Caso opcional: app de biblioteca con lista de libros, préstamo y confirmación. Guion: buscar un título, elegir socio, confirmar préstamo y mostrar estado. Tarjetas: A «La pantalla no carga»; B «Te preguntan si funciona sin internet y no lo probaste»; C «La confirmación muestra un dato distinto al esperado». Respuesta orientativa: «No puedo confirmar eso todavía; lo voy a probar y compartir el resultado por el canal acordado».",

      "ROLES Y REGLAS · Tríos: presentador, público y observador. El público introduce solo un imprevisto por turno y no insiste en incomodar. El observador mira si distingue hechos de lo desconocido y propone un siguiente paso. No se arregla código durante la práctica. Se puede usar una captura, explicar el flujo o pedir apoyo de forma explícita.",

      "Encuadre (5 min) · El TA explica roles, límites y cómo pausar.",

      "Preparación (7 min) · Cada persona prepara el flujo y un respaldo en texto o capturas.",

      "Primera ronda (15 min) · Tres turnos de cinco minutos: dos de demo, uno de imprevisto y respuesta, y dos de feedback. Roten roles.",

      "Plan de respuesta (5 min) · Escriban una frase para reconocer el problema y otra para indicar siguiente paso y canal de seguimiento.",

      "Repetición (8 min) · Cada participante ensaya de nuevo solo el tramo del imprevisto; el observador compara las respuestas.",

      "Cierre (5 min) · Identifiquen qué ayudó a sostener la claridad sin ocultar el problema.",

      "ADAPTACIONES · Con dos personas, alternen presentador y público y revisen juntos los criterios. Con cuatro, sumen observador del lenguaje y del siguiente paso. Sin proyecto, usen el caso y narren las pantallas. Para 40 minutos, reduzcan preparación a cinco y repetición a cinco minutos.",
    ],
    debrief: [
      "¿Qué pudiste afirmar con certeza y qué no?",
      "¿Cómo mantuviste informada a la audiencia?",
      "¿Cuándo pedir ayuda fue una decisión útil?",
      "¿El seguimiento propuesto era concreto y realista?",
    ],
    transfer:
      "Una demo también comunica cómo se manejan los límites y los problemas. Entregable: guion con respaldo y respuesta a un imprevisto. Aplicación: reconocer un fallo, evitar promesas infundadas y acordar verificación y seguimiento.",
  },
  {
    id: "m5-03",
    module: 5,
    title: " Feedback de proyecto",
    duration: " 45 min",
    skills: [" Feedback", "Presentación", "Empatía"],
    frontBack: " Front + Back",
    description:
      "Los participantes practican cómo recibir y transformar feedback sobre un proyecto.",
    objective:
      "Aprender a escuchar feedback sin reaccionar defensivamente y convertirlo en acciones.",
    materials:
      "Discord, cronómetro y tabla: observación recibida | aclaración | incorporar, investigar o postergar | motivo | acción. Proyecto propio o caso de ejemplo.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Formá tríos y acordá evaluar el trabajo, no a la persona. Aclará que escuchar no obliga a aceptar todos los pedidos y que se puede pedir una pausa.",

      "CONSIGNA PARA COMPARTIR · Presentá una funcionalidad y recibí feedback. Antes de defenderla, resumí lo que entendiste y hacé una pregunta. Luego decidí qué incorporar, qué investigar y qué postergar según el objetivo del proyecto.",

      "RECURSOS DEL DESAFÍO · Caso opcional: formulario de préstamo de biblioteca con campos nombre de socio, libro y botón “Enviar”; después aparece “Listo”. Objetivo: registrar un préstamo y saber que quedó guardado. Feedback posible: «No sé qué hace Enviar», «Me gustaría un fondo animado», «Después de Listo no veo qué libro quedó registrado». Son puntos de partida: el equipo debe justificar prioridades. Plantilla de feedback: «Al ver/hacer… entendí/no pude…; sugiero/probaría…».",

      "ROLES Y REGLAS · Tríos: presentador, usuario y observador; roten. En el primer minuto de devolución el presentador escucha y anota; luego parafrasea y pregunta. El usuario describe su experiencia sin generalizar a todos. El observador registra si hubo escucha y si la decisión final se relaciona con el objetivo.",

      "Encuadre y criterios (5 min) · El TA explica escucha, paráfrasis y decisión fundamentada.",

      "Preparación (5 min) · Cada persona elige una funcionalidad o el caso y define para qué usuario y objetivo está pensada.",

      "Rondas de feedback (18 min) · Tres turnos de seis minutos: uno de presentación, uno de feedback, uno de paráfrasis, uno de aclaración y dos para decidir y observar.",

      "Plan de mejora (7 min) · Completen la tabla con al menos una acción prioritaria y cómo comprobarían su resultado.",

      "Contraste (5 min) · Compartan una sugerencia aceptada y otra a investigar o postergar, con razones.",

      "Cierre (5 min) · Registren una forma de pedir feedback más específico la próxima vez.",

      "ADAPTACIONES · Con dos personas, alternen presentar y dar feedback; ambos revisan los criterios. Con cuatro, agreguen otro usuario y comparen experiencias. Sin proyecto, cada persona propone una versión del caso. Para 40 minutos, reduzcan plan de mejora a cinco y contraste a dos minutos.",
    ],
    debrief: [
      "¿Qué ayudó a escuchar antes de responder?",
      "¿Qué aclaración cambió el sentido del feedback?",
      "¿Qué criterio usaste para priorizar?",
      "¿Cómo verificarías que la mejora resolvió el problema?",
    ],
    transfer:
      "El feedback se transforma en decisiones, no en una lista automática de pedidos. Entregable: tabla y una acción con criterio de verificación. Aplicación: contrastar sugerencias con necesidades del usuario y alcance antes de incorporarlas al trabajo.",
  },
  {
    id: "m5-04",
    module: 5,
    title: " Demo final",
    duration: " 45 min",
    skills: [" Presentación", "Comunicación efectiva", "Comunidad", "Feedback"],
    frontBack: " Front + Back",
    description:
      "Cierre del recorrido con una presentación breve, feedback y reconocimiento entre compañeros.",
    objective:
      "Integrar comunicación, escucha, feedback y reconocimiento en una experiencia final.",
    materials:
      "Discord, cronómetro, proyecto o guion de un avance y ficha de feedback: qué entendí | evidencia de una fortaleza | pregunta | mejora posible. Capturas opcionales.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Armá salas de cuatro para que todas las personas puedan presentar dentro del tiempo. Si presentan equipos, agrupá como máximo cuatro presentaciones por sala. Permití narrar un avance o usar el caso de biblioteca de esta ficha; no se exige un producto terminado.",

      "CONSIGNA PARA COMPARTIR · Compartamos qué construimos y qué aprendimos. Presentá el problema, una parte de la solución y un aprendizaje del proceso. La audiencia hará una pregunta y devolverá un reconocimiento concreto y una mejora posible.",

      "RECURSOS DEL DESAFÍO · Guion de dos minutos: 30 segundos para usuario y problema; 60 para mostrar o narrar un recorrido; 30 para aprendizaje y siguiente paso. Caso alternativo: biblioteca que registra préstamos; narrar búsqueda de libro, elección del socio y confirmación. Si es una propuesta sin implementar, aclararlo. Ejemplo de reconocimiento: «Explicaste para quién era el flujo antes de mostrarlo; pude seguir la demo».",

      "ROLES Y REGLAS · En cada sala, roten presentación, control del tiempo, pregunta y registro. Todas las personas pueden aportar por chat. No comparen proyectos para elegir un ganador. Los reconocimientos deben citar una conducta o parte del trabajo, y las mejoras deben ser concretas y respetuosas.",

      "Apertura (5 min) · El TA presenta el objetivo de cierre, la ficha y el orden de cada sala.",

      "Preparación (7 min) · Cada persona elige qué mostrar y prepara su aprendizaje y siguiente paso.",

      "Demos en salas (20 min) · Cuatro turnos de cinco minutos: dos de presentación, uno de pregunta y dos de feedback. Registren una fortaleza y una mejora por presentación.",

      "Síntesis del recorrido (5 min) · La sala elige una habilidad que apareció y un ejemplo que la demuestre.",

      "Reconocimiento compartido (4 min) · Cada sala publica su aprendizaje en el chat general; el TA recupera patrones sin exigir una exposición de cada sala.",

      "Cierre individual (4 min) · Cada persona completa: «Voy a seguir… / Voy a practicar… / Mi próxima acción será…».",

      "ADAPTACIONES · Con dos personas, hagan dos rondas de cinco minutos por persona: presentación y luego versión mejorada. Con tres, usen los cinco minutos restantes para revisar feedback. Con grupos grandes, mantengan salas de cuatro y síntesis por chat. Para 40 minutos, reduzcan preparación a cinco y síntesis a dos minutos.",
    ],
    debrief: [
      "¿Qué conducta muestra un avance respecto del inicio?",
      "¿Qué reconocimiento recibiste que estuvo apoyado en un ejemplo?",
      "¿Qué mejora querés probar en tu próximo proyecto?",
      "¿Cómo se conectan escucha, comunicación y colaboración en una demo?",
    ],
    transfer:
      "Presentar, escuchar y revisar el trabajo integra las habilidades del recorrido. Entregable: demo o relato, ficha de feedback y compromiso personal concreto. Aplicación: cerrar una iteración reconociendo aprendizajes y definiendo el siguiente paso.",
  },
];
