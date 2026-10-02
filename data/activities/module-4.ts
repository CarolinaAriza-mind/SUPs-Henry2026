import type { Activity } from "@/types/activity";

export const module4Activities: Activity[] = [
  {
    id: "m4-01",
    module: 4,
    title: " Construir juntos",
    duration: " 45 min",
    skills: [" Trabajo en equipo", "Comunicación efectiva", "Escucha activa"],
    frontBack: " Front + Back",
    description:
      "El grupo debe construir una solución utilizando información distribuida entre sus integrantes.",
    objective:
      "Experimentar la importancia de compartir información y coordinar acciones.",
    materials:
      "Discord, cuatro tarjetas privadas, cronómetro y documento o chat para entregar presupuesto, horario, lugar y plan alternativo. Valores ficticios expresados en unidades de presupuesto.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Formá equipos de cuatro y distribuí tarjetas. No publiques de entrada la solución posible. Indicá que pueden tomar notas de lo que escuchan, pero no copiar las tarjetas al chat hasta la revisión.",

      "CONSIGNA PARA COMPARTIR · Organicen un encuentro de 90 minutos para 12 personas. La información está repartida entre ustedes: necesitarán preguntar y escucharse para crear un plan que respete presupuesto, accesibilidad y horarios.",

      "RECURSOS DEL DESAFÍO · Tarjeta Presupuesto: máximo 100 unidades; sala A cuesta 40, sala B 60 y refrigerio 2 por persona. Tarjeta Participantes: son 12; una necesita acceso sin escaleras y dos requieren refrigerio sin gluten, disponible al mismo precio. Tarjeta Lugares: A solo tiene acceso por escalera; B tiene rampa y capacidad para 15. Tarjeta Horarios: todos pueden de 18 a 20 h; B está disponible de 18:30 a 20 h. Imprevisto para la segunda parte: el proveedor de refrigerios cancela; otro cobra 3 unidades por persona y ofrece las mismas opciones.",

      "ROLES Y REGLAS · Cada integrante explica su información oralmente. Designen moderador de turnos y relator; roten tras el imprevisto. No se puede eliminar la necesidad de un participante para ahorrar. El plan debe indicar lugar, horario, total y cómo cubre cada condición.",

      "Reparto y lectura (5 min) · El TA presenta el objetivo y entrega tarjetas.",

      "Intercambio de información (10 min) · Cada integrante explica sus datos; el equipo pregunta y construye una lista común de restricciones.",

      "Primer plan (10 min) · Acuerden lugar, horario y presupuesto, y comprueben cada requisito.",

      "Imprevisto (7 min) · El TA anuncia el cambio de proveedor. Ajusten costos y comuniquen qué cambia.",

      "Validación cruzada (8 min) · Otro equipo revisa el plan contra las cuatro tarjetas, ahora visibles. Busquen omisiones antes de aprobarlo.",

      "Cierre (5 min) · Reconozcan una intervención que ayudó a integrar la información.",

      "ADAPTACIONES · Con dos personas, cada una recibe dos tarjetas; con tres, una toma dos. Con grupos grandes, salas de cuatro y revisión entre salas por chat. Para 40 minutos, reduzcan intercambio a ocho y validación a cinco minutos.",
    ],
    debrief: [
      "¿Qué dato era indispensable y quién lo tenía?",
      "¿Cómo comprobaron que todos habían aportado?",
      "¿Qué pasó al revisar el presupuesto?",
      "¿Qué pregunta evitó dejar una necesidad afuera?",
    ],
    transfer:
      "Coordinar requiere construir una visión compartida. Solución de control para el TA: sala B de 18:30 a 20 h; costo inicial 60 + 24 = 84 y final 60 + 36 = 96. Entregable: plan validado con requisitos. Aplicación: coordinar frontend, backend y QA revisando dependencias antes de comprometer una entrega.",
  },
  {
    id: "m4-02",
    module: 4,
    title: " El compañero que sabotea",
    duration: " 45 min",
    skills: [" Empatía", "Trabajo en equipo", "Comunicación efectiva"],
    frontBack: " Front + Back",
    description: "Simulación de comportamientos difíciles dentro de un equipo.",
    objective:
      "Practicar cómo intervenir frente a comportamientos que afectan al grupo.",
    materials:
      "Discord, cronómetro, tarjetas de comportamiento y lista de funcionalidades con costos ficticios: login 3, listado 2, carrito 3, pago simulado 2, favoritos 2; capacidad total 7 puntos.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Avisá a todos que habrá roles de ficción que dificultan una reunión. Pedí voluntarios para representarlos y ofrecé observar como alternativa. Acordá “pausa” para detener la escena. No hay insultos, burlas ni ataques personales. El título describe una dinámica, no una etiqueta para un compañero.",

      "CONSIGNA PARA COMPARTIR · Vamos a practicar cómo intervenir cuando una conducta dificulta el trabajo. Elijan un alcance de siete puntos para una tienda cuya demo permita elegir un producto y simular su compra. Después repetiremos la reunión con acuerdos de comunicación.",

      "RECURSOS DEL DESAFÍO · Rol A, dudas: planteá como máximo dos objeciones sin propuesta, por ejemplo «No sé si va a funcionar». Rol B, apuro: intentá cerrar una vez antes de escuchar a todos. Rol C, facilitación: preguntá qué riesgo concreto preocupa y pedí una alternativa. Rol D, observación: registrá frases y efectos sin intervenir. En la segunda ronda todos colaboran y expresan dudas con una propuesta. Alcance viable para control: listado 2 + carrito 3 + pago simulado 2 = 7.",

      "ROLES Y REGLAS · La simulación dura pocos minutos y cualquiera puede pausarla. Los comportamientos son actuados, no evaluaciones personales. Intervenir significa describir lo que ocurre y pedir un cambio, por ejemplo «Nos falta escuchar dos propuestas; hagamos una ronda antes de cerrar». El observador no juzga quién es “bueno” o “malo”.",

      "Encuadre y consentimiento (6 min) · El TA explica límites, tarea, roles y señal de pausa.",

      "Preparación (4 min) · Lean tarjetas y costos; el observador prepara su registro.",

      "Primera simulación (7 min) · Intenten definir el alcance. El TA detiene si se rompe el encuadre o alguien lo solicita.",

      "Pausa y acuerdos (8 min) · Salgan de los roles; describan conductas y acuerden dos intervenciones que ayuden a coordinar.",

      "Segunda simulación (10 min) · Roten roles si desean y resuelvan con objeciones concretas, turnos y propuestas. Verifiquen el total de puntos.",

      "Debrief y salida de rol (10 min) · Cada participante deja explícitamente el personaje y comparte qué intervención ayudó. Cierren reconociendo el esfuerzo, sin señalar culpables.",

      "ADAPTACIONES · Con dos personas, el TA puede representar una objeción breve o ambos analizan el diálogo escrito sin actuación. Con grupos grandes, salas de cuatro. Si nadie quiere actuar, reescriban las frases de las tarjetas. Para 40 minutos, reduzcan segunda simulación a siete y preparación a dos; mantengan el cierre.",
    ],
    debrief: [
      "¿Qué conducta observable frenó el trabajo?",
      "¿Qué intervención puso un límite sin atacar?",
      "¿Cómo diferenciar una duda útil de una objeción repetida sin fundamento?",
      "¿Qué acuerdo permitió retomar la tarea?",
    ],
    transfer:
      "Los conflictos se abordan sobre conductas y acuerdos, no sobre etiquetas personales. Entregable: alcance de siete puntos y dos frases de intervención. Aplicación: pedir evidencia, abrir turnos y acordar cómo resolver objeciones en una reunión.",
  },
  {
    id: "m4-03",
    module: 4,
    title: " Cambio de perspectiva",
    duration: " 45 min",
    skills: [" Empatía", "Escucha activa"],
    frontBack: " Front + Back",
    description:
      "Los participantes deben defender una situación desde la perspectiva de otra persona.",
    objective:
      "Desarrollar capacidad de comprender necesidades diferentes a las propias.",
    materials:
      "Discord, tarjetas de perspectiva, cronómetro y plantilla: qué necesita | qué teme | qué dato aporta | qué podría negociar.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Repartí los cuatro perfiles y explicá que comprender una necesidad no implica aceptar cualquier pedido. No asignes perfiles según características reales de los participantes.",

      "CONSIGNA PARA COMPARTIR · Una app de turnos está por lanzarse y el equipo tiene un conflicto. Representen las necesidades de su rol, luego cambien de perspectiva y propongan un acuerdo que cuide a las personas afectadas.",

      "RECURSOS DEL DESAFÍO · Producto: prometió una demostración para mañana y necesita comunicar un avance. Desarrollo: necesita dos días para corregir un error de confirmación. QA: observó que en 2 de 10 pruebas el turno no quedó guardado aunque aparecía “confirmado”. Usuario: necesita saber con certeza si tiene turno; una confirmación falsa le hace perder tiempo. Alternativas para conversar: demo con datos de prueba, lanzamiento posterior, alcance limitado u otra propuesta justificada. No se acepta presentar una demo como servicio operativo.",

      "ROLES Y REGLAS · En equipos de cuatro, cada persona habla desde su tarjeta sin exagerar ni caricaturizar. Antes de responder, resume la necesidad ajena y pide confirmación. A mitad de la actividad intercambien roles. El acuerdo debe distinguir demo, lanzamiento real y condiciones para habilitarlo.",

      "Caso y roles (5 min) · El TA entrega perfiles y define el conflicto.",

      "Preparación individual (5 min) · Completen la plantilla desde su rol, marcando qué información falta.",

      "Primera conversación (10 min) · Cada perfil dispone de un turno y recibe preguntas de los demás.",

      "Cambio de perspectiva (10 min) · Intercambien tarjetas; cada persona explica la necesidad del rol que antes le resultaba más difícil comprender.",

      "Acuerdo (10 min) · Redacten una propuesta con comunicación al cliente, alcance y criterio de validación. Revisen qué necesidad atiende cada parte.",

      "Cierre (5 min) · Compartan qué cambió al representar otra perspectiva.",

      "ADAPTACIONES · Con dos personas, cada una representa dos perfiles y luego intercambian ambos. Con grupos grandes, salas de cuatro con una propuesta por sala. Para 40 minutos, reduzcan primera conversación a ocho y acuerdo a siete minutos.",
    ],
    debrief: [
      "¿Qué necesidad confundiste con un capricho?",
      "¿Qué pudiste comprender sin estar de acuerdo?",
      "¿Qué parte del acuerdo protege a usuarios reales?",
      "¿Cómo comprobaste que habías entendido al otro?",
    ],
    transfer:
      "La empatía ayuda a encontrar acuerdos informados por necesidades distintas. Entregable: propuesta que diferencie demostración y uso real, con una verificación antes de lanzar. Aplicación: conversar entre producto, desarrollo y QA sin reducir el conflicto a quién tiene razón.",
  },
  {
    id: "m4-04",
    module: 4,
    title: " Equipo bajo presión",
    duration: " 45 min",
    skills: [" Trabajo en equipo", "Comunicación efectiva", "Participación"],
    frontBack: " Front + Back",
    description:
      "Desafío colaborativo con tiempo limitado para observar cómo cambia la dinámica del equipo bajo presión.",
    objective:
      "Identificar patrones de coordinación, liderazgo, escucha y toma de decisiones.",
    materials:
      "Discord, cronómetro visible y lista de tareas con puntos: registro 3, catálogo 2, carrito 3, pago simulado 2, favoritos 2. Plantilla: prioridad | responsable por rol | dependencia | criterio de terminado.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Prepará equipos de cuatro. Explicá que el tiempo sirve para observar coordinación y no para calificar velocidad. Guardá el cambio de capacidad hasta la segunda planificación.",

      "CONSIGNA PARA COMPARTIR · Son un equipo que debe preparar una demo de compra. Tienen diez puntos de capacidad y deben elegir alcance, responsables y orden. A mitad del trabajo recibirán un cambio: tendrán que comunicar qué conservan y qué postergan.",

      "RECURSOS DEL DESAFÍO · Objetivo obligatorio: una persona puede elegir un producto y simular su compra. Dependencias: carrito necesita catálogo; pago necesita carrito; la demo puede usar un usuario de prueba, sin registro. Capacidad inicial 10 puntos. Imprevisto: la capacidad baja a 7 puntos; el objetivo obligatorio se mantiene. Criterio mínimo: el recorrido catálogo → carrito → pago simulado debe funcionar en una prueba completa.",

      "ROLES Y REGLAS · Roles: facilitador, responsable de alcance, verificador de dependencias y relator. Todos deben opinar antes de cerrar. El TA observa cómo se coordinan y solo interviene ante dudas de consigna o falta de respeto. No se resuelve la reducción prometiendo trabajo fuera de horario.",

      "Lectura y roles (5 min) · El TA presenta tareas, costos y objetivo.",

      "Plan inicial (10 min) · Elijan tareas hasta diez puntos y completen responsables, orden y criterio de terminado.",

      "Cambio (5 min) · El TA anuncia siete puntos. Antes de actuar, cada persona resume qué implica el cambio.",

      "Replanificación (10 min) · Ajusten alcance y redacten un mensaje de tres frases que explique el nuevo compromiso.",

      "Comparación de procesos (10 min) · Presenten planes y revisen turnos, decisiones y tareas descartadas. Para control: catálogo 2 + carrito 3 + pago 2 suma siete y cumple el objetivo.",

      "Cierre (5 min) · Cada equipo elige una conducta de coordinación para mantener.",

      "ADAPTACIONES · Con dos personas, combinen dos roles por integrante. Con cinco, agreguen observador de participación. Con grupos grandes, salas simultáneas. Para 40 minutos, reduzcan plan inicial a ocho y comparación a siete minutos.",
    ],
    debrief: [
      "¿Qué cambió en la conversación cuando bajó la capacidad?",
      "¿Quién dejó de hablar y cómo podrían incluirlo?",
      "¿Qué priorizaron usando el objetivo?",
      "¿Cómo comunicaron lo que ya no podían prometer?",
    ],
    transfer:
      "La presión requiere revisar alcance y comunicar límites. Entregable: plan antes y después del cambio y mensaje de actualización. Aplicación: negociar una entrega viable con dependencias y criterios de aceptación explícitos.",
  },
];
