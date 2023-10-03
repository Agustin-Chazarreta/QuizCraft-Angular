import { Quiz } from "../interfaces/quiz"

export const QUIZ :Quiz =
{
  id: 12,
  author_id: 13,
  title: "MOCKED QUIZ",
  description: "this is a mocked quiz",
  questions:
    [
      {
        question_id: "one",
        question: "pregunta 1",
        correct_answer: "respuesta 1",
        possible_answers: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"]
      },
      {
        question_id: "two",
        question: "pregunta 2",
        correct_answer: "respuesta 2",
        possible_answers: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"]
      },
      {
        question_id: "three",
        question: "pregunta 3",
        correct_answer: "respuesta 3",
        possible_answers: ["respuesta 1", "respuesta 2", "respuesta 3", "respuesta 4"]
      }
    ]
}
