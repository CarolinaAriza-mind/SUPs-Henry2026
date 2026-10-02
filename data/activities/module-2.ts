import type { Activity } from "@/types/activity";

export const module2Activities: Activity[] = [
  {
    id: "m2-01",
    module: 2,
    title: " Entrená al robot",
    duration: " 45 min",
    skills: [" Comunicación efectiva", "Trabajo en equipo"],
    frontBack: " Front + Back",
    description:
      "Una persona debe dar instrucciones extremadamente precisas para que otra ejecute una tarea.",
    objective:
      "Experimentar cómo la falta de contexto, precisión o validación genera errores.",
    materials:
      "Discord, cronómetro y tablero en papel o chat. Dibujar cuadrícula de cinco filas A–E (arriba a abajo) y cinco columnas 1–5 (izquierda a derecha). Inicio E1 mirando al norte; meta A5; obstáculos C1, C2, C3 y B4.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Prepará el tablero y comprobá una ruta antes de clase: desde E1, AVANZAR 1, GIRAR DERECHA, AVANZAR 4, GIRAR IZQUIERDA, AVANZAR 3 llega a A5 sin obstáculos. Guardá esta solución para la revisión. La ejecución es con una ficha virtual o en papel, sin desplazamientos físicos.",

      "CONSIGNA PARA COMPARTIR · Programemos un robot para que llegue de E1 a A5. Primero le darán instrucciones orales; después escribirán un algoritmo que ejecutará sin ayuda. Observen qué cambia cuando dejamos de adivinar lo que quiso decir otra persona.",

      "RECURSOS DEL DESAFÍO · Tablero: A: libre libre libre libre META; B: libre libre libre OBSTÁCULO libre; C: OBSTÁCULO OBSTÁCULO OBSTÁCULO libre libre; D: libre libre libre libre libre; E: INICIO libre libre libre libre. Comandos: AVANZAR n casillas en la orientación actual; GIRAR DERECHA o GIRAR IZQUIERDA, siempre 90 grados y sin moverse. No hay diagonales. En cada avance se revisan todas las casillas recorridas.",

      "ROLES Y REGLAS · Grupos de cuatro: robot, programador y dos observadores (uno registra posiciones y otro ambigüedades). En la ronda oral, el robot pregunta si falta precisión. En la escrita, una instrucción inválida, un choque o una salida del tablero detiene la ejecución y se registra: no se corrige por intuición. Un error válido se ejecuta aunque aleje de la meta. Cambien robot y programador en la segunda ronda.",

      "Tablero y reglas (5 min) · El TA muestra coordenadas y practica un giro con todo el grupo para acordar la orientación.",

      "Ronda oral (10 min) · El programador da un comando por vez. El robot anuncia posición y orientación; observadores registran preguntas y errores.",

      "Algoritmo escrito (10 min) · Cambien roles. Redacten una lista completa con INICIO y FIN; verifiquen que cada comando tenga la información necesaria.",

      "Ejecución sin ayuda (8 min) · El robot ejecuta la lista literalmente. Observadores registran el primer punto donde resultado y expectativa se separan.",

      "Depuración (7 min) · Corrijan el algoritmo y vuelvan a ejecutarlo desde E1 mirando al norte. Entreguen lista y recorrido final.",

      "Debate y cierre (5 min) · Comparen ambas rondas y respondan las preguntas de reflexión.",

      "ADAPTACIONES · Con dos personas, alternen robot y programador y registren juntos el recorrido. Con tres, un observador cumple ambas funciones. Con grupos grandes, salas de cuatro con el mismo tablero. Para 40 minutos, reduzcan ronda oral a ocho y algoritmo escrito a siete minutos.",
    ],
    debrief: [
      "¿Qué instrucción necesitó una aclaración?",
      "¿En qué paso apareció el primer error y qué efecto tuvo después?",
      "¿Qué supuso el programador que el robot ya sabía?",
      "¿Cómo verificaron que el algoritmo llegaba a A5 sin atravesar obstáculos?",
      "¿Qué relación tiene esto con un ticket o una especificación técnica?",
    ],
    transfer:
      "Una computadora ejecuta instrucciones según reglas definidas, no según nuestra intención. Entregable: algoritmo probado y registro de una corrección. Aplicación: expresar condiciones iniciales, acciones y resultados esperados al comunicar una tarea.",
  },
  {
    id: "m2-02",
    module: 2,
    title: " Feedback en tres capas",
    duration: " 45 min",
    skills: [" Comunicación efectiva", "Feedback", "Empatía"],
    frontBack: " Front + Back",
    description:
      "Práctica guiada para transformar opiniones generales en feedback accionable.",
    objective:
      "Aprender a describir conductas, impacto y próximos pasos sin atacar a la persona.",
    materials:
      "Discord, cronómetro y plantilla: cuando ocurrió… | el efecto fue… | propongo… | ¿cómo lo ves? Casos incluidos en esta ficha.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Explicá que se practica con hechos ficticios, no con reproches a compañeros. Modelá una diferencia entre observación y etiqueta. Formá tríos y publicá los casos.",

      "CONSIGNA PARA COMPARTIR · Transformemos comentarios que cierran una conversación en feedback que ayude a mejorar. Usen una conducta observable, expliquen su impacto y propongan un siguiente paso que puedan conversar.",

      "RECURSOS DEL DESAFÍO · Caso A: en la reunión de ayer alguien interrumpió tres veces y no se terminó de explicar una idea. Etiqueta inicial: «No dejás hablar a nadie». Caso B: un PR llegó sin pasos de prueba y quien revisaba tuvo que pedirlos. Etiqueta: «Sos un desastre». Caso C: se cambió un endpoint sin avisar y la integración falló. Etiqueta: «Nunca pensás en el equipo». Ejemplo A: «Ayer me interrumpiste mientras explicaba tres veces; no pude completar la propuesta. ¿Podemos dejar terminar cada turno?».",

      "ROLES Y REGLAS · Tríos con emisor, receptor y observador; roten en cada caso. El receptor primero resume lo que entendió y luego pregunta o propone. El observador señala palabras concretas, sin evaluar personalidades. No se obliga a estar de acuerdo con todo el feedback.",

      "Modelo (5 min) · El TA contrasta etiqueta y observación usando el ejemplo A.",

      "Reescritura individual (6 min) · Cada persona reescribe una etiqueta con la plantilla y elimina siempre, nunca y juicios personales.",

      "Tres prácticas (15 min) · Cada caso ocupa cinco minutos: feedback, paráfrasis del receptor, conversación y observación. Rota cada rol.",

      "Segunda versión (8 min) · Reescriban los mensajes a partir de lo observado e incluyan un pedido concreto y negociable.",

      "Puesta en común (6 min) · Cada trío lee una versión inicial y la mejorada, explicando qué cambió.",

      "Cierre (5 min) · Cada participante registra una frase que usaría en una revisión de trabajo.",

      "ADAPTACIONES · Con dos personas, alternen emisor y receptor y revisen juntos la plantilla. Con cuatro, agreguen un observador del impacto y otro del pedido. Para 40 minutos, reduzcan segunda versión a cinco y puesta en común a cuatro minutos.",
    ],
    debrief: [
      "¿Qué palabra hacía sonar el comentario como un ataque?",
      "¿El impacto era concreto o una suposición?",
      "¿El pedido permitía responder y acordar?",
      "¿Qué ayudó a escuchar sin ponerse a la defensiva?",
    ],
    transfer:
      "El feedback útil describe evidencia y habilita una mejora acordada. Entregable: tres mensajes reformulados. Aplicación: comentar un PR explicando el problema, su efecto y una alternativa, sin descalificar a quien lo escribió.",
  },
  {
    id: "m2-03",
    module: 2,
    title: " Mensaje perdido",
    duration: " 45 min",
    skills: [" Escucha activa", "Comunicación efectiva"],
    frontBack: " Front + Back",
    description:
      "Una cadena de comunicación permite observar cómo cambia un mensaje cuando circula entre varias personas.",
    objective:
      "Mostrar la importancia del contexto, la precisión y la confirmación.",
    materials:
      "Discord con mensajes privados habilitados o canales separados, cronómetro y dos mensajes fuente guardados por el TA. Chat común para comparar al final.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Armá cadenas de cuatro y verificá que puedan comunicarse sin que el siguiente vea mensajes anteriores. No publiques los textos fuente hasta terminar cada ronda. Si no hay mensajes privados, usá el modo alternativo de la ficha.",

      "CONSIGNA PARA COMPARTIR · Vamos a transmitir un encargo por una cadena. En la primera ronda lo contaremos de memoria. En la segunda podremos confirmar y resumir. Compararemos qué detalles llegaron, cuáles cambiaron y qué ayudó a conservarlos.",

      "RECURSOS DEL DESAFÍO · Mensaje A: «El jueves a las 18 h haremos una demo de 12 minutos para tres personas de soporte. Mostraremos registro y recuperación de contraseña; pagos queda afuera. Ana enviará el enlace a las 17 h. Si falla el entorno, usaremos capturas». Mensaje B: «El martes a las 10 h haremos una prueba de 15 minutos con cuatro usuarios. Revisaremos búsqueda y filtros; exportación queda afuera. Leo enviará el acceso a las 9 h. Si falla internet, usaremos un video».",

      "ROLES Y REGLAS · Orden fijo de cuatro integrantes. Ronda uno: cada receptor lee una vez, deja de mirar el mensaje y lo reescribe de memoria al siguiente, sin copiar ni preguntar. No hace falta borrar mensajes. Ronda dos: con el texto B, puede anotar, resumir y pedir confirmación a quien lo envió. Nadie consulta el original del TA durante la cadena.",

      "Organización (5 min) · El TA explica canales y orden de cada cadena.",

      "Primera transmisión (8 min) · El TA envía A a la primera persona. Cada eslabón dispone de hasta dos minutos. El último publica su versión al finalizar.",

      "Comparación (7 min) · Revelen A y marquen cambios en día, hora, duración, público, alcance, responsable y contingencia.",

      "Segunda transmisión (10 min) · El TA envía B. Repitan con confirmación y notas; cambien quién inicia la cadena.",

      "Análisis (10 min) · Revelen B y comparen el tipo de errores y las estrategias. Los textos son distintos: la comparación orienta una reflexión, no prueba una regla universal.",

      "Cierre (5 min) · Redacten un protocolo de tres acciones para transmitir un pedido.",

      "ADAPTACIONES · Con dos personas, una recibe el texto, lo explica y la otra lo resume; cambien roles con B. Sin privados, hagan una pareja por sala y comparen resumen con original. Con grupos grandes, cadenas simultáneas. Para 40 minutos, reduzcan comparación a cinco y análisis a siete minutos.",
    ],
    debrief: [
      "¿Qué detalle desapareció o se agregó?",
      "¿Qué aclaración evitó un error en la segunda ronda?",
      "¿Qué cambió al confirmar con nuestras propias palabras?",
      "¿Cuándo conviene dejar una fuente escrita común?",
    ],
    transfer:
      "Los acuerdos se conservan mejor cuando pueden consultarse y confirmarse. Entregable: comparación de mensajes y protocolo de transmisión. Aplicación: documentar alcance, responsable, fecha y alternativa antes de delegar una tarea.",
  },
  {
    id: "m2-04",
    module: 2,
    title: " Reunión imposible",
    duration: " 45 min",
    skills: [" Comunicación efectiva", "Trabajo en equipo", "Participación"],
    frontBack: " Front + Back",
    description:
      "Simulación de una reunión con objetivos, roles y restricciones diferentes.",
    objective:
      "Practicar coordinación, escucha, síntesis y toma de decisiones.",
    materials:
      "Discord, cuatro tarjetas de rol enviadas por privado, cronómetro y acta: decisión | qué queda fuera | motivo | responsable | próximo control.",
    steps: [
      "GUÍA DEL TA · Antes de clase: Formá equipos de cuatro. Entregá una tarjeta a cada rol y publicá el objetivo común. Reservá el dato nuevo hasta la segunda reunión.",

      "CONSIGNA PARA COMPARTIR · Tienen que acordar qué mostrar en una demo dentro de dos días, con ocho horas de trabajo disponibles. Cada integrante conoce una parte del problema. Su tarea es compartirla y cerrar un plan que el equipo pueda ejecutar.",

      "RECURSOS DEL DESAFÍO · Tarjeta Producto: el cliente necesita ver una compra; el diseño visual puede esperar. Desarrollo: corregir carrito cuesta 4 h y la mejora visual 3 h. QA: probar la compra cuesta 2 h y debe hacerse después de corregir el carrito. Soporte: necesita una guía de 2 h para acompañar al cliente. Información nueva: el cliente acepta recibir la guía al día siguiente de la demo. Las horas son presupuesto de esfuerzo, no un cronograma por persona.",

      "ROLES Y REGLAS · Cada rol explica sus datos sin mostrar su tarjeta durante la primera ronda. Nadie inventa presupuesto extra. Designen moderador y relator además de su rol; roten en la segunda reunión. Antes de decidir, todos deben haber aportado su información. Una decisión incluye qué se posterga.",

      "Contexto y lectura (5 min) · El TA presenta el objetivo y entrega tarjetas.",

      "Primera reunión (10 min) · El equipo intenta decidir y deja una primera acta. El TA observa interrupciones, preguntas y datos omitidos.",

      "Pausa de proceso (5 min) · Sin resolver el caso, identifiquen qué faltó compartir y acuerden turnos.",

      "Segunda reunión (12 min) · El TA revela el dato nuevo. Roten moderación y revisen el plan con todas las restricciones.",

      "Presentación (8 min) · Cada equipo comparte la decisión y verifica que el esfuerzo no supere ocho horas; discutan el margen que queda.",

      "Cierre (5 min) · Comparen calidad de decisión y participación entre ambas reuniones.",

      "ADAPTACIONES · Con dos personas, una recibe Producto y Soporte y la otra Desarrollo y QA. Con más de cuatro por equipo, sumen observadores de turnos y acuerdos. Para 40 minutos, reduzcan primera reunión a ocho y presentación a cinco minutos.",
    ],
    debrief: [
      "¿Qué información apareció tarde?",
      "¿Cómo se incluyeron las voces menos presentes?",
      "¿Qué decidieron postergar y por qué?",
      "¿El acta permitiría que alguien ausente comprenda el acuerdo?",
    ],
    transfer:
      "Una reunión útil convierte información dispersa en acuerdos verificables. Una opción viable es carrito (4 h) y pruebas (2 h), dejando la guía para después y dos horas de margen; no es la única propuesta defendible. Entregable: acta con alcance, responsable por rol y próximo control.",
  },
];
