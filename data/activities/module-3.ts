import type { Activity } from "@/types/activity";

export const module3Activities: Activity[] = [
  {
    id: "m3-01",
    module: 3,
    title: " Debugging humano",
    duration: " 45 min",
    skills: [" Escucha activa", "Pensamiento crítico", "Empatía"],
    frontBack: " Front + Back",
    description:
      "Una persona relata un problema y la otra debe investigar antes de proponer soluciones.",
    objective:
      "Practicar escucha, formulación de preguntas y búsqueda de evidencia.",
    materials:
      "Discord, cronómetro, tarjetas de caso y registro: síntoma | pregunta | dato obtenido | hipótesis | prueba pendiente.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Formá tríos. Entregá los detalles del caso solo a quien relata. Explicá que no se necesita saber programar: se evalúa cómo investigan y escuchan.",

      "CONSIGNA PARA COMPARTIR · Una persona trae un problema ficticio. Antes de recomendar una solución, investiguen con preguntas y resuman lo entendido. Distingan lo que ya saben de lo que todavía necesitan comprobar.",

      "RECURSOS DEL DESAFÍO · Caso A, síntoma público: «No pude entregar la tarea». Datos privados del relator: la terminó; intentó subirla desde el teléfono; apareció “formato no admitido”; tenía una foto y se pedía PDF; no probó desde una computadora. Caso B, síntoma: «No puedo entrar a la reunión». Datos privados: el enlace es de la semana anterior; la conexión funciona en otras páginas; figura “sala no disponible”; hay una invitación nueva sin abrir. Si preguntan algo que la tarjeta no dice, respondé “no lo sé”.",

      "ROLES Y REGLAS · Tríos: relator, investigador y observador. Durante los primeros tres minutos de cada entrevista no se ofrecen soluciones. El relator responde lo preguntado sin inventar datos. El investigador resume y pide confirmación antes de formular una hipótesis. Todos rotan; para la tercera ronda usen A con el cambio de que el archivo ya es PDF pero supera el límite de tamaño indicado en la plataforma.",

      "Encuadre (5 min) · El TA diferencia síntoma, dato e hipótesis con un ejemplo cotidiano.",

      "Hipótesis inicial (4 min) · Cada persona anota qué pensaría al oír los síntomas, sin sharing todavía una solución.",

      "Entrevistas (18 min) · Tres rondas de seis minutos: tres para preguntar, uno para resumir, uno para proponer una verificación y uno para feedback del observador.",

      "Comparación (8 min) · Revisen qué hipótesis inicial cambiaron y qué pregunta produjo el dato más útil.",

      "Puesta en común (5 min) · Cada trío comparte una prueba propuesta y qué resultado la confirmaría o debilitaría.",

      "Cierre (5 min) · Completen el registro y elijan una pregunta para usar antes de aconsejar.",

      "ADAPTACIONES · Con dos personas, alternen relator e investigador y revisen juntos el registro; hagan una tercera ronda cambiando el caso. Con cuatro, sumen observador de supuestos. Para 40 minutos, reduzcan comparación a cinco y puesta en común a tres minutos.",
    ],
    debrief: [
      "¿Cuándo sentiste ganas de resolver antes de comprender?",
      "¿Qué pregunta cambió tu hipótesis?",
      "¿Qué dato seguía faltando?",
      "¿Tu propuesta era una solución comprobada o una prueba por hacer?",
    ],
    transfer:
      "Investigar requiere escuchar y verificar antes de actuar. Entregable: registro con datos, hipótesis y prueba pendiente. Aplicación: al reportar un bug, preguntar qué se esperaba, qué ocurrió, en qué contexto y cómo reproducirlo.",
  },
  {
    id: "m3-02",
    module: 3,
    title: " Debate ético",
    duration: " 45 min",
    skills: [" Pensamiento crítico", " Comunicación efectiva", " Empatía"],
    frontBack: " Front + Back",
    description:
      "El grupo debate una situación tecnológica donde no existe una única respuesta correcta.",
    objective:
      "Practicar argumentación, desacuerdo respetuoso y análisis de consecuencias.",
    materials:
      "Discord, cronómetro y tabla: decisión | argumento | persona afectada | riesgo | condición para revisar. Caso y dato nuevo incluidos.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Presentá el caso como ficción. Aclará que se discuten decisiones y consecuencias, no el valor de las personas. Guardá el dato nuevo hasta la cuarta etapa.",

      "CONSIGNA PARA COMPARTIR · Una plataforma educativa quiere usar IA para recomendar qué estudiantes necesitan apoyo. ¿La pondrían en uso, harían un piloto o esperarían? Construyan una postura, escuchen objeciones y revisen su decisión cuando reciban información nueva.",

      "RECURSOS DEL DESAFÍO · Caso: la herramienta usa asistencia y entregas para asignar una alerta. El equipo solo puede contactar a diez estudiantes por semana; todavía no probó si la alerta ayuda. Opciones iniciales: usarla, hacer un piloto con revisión humana o no usarla aún; se admiten alternativas justificadas. Dato nuevo: quienes comparten computadora entregan tarde con más frecuencia, y la herramienta les asigna más alertas aunque aprueben sus tareas.",

      "ROLES Y REGLAS · Equipos de cuatro con moderador, relator y dos participantes que revisan consecuencias. Cada intervención debe incluir una razón y reconocer una incertidumbre. Antes de objetar, resuman el argumento anterior. No se exige consenso ni revelar experiencias personales.",

      "Lectura del dilema (5 min) · El TA explica alcance y opciones sin indicar una respuesta correcta.",

      "Postura individual (5 min) · Cada persona elige una opción y anota una razón y una pregunta.",

      "Debate en equipos (12 min) · Escuchen todas las posiciones y completen la tabla con consecuencias para estudiantes y tutores.",

      "Dato nuevo (8 min) · El TA revela el dato. Identifiquen qué cambia, qué no y qué habría que investigar.",

      "Recomendación (10 min) · Redacten una propuesta con salvaguardas concretas, revisión y criterio para detener o continuar. Registren desacuerdos razonados.",

      "Cierre (5 min) · Compartan si cambiaron de postura y qué argumento lo motivó.",

      "ADAPTACIONES · Con dos personas, presenten posturas distintas y luego reconstruyan el argumento ajeno antes de proponer una opción común. Con grupos grandes, cada sala entrega una recomendación escrita. Para 40 minutos, reduzcan debate a diez y recomendación a siete minutos.",
    ],
    debrief: [
      "¿Qué argumento consideró a quienes podrían verse perjudicados?",
      "¿Qué afirmación necesitaba evidencia?",
      "¿Qué dato te haría cambiar de posición?",
      "¿Pudiste explicar la postura de alguien con quien no coincidías?",
    ],
    transfer:
      "Las decisiones tecnológicas tienen consecuencias que deben discutirse y comprobarse. Entregable: recomendación con incertidumbres, medidas de cuidado y criterio de revisión. Aplicación: evaluar una funcionalidad considerando efectos además de su factibilidad técnica.",
  },
  {
    id: "m3-03",
    module: 3,
    title: " Decidí con información incompleta",
    duration: " 45 min",
    skills: [" Pensamiento crítico", " Trabajo en equipo"],
    frontBack: " Front + Back",
    description:
      "Los equipos deben tomar una decisión utilizando información parcial y cambiante.",
    objective:
      "Practicar decisiones bajo incertidumbre y distinguir datos de supuestos.",
    materials:
      "Discord, cuatro tarjetas privadas por equipo, cronómetro y tabla: dato confirmado | supuesto | decisión | riesgo | qué la haría cambiar.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Prepará equipos de cuatro y repartí una tarjeta a cada uno. Aclará que los valores son ficticios y todas las tareas consumen el mismo presupuesto de esfuerzo.",

      "CONSIGNA PARA COMPARTIR · Tienen diez horas de esfuerzo para mejorar una app antes de una entrega. Elijan qué hacer con la información disponible, expliciten lo que están suponiendo y revisen el plan ante un cambio.",

      "RECURSOS DEL DESAFÍO · Tarjeta Usuarios: seis de diez consultas recientes dicen que cuesta encontrar productos; la muestra es pequeña. Tarjeta Desarrollo: buscador 5 h, filtros 4 h, modo oscuro 3 h. Tarjeta QA: probar cualquier paquete elegido requiere 2 h adicionales. Tarjeta Producto: la demo debe mostrar al menos una mejora para encontrar productos; modo oscuro es opcional. Dato nuevo: implementar filtros requiere además una migración de 3 h que no estaba estimada. No sumen costos compartidos de pruebas más de una vez.",

      "ROLES Y REGLAS · Primero lean su tarjeta en silencio; luego compartan los datos oralmente. Facilitador y relator deben preguntar a todos antes de cerrar. No se puede exceder diez horas ni presentar un supuesto como certeza. Se acepta dejar margen y postergar opciones.",

      "Contexto (5 min) · El TA presenta presupuesto, objetivo y forma de entrega.",

      "Lectura individual (5 min) · Cada persona anota su dato y una pregunta, sin ver tarjetas ajenas.",

      "Decisión inicial (10 min) · Reúnan la información y elijan un paquete, calculando esfuerzo y declarando supuestos.",

      "Cambio de contexto (8 min) · Reciban el costo nuevo de filtros; recalculen y revisen el plan.",

      "Defensa de la decisión (12 min) · Cada equipo presenta su tabla y una alternativa descartada. Otro equipo pregunta por un riesgo o supuesto.",

      "Cierre (5 min) · Señalen qué evidencia cambió la decisión y qué verificarían antes de comenzar.",

      "ADAPTACIONES · Con dos personas, repartí dos tarjetas a cada una. Con cinco o seis, sumá observadores de supuestos y tiempos. Para 40 minutos, reduzcan lectura a tres y defensa a nueve minutos.",
    ],
    debrief: [
      "¿Qué dato faltaba cuando eligieron por primera vez?",
      "¿Qué supuesto resultó más costoso?",
      "¿Cambiar de decisión fue una reacción o una revisión argumentada?",
      "¿Qué información pedirían antes de comprometer una fecha?",
    ],
    transfer:
      "Decidir bajo incertidumbre exige registrar supuestos y revisar evidencia. Tras el cambio, buscador y pruebas cuestan 7 h; filtros, migración y pruebas cuestan 9 h. Ambas opciones cumplen el objetivo, con riesgos distintos. Entregable: dos versiones de la decisión con su cálculo.",
  },
  {
    id: "m3-04",
    module: 3,
    title: " La evidencia manda",
    duration: " 45 min",
    skills: [" Pensamiento crítico", " Escucha activa"],
    frontBack: " Front + Back",
    description:
      "Los participantes reciben diferentes afirmaciones y deben separar hechos, interpretaciones e hipótesis.",
    objective:
      "Entrenar pensamiento crítico y evitar conclusiones sin evidencia.",
    materials:
      "Discord, cronómetro y tabla: afirmación | categoría | evidencia disponible | verificación necesaria. Categorías escritas: hecho, interpretación e hipótesis comprobable.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Publicá el caso con datos tal como aparecen. Explicá que una interpretación atribuye significado y una hipótesis propone una explicación comprobable; puede haber matices que el grupo debe justificar.",

      "CONSIGNA PARA COMPARTIR · Clasifiquen afirmaciones sobre una falla sin confundir registros con explicaciones. Su objetivo es escribir una conclusión prudente y proponer qué investigar después.",

      "RECURSOS DEL DESAFÍO · Caso: el lunes hubo 20 reportes de error y el martes 40. El martes se publicó una versión a las 9 h. No sabemos cuántos usuarios hubo ni cuándo empezó cada error. Afirmaciones: A «El número de reportes se duplicó»; B «La nueva versión causó el aumento»; C «El equipo trabajó mal»; D «Los usuarios ya no confían en la app»; E «Tal vez hubo más usuarios el martes»; F «Hubo una publicación el martes a las 9 h». Dato nuevo: usuarios activos, lunes 100 y martes 400. Un reporte no equivale necesariamente a un usuario afectado.",

      "ROLES Y REGLAS · Trabajen en equipos de cuatro con lector, relator, verificador y moderador; roten al revelar el dato nuevo. Para clasificar, citen la frase o registro que respalda la respuesta. Admitan desacuerdos si explican el criterio. No atribuyan culpas.",

      "Marco y caso (5 min) · El TA define categorías y lee los datos.",

      "Clasificación individual (6 min) · Cada persona clasifica A–F y marca aquello que no puede afirmar.",

      "Contraste (12 min) · Comparen criterios y escriban qué dato permitiría investigar B, D y E.",

      "Dato nuevo (7 min) · Calculen reportes por usuario: 20/100 y 40/400. Señalen que esto no mide por sí solo tasa de usuarios afectados ni causalidad.",

      "Conclusión (10 min) · Redacten tres frases: qué sabemos, qué no sabemos y próxima verificación. El PA orienta: A y F describen hechos del caso; B y E son explicaciones por contrastar; C es un juicio; D requiere definir y medir confianza.",

      "Cierre (5 min) · Compartan una frase que ahora formularían con más cautela.",

      "ADAPTACIONES · Con dos personas, clasifiquen por separado y discutan solo diferencias. Con grupos grandes, cada sala defiende una afirmación. Para 40 minutos, reduzcan contraste a diez y conclusión a siete minutos.",
    ],
    debrief: [
      "¿Qué afirmación confundía correlación y causa?",
      "¿Por qué el número absoluto no alcanzaba?",
      "¿Qué dato ayudaría a investigar la publicación?",
      "¿Cómo expresar incertidumbre sin dejar de proponer una acción?",
    ],
    transfer:
      "Los registros permiten describir, pero no siempre explicar. Entregable: tabla y conclusión que no atribuya causalidad sin evidencia. Aplicación: revisar cronología, errores específicos y población afectada antes de adjudicar un incidente a un cambio.",
  },
];
