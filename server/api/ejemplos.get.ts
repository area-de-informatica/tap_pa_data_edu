// server/api/ejemplos.get.ts
// Este archivo crea una ruta API en Nuxt que responde a solicitudes GET a /api/ejemplos

export default defineEventHandler(() => {
  return [
    {
      id: 'busqueda-academica',
      titulo: 'Búsqueda en Bases de Datos Académicas',
      descripcion: 'Aprende a formular búsquedas efectivas para encontrar artículos relevantes y optimizar tu tiempo de investigación.',
      imagen: '/images/ejemplo-busqueda.webp',
      categoria: 'basico',
      duracion: '15 min',
      completado: false,
      pasos: [
        'Identificar palabras clave de tu tema de investigación.',
        'Usar operadores booleanos (AND, OR, NOT) para refinar la búsqueda.',
        'Aplicar filtros por fecha, tipo de documento o autor.',
        'Evaluar la relevancia de los resultados obtenidos.',
        'Guardar y citar correctamente las fuentes encontradas.'
      ],
      contenidoDetallado: `
        <h3>Optimiza tu Estrategia de Búsqueda</h3>
        <p>Una búsqueda efectiva es el pilar de cualquier investigación académica. No se trata solo de encontrar información, sino de encontrar la <strong>información correcta</strong>.</p>
        <h4>Consejos Avanzados:</h4>
        <ul>
          <li><strong>Truncamiento (*):</strong> Usa el asterisco para buscar variantes de una palabra (ej. <code>educa*</code> encontrará educación, educador, educativo).</li>
          <li><strong>Comillas (" "):</strong> Para frases exactas y evitar resultados irrelevantes (ej. <code>"inteligencia artificial"</code>).</li>
          <li><strong>Campos Específicos:</strong> Muchas bases de datos permiten buscar solo en el título, resumen o palabras clave para mayor precisión.</li>
          <li><strong>Alertas de Búsqueda:</strong> Configura alertas para recibir notificaciones cuando se publiquen nuevos artículos sobre tus temas de interés.</li>
        </ul>
        <p>Recuerda que la calidad de tus resultados depende directamente de la calidad de tus preguntas y tu método de búsqueda.</p>
        <p><strong>Recurso Recomendado:</strong> <a href="https://guides.library.oregonstate.edu/c.php?g=284587&p=1896792" target="_blank">Guía de la Biblioteca de Oregon State University sobre Búsqueda</a></p>
      `,
      url: 'https://ejemplo.com/recurso-busqueda'
    },
    {
      id: 'citas-referencias',
      titulo: 'Gestión de Citas y Referencias',
      descripcion: 'Aprende a usar herramientas para organizar tus citas y generar referencias bibliográficas automáticamente.',
      imagen: '/images/ejemplo-citas.webp',
      categoria: 'intermedio',
      duracion: '20 min',
      completado: false,
      pasos: [
        'Elegir un gestor bibliográfico (Mendeley, Zotero, EndNote).',
        'Importar referencias de bases de datos.',
        'Organizar tu biblioteca de referencias.',
        'Citar en el texto y generar bibliografías.',
        'Sincronizar tu biblioteca en la nube.'
      ],
      contenidoDetallado: `
        <h3>Automatiza tu Proceso de Referencias</h3>
        <p>La gestión de citas y referencias puede ser tediosa si se hace manualmente. Los gestores bibliográficos son herramientas esenciales que te ahorran tiempo y minimizan errores.</p>
        <h4>Beneficios Clave:</h4>
        <ul>
          <li><strong>Organización:</strong> Mantén todas tus fuentes en un solo lugar.</li>
          <li><strong>Precisión:</strong> Genera citas y bibliografías en el estilo deseado (APA, MLA, Chicago) con un clic.</li>
          <li><strong>Colaboración:</strong> Comparte tu biblioteca con equipos de investigación.</li>
          <li><strong>Detección de Duplicados:</strong> Evita tener la misma referencia múltiples veces.</li>
        </ul>
        <p>Dedica un tiempo a aprender las funciones básicas de tu gestor elegido; la inversión inicial vale la pena a largo plazo.</p>
        <p><strong>Software Recomendado:</strong> <a href="https://www.mendeley.com/" target="_blank">Mendeley</a> (gratis), <a href="https://www.zotero.org/" target="_blank">Zotero</a> (gratis)</p>
      `,
      url: 'https://ejemplo.com/recurso-citas'
    },
    {
      id: 'evaluacion-fuentes',
      titulo: 'Evaluación Crítica de Fuentes',
      descripcion: 'Desarrolla habilidades para determinar la credibilidad y relevancia de la información encontrada.',
      imagen: '/images/ejemplo-evaluacion.webp',
      categoria: 'avanzado',
      duracion: '10 min',
      completado: false,
      pasos: [
        'Identificar la autoridad del autor y la publicación.',
        'Evaluar la objetividad y el sesgo potencial.',
        'Determinar la actualidad y relevancia de la información.',
        'Analizar la metodología y evidencia presentada.',
        'Comparar con otras fuentes para validar la información.'
      ],
      contenidoDetallado: `
        <h3>Conviértete en un Lector Crítico</h3>
        <p>En la era de la sobrecarga de información, saber evaluar críticamente las fuentes es más importante que nunca. No toda la información en línea es confiable o relevante para tu investigación.</p>
        <h4>Criterios para Evaluar:</h4>
        <ul>
          <li><strong>Autoridad:</strong> ¿Quién es el autor? ¿Cuál es su experiencia en el tema? ¿Está afiliado a una institución reconocida?</li>
          <li><strong>Propósito:</strong> ¿Cuál es el objetivo de la información (informar, persuadir, vender)? ¿Existe algún sesgo evidente?</li>
          <li><strong>Actualidad:</strong> ¿Cuándo se publicó? ¿Es la información suficientemente reciente para tu tema?</li>
          <li><strong>Precisión:</strong> ¿La información es verificable? ¿Contiene errores evidentes? ¿Hay referencias a fuentes originales?</li>
          <li><strong>Relevancia:</strong> ¿La información responde a tu pregunta de investigación? ¿Es adecuada para tu nivel de estudio?</li>
        </ul>
        <p>Aplicar estos criterios te ayudará a discernir entre fuentes valiosas y aquellas que podrían comprometer la calidad de tu trabajo.</p>
        <p><strong>Recurso Útil:</strong> <a href="https://www.scribbr.es/normas-apa/citas-apa/" target="_blank">Ejemplos de cómo citar diferentes tipos de fuentes</a></p>
      `,
      url: 'https://ejemplo.com/recurso-evaluacion'
    },
    {
      id: 'redaccion-academica',
      titulo: 'Redacción de Artículos Académicos',
      descripcion: 'Guía para estructurar y escribir un artículo académico claro, conciso y de alto impacto.',
      imagen: '/images/ejemplo-redaccion.webp', // Asegúrate de tener esta imagen o cámbiala
      categoria: 'avanzado',
      duracion: '25 min',
      completado: false,
      pasos: [
        'Definir la estructura del artículo (Introducción, Metodología, Resultados, Discusión, Conclusión).',
        'Desarrollar argumentos claros y basados en evidencia.',
        'Mantener un estilo formal y objetivo.',
        'Revisar la gramática, ortografía y coherencia.',
        'Obtener feedback de pares o tutores.'
      ],
      contenidoDetallado: `
        <h3>El Arte de Escribir para la Academia</h3>
        <p>Un buen artículo académico no solo presenta resultados, sino que cuenta una historia de investigación de manera convincente.</p>
        <h4>Claves para una Redacción Exitosa:</h4>
        <ul>
          <li><strong>Claridad:</strong> Evita la ambigüedad y el lenguaje complejo innecesario.</li>
          <li><strong>Coherencia:</strong> Asegura que tus ideas fluyan lógicamente de una sección a otra.</li>
          <li><strong>Precisión:</strong> Usa terminología específica y evita generalizaciones.</li>
          <li><strong>Originalidad:</strong> Aporta una perspectiva nueva o un análisis profundo.</li>
        </ul>
        <p>Practicar regularmente y leer artículos de alta calidad en tu campo son las mejores maneras de mejorar tus habilidades de redacción.</p>
        <p><strong>Recurso Adicional:</strong> <a href="https://www.normasapa.in/como-citar-en-apa/" target="_blank">Guía completa sobre estilos de citación</a></p>
      `,
      url: 'https://ejemplo.com/recurso-redaccion'
    },
    {
      id: 'presentaciones-efectivas',
      titulo: 'Creación de Presentaciones Efectivas',
      descripcion: 'Consejos para diseñar diapositivas impactantes y comunicar tus ideas de forma memorable.',
      imagen: '/images/ejemplo-presentacion.webp', // Asegúrate de tener esta imagen o cámbiala
      categoria: 'basico',
      duracion: '15 min',
      completado: false,
      pasos: [
        'Definir el mensaje principal y los objetivos.',
        'Diseñar diapositivas visualmente atractivas y claras.',
        'Limitar el texto por diapositiva.',
        'Practicar la oratoria y el manejo del tiempo.',
        'Interactuar con la audiencia y manejar preguntas.'
      ],
      contenidoDetallado: `
        <h3>Más Allá de PowerPoint: Comunicación Impactante</h3>
        <p>Una presentación efectiva complementa tu discurso, no lo reemplaza. Debe ser una herramienta visual que refuerce tus puntos clave.</p>
        <h4>Elementos de una Buena Presentación:</h4>
        <ul>
          <li><strong>Simplicidad:</strong> Menos es más. Evita el "ruido" visual.</li>
          <li><strong>Consistencia:</strong> Usa fuentes, colores y formatos uniformes.</li>
          <li><strong>Imágenes de Calidad:</strong> Utiliza gráficos y fotos de alta resolución.</li>
          <li><strong>Storytelling:</strong> Conecta con tu audiencia a través de una narrativa.</li>
        </ul>
        <p>Recuerda que tú eres la presentación principal; las diapositivas son solo tu apoyo visual.</p>
        <p><strong>Herramientas Recomendadas:</strong> <a href="https://www.canva.com/" target="_blank">Canva</a>, <a href="https://prezi.com/" target="_blank">Prezi</a></p>
      `,
      url: 'https://ejemplo.com/recurso-presentacion'
    },
    {
      id: 'analisis-datos-basico',
      titulo: 'Análisis de Datos Básico con Hojas de Cálculo',
      descripcion: 'Introduce las funciones fundamentales de Excel/Google Sheets para organizar y analizar información.',
      imagen: '/images/ejemplo-datos.webp', // Asegúrate de tener esta imagen o cámbiala
      categoria: 'intermedio',
      duracion: '30 min',
      completado: false,
      pasos: [
        'Organizar datos en formato tabular.',
        'Usar funciones básicas (SUMA, PROMEDIO, CONTAR.SI).',
        'Crear tablas dinámicas para resumir datos.',
        'Generar gráficos sencillos (barras, líneas, circular).',
        'Filtrar y ordenar datos para insights rápidos.'
      ],
      contenidoDetallado: `
        <h3>Descubre el Poder de tus Datos</h3>
        <p>Las hojas de cálculo son herramientas increíblemente poderosas para cualquier persona que necesite organizar y entender datos.</p>
        <h4>Funciones Esenciales:</h4>
        <ul>
          <li><strong><code>SUMA()</code> / <code>AVERAGE()</code>:</strong> Cálculos básicos.</li>
          <li><strong><code>CONTAR.SI()</code> / <code>COUNTIF()</code>:</strong> Contar elementos que cumplen un criterio.</li>
          <li><strong><code>BUSCARV()</code> / <code>VLOOKUP()</code>:</strong> Buscar valores en tablas.</li>
          <li><strong>Formatos Condicionales:</strong> Resaltar datos importantes automáticamente.</li>
        </ul>
        <p>Conocer estas bases te abrirá un mundo de posibilidades para manejar cualquier tipo de información.</p>
        <p><strong>Tutorial Recomendado:</strong> <a href="https://support.microsoft.com/es-es/office/funciones-de-excel-por-categor%C3%ADa-5f91f4e9-7b42-46d2-9d32-b617042e12e3" target="_blank">Funciones de Excel por Categoría</a></p>
      `,
      url: 'https://ejemplo.com/recurso-datos'
    }
  ];
});