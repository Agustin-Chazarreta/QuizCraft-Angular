import { Quiz } from "../interfaces/quiz"

export const QUIZ: Quiz =
{
  id: 12,
  author_id: 13,
  title: "MOCKED QUIZ",
  description: "this is a mocked quiz",
  questions:
    [
      {
        id: "one",
        question: "pregunta 1",
        correct_answer: "respuesta 1",
        possible_answers: [{ value: "respuesta 1" }, { value: "respuesta 2" }, { value: "respuesta 3" }, { value: "respuesta 4" }]
      },
      {
        id: "two",
        question: "pregunta 2",
        correct_answer: "respuesta 2",
        possible_answers: [{ value: "respuesta 1" }, { value: "respuesta 2" }, { value: "respuesta 3" }, { value: "respuesta 4" }]
      },
      {
        id: "three",
        question: "pregunta 3",
        correct_answer: "respuesta 3",
        possible_answers: [{ value: "respuesta 1" }, { value: "respuesta 2" }, { value: "respuesta 3" }, { value: "respuesta 4" }]
      }
    ]
}
