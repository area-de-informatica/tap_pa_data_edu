export default defineEventHandler(() => {
  const contenido = [
    {
      id: 1,
      title: "¿Qué es una base de datos?",
      description: "Una <strong>base de datos</strong> es un sistema organizado que permite almacenar, gestionar y recuperar datos de manera eficiente. En el contexto educativo, las bases de datos son herramientas esenciales para gestionar información de estudiantes, docentes y procesos académicos.",
      usageContext: "Se utilizan en múltiples áreas, como educación (gestión de notas y asistencia), salud (registros médicos), comercio (inventarios) y redes sociales (perfiles de usuarios). Por ejemplo, en una escuela, una base de datos puede almacenar información de estudiantes para generar reportes automáticos.",
      usos: [
        "Registro centralizado de estudiantes, notas y asistencias.",
        "Búsqueda rápida de información para docentes y administradores.",
        "Generación de estadísticas para evaluar el rendimiento académico.",
        "Protección y respaldo de datos importantes mediante copias de seguridad.",
      ],
      exampleIntro: "Ejemplo de uso en una escuela:",
      estudiantes: [
        { id: 1, nombre: "Laura Pérez", grado: "4°", nota: 4.5 },
        { id: 2, nombre: "Carlos Ruiz", grado: "4°", nota: 3.8 },
        { id: 3, nombre: "Ana Gómez", grado: "5°", nota: 4.2 },
      ],
    },
    {
      id: 2,
      title: "Tipos de bases de datos",
      description: "Las bases de datos se dividen en dos grandes categorías según su estructura y propósito:",
      tipos: [
        { nombre: "Relacionales", detalle: "Organizan los datos en tablas con filas y columnas, usando claves para relacionar información entre tablas.", ejemplo: "MySQL, PostgreSQL" },
        { nombre: "No Relacionales (NoSQL)", detalle: "Utilizan estructuras más flexibles como documentos, grafos o clave-valor, ideales para datos no estructurados o semiestructurados.", ejemplo: "MongoDB, Neo4j" },
      ],
      comparison: "Las bases de datos relacionales son ideales para sistemas estructurados con relaciones claras, como en la gestión escolar. Las NoSQL son mejores para manejar grandes volúmenes de datos no estructurados, como en aplicaciones web modernas o análisis de big data.",
      casosIntro: "Casos de uso en educación:",
      casos: [
        { titulo: "Relacionales", descripcion: "Almacenar datos de estudiantes y asignaturas en tablas relacionadas para generar reportes académicos." },
        { titulo: "NoSQL", descripcion: "Gestionar datos de aprendizaje en plataformas e-learning con formatos flexibles como JSON." },
      ],
    },
    {
      id: 3,
      title: "Componentes básicos de una base de datos",
      description: "Una base de datos está formada por varios elementos clave que permiten su funcionamiento:",
      componentes: [
        { nombre: "Tabla", descripcion: "Estructura básica que organiza datos en filas y columnas, como una hoja de cálculo." },
        { nombre: "Campo", descripcion: "Una columna que representa un atributo específico, como el nombre o la nota de un estudiante." },
        { nombre: "Registro", descripcion: "Una fila que contiene todos los datos de una entidad, como los datos completos de un estudiante." },
        { nombre: "Clave primaria", descripcion: "Un campo único que identifica cada registro, como el ID de un estudiante." },
        { nombre: "Índice", descripcion: "Estructura que mejora la velocidad de búsqueda en la base de datos." },
      ],
      consejos: [
        "Define bien los campos y tipos de datos al crear una tabla para evitar problemas futuros.",
        "Usa claves primarias para garantizar que cada registro sea único.",
        "Crea índices para campos que se busquen con frecuencia, como nombres o fechas.",
      ],
    },
    {
      id: 4,
      title: "Introducción al lenguaje SQL",
      description: "SQL (Structured Query Language) es el lenguaje estándar para interactuar con bases de datos relacionales. Permite realizar operaciones como consultas, inserciones, actualizaciones y eliminaciones de datos.",
      comandos: [
        { nombre: "SELECT", funcion: "Recupera datos de una tabla. Ejemplo: SELECT nombre, nota FROM estudiantes WHERE grado = '4°';" },
        { nombre: "INSERT", funcion: "Añade nuevos registros. Ejemplo: INSERT INTO estudiantes (nombre, grado, nota) VALUES ('Ana', '5°', 4.2);" },
        { nombre: "UPDATE", funcion: "Modifica datos existentes. Ejemplo: UPDATE estudiantes SET nota = 4.0 WHERE id = 1;" },
        { nombre: "DELETE", funcion: "Elimina registros. Ejemplo: DELETE FROM estudiantes WHERE id = 2;" },
      ],
      additionalInfo: "SQL es ampliamente usado en sistemas educativos para generar reportes, como promedios de notas por grado, o para actualizar información de estudiantes en tiempo real.",
      consejos: [
        "Siempre usa condiciones específicas en DELETE y UPDATE para evitar afectar datos no deseados.",
        "Prueba tus consultas SELECT en un entorno de prueba antes de aplicarlas a datos reales.",
      ],
    },
    {
      id: 5,
      title: "¿Qué es JSON?",
      description: "JSON (JavaScript Object Notation) es un formato ligero para almacenar e intercambiar datos. Es muy usado en bases de datos NoSQL y en APIs para transferir información entre aplicaciones.",
      exampleIntro: "Ejemplo de un registro de estudiante en JSON:",
      jsonExample: `{
  "id": 1,
  "nombre": "Laura Pérez",
  "grado": "4°",
  "nota": 4.5,
  "materias": ["Matemáticas", "Ciencias", "Historia"]
}`,
      additionalInfo: "En educación, JSON es útil para almacenar datos flexibles, como listas de materias o actividades extracurriculares de los estudiantes, que pueden variar en estructura.",
      casosIntro: "Casos de uso en educación:",
      casos: [
        { titulo: "Plataformas e-learning", descripcion: "Almacenar datos de progreso de estudiantes en formato JSON para mostrar avances en tiempo real." },
        { titulo: "Intercambio de datos", descripcion: "Enviar información de estudiantes entre sistemas escolares usando APIs." },
      ],
    },
    {
      id: 6,
      title: "Importancia de las bases de datos en la educación",
      description: "Las bases de datos son fundamentales en la educación moderna. Permiten a las instituciones organizar grandes volúmenes de información, automatizar procesos y tomar decisiones basadas en datos.",
      additionalInfo: "Por ejemplo, una base de datos puede ayudar a identificar patrones de rendimiento estudiantil, personalizar planes de aprendizaje y mejorar la comunicación entre docentes, estudiantes y padres.",
      casosIntro: "Beneficios específicos:",
      casos: [
        { titulo: "Gestión académica", descripcion: "Automatizar la generación de reportes de notas y asistencia." },
        { titulo: "Análisis de datos", descripcion: "Detectar estudiantes en riesgo de deserción mediante análisis predictivo." },
        { titulo: "Personalización", descripcion: "Crear planes de aprendizaje adaptados a las necesidades de cada estudiante." },
      ],
      consejos: [
        "Mantén los datos actualizados para garantizar la precisión de los reportes.",
        "Capacita a los docentes en el uso de herramientas de bases de datos para maximizar su utilidad.",
      ],
    },
    {
      id: 7,
      title: "Modelos comunes de bases de datos",
      description: "Existen varios modelos para estructurar bases de datos, cada uno con ventajas específicas:",
      modelos: [
        { nombre: "Relacional", descripcion: "Usa tablas relacionadas mediante claves. Ideal para datos estructurados, como registros escolares." },
        { nombre: "Documental", descripcion: "Almacena datos en documentos JSON o XML. Perfecto para datos semiestructurados, como actividades de estudiantes." },
        { nombre: "Grafos", descripcion: "Se enfoca en relaciones entre datos. Útil para analizar conexiones, como interacciones en plataformas educativas." },
        { nombre: "Clave-Valor", descripcion: "Almacena datos como pares clave-valor. Ideal para sistemas simples, como cachés de aplicaciones." },
      ],
      consejos: [
        "Elige el modelo adecuado según la estructura y necesidades de tus datos.",
        "Combina modelos si es necesario, como usar una base relacional para registros y una NoSQL para análisis.",
      ],
    },
    {
      id: 8,
      title: "Principios de integridad y seguridad",
      description: "La gestión de bases de datos requiere garantizar la calidad y protección de los datos:",
      integrity: "La <strong>integridad</strong> asegura que los datos sean precisos y consistentes. Por ejemplo, restricciones como claves primarias evitan duplicados, y reglas de validación aseguran que las notas estén entre 0 y 5.",
      security: "La <strong>seguridad</strong> protege los datos contra accesos no autorizados. En educación, es crucial para cumplir con normativas de privacidad, como la protección de datos personales de los estudiantes.",
      additionalInfo: "Implementar copias de seguridad regulares y encriptación de datos sensibles es una buena práctica para proteger la información escolar.",
      consejos: [
        "Usa contraseñas seguras y roles de usuario para controlar el acceso a la base de datos.",
        "Realiza auditorías periódicas para detectar vulnerabilidades.",
      ],
    },
    {
      id: 9,
      title: "Herramientas populares en educación",
      description: "Existen varias herramientas que las instituciones educativas pueden usar para gestionar bases de datos:",
      herramientas: [
        "MySQL: Base de datos relacional gratuita y de código abierto, ideal para escuelas con presupuestos limitados.",
        "PostgreSQL: Sistema avanzado con soporte para datos complejos, usado en universidades para análisis de datos.",
        "MongoDB: Base de datos documental muy usada en aplicaciones web y plataformas e-learning.",
        "SQLite: Ligera y fácil de usar, perfecta para proyectos pequeños o aplicaciones móviles educativas.",
        "Microsoft SQL Server: Solución robusta para instituciones que necesitan soporte empresarial.",
      ],
      consejos: [
        "Elige una herramienta que se adapte al tamaño y necesidades de tu institución.",
        "Asegúrate de que el personal esté capacitado para usar la herramienta seleccionada.",
      ],
    },
    {
      id: 10,
      title: "Ventajas de usar bases de datos",
      description: "Las bases de datos ofrecen múltiples beneficios que las hacen indispensables en la educación moderna:",
      ventajas: [
        "Acceso rápido y eficiente a grandes volúmenes de datos, como registros de miles de estudiantes.",
        "Escalabilidad para manejar el crecimiento de información a medida que la institución crece.",
        "Facilidad para generar reportes y análisis, como estadísticas de rendimiento por grado.",
        "Soporte para múltiples usuarios con control de acceso, permitiendo que docentes y administradores trabajen simultáneamente.",
        "Automatización de procesos repetitivos, como la generación de boletas de notas.",
      ],
      additionalInfo: "En un estudio de 2023, se encontró que el 78% de las escuelas que implementaron bases de datos mejoraron su eficiencia administrativa en un 30% (fuente: EdTech Review).",
    },
    {
      id: 11,
      title: "Desafíos al implementar bases de datos",
      description: "Aunque las bases de datos ofrecen muchas ventajas, también presentan desafíos que las instituciones educativas deben considerar:",
      desafios: [
        "Costo inicial: Implementar una base de datos puede requerir inversión en hardware, software y capacitación.",
        "Capacitación: El personal debe estar capacitado para usar las herramientas de manera efectiva.",
        "Mantenimiento: Las bases de datos requieren actualizaciones y mantenimiento regular para garantizar su rendimiento.",
        "Privacidad: Cumplir con normativas de protección de datos, como el GDPR, puede ser complejo.",
      ],
      consejos: [
        "Comienza con una solución sencilla, como SQLite, y escala según las necesidades.",
        "Invierte en capacitación para garantizar que el personal aproveche al máximo la base de datos.",
        "Establece políticas claras de privacidad y seguridad desde el inicio.",
      ],
    },
    {
      id: 12,
      title: "Tendencias actuales en bases de datos",
      description: "El mundo de las bases de datos evoluciona constantemente. Algunas tendencias actuales incluyen:",
      tendencias: [
        "Bases de datos en la nube: Soluciones como Google Cloud SQL o Amazon RDS permiten acceder a bases de datos sin necesidad de infraestructura local.",
        "Inteligencia artificial: Uso de IA para optimizar consultas y predecir patrones, como identificar estudiantes en riesgo.",
        "Bases de datos distribuidas: Ideales para manejar datos en múltiples ubicaciones, como redes de escuelas.",
        "Integración con Big Data: Análisis de grandes volúmenes de datos para mejorar la toma de decisiones educativas.",
      ],
      additionalInfo: "Estas tendencias están transformando la educación, permitiendo a las instituciones adaptarse a las necesidades del siglo XXI.",
    },
  ]

  return contenido
})