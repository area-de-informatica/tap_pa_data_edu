export default defineEventHandler(() => {
  const questions = [
    {
      id: 1,
      question: "¿Qué es una base de datos?",
      answers: [
        {
          a: "Un lugar para guardar libros",
          b: "Un sistema para almacenar, organizar y acceder datos",
          c: "Un sitio web para buscar imágenes",
          d: "Un software para crear videojuegos",
        },
      ],
      correct: "b",
    },
    {
      id: 2,
      question: "¿Cuál de estas herramientas puede servir como base de datos?",
      answers: [
        {
          a: "Paint",
          b: "Excel",
          c: "Word",
          d: "Canva",
        },
      ],
      correct: "b",
    },
    {
      id: 3,
      question: "¿Qué formato es común para almacenar datos en aplicaciones modernas?",
      answers: [
        {
          a: "TXT",
          b: "JSON",
          c: "MP3",
          d: "JPG",
        },
      ],
      correct: "b",
    },
    {
      id: 4,
      question: "¿Qué significa NoSQL?",
      answers: [
        {
          a: "No Structured Query Language",
          b: "No Secure Query Language",
          c: "Not Only SQL",
          d: "New Open SQL",
        },
      ],
      correct: "c",
    },
    {
      id: 5,
      question: "¿Qué modelo NoSQL es más adecuado para representar relaciones entre usuarios en una red social?",
      answers: [
        {
          a: "Clave-valor",
          b: "Documentos",
          c: "Columnar",
          d: "Grafos",
        },
      ],
      correct: "d",
    },
  ]

  return questions
})
