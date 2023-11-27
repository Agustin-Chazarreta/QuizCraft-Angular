import { Quiz } from "../interfaces/quiz"

export const QUIZ: Quiz =
{
  id: "12",
  author_id: 13,
  title: "Titulo de quiz",
  description: "Esta es la descripcion del quiz",
  questions:
    [
      {
        id: "one",
        question: "Cuantas letras tiene la palabra: CASA ?",
        correct_answer: "4",
        possible_answers: [{ value: "4" }, { value: "3" }, { value: "5" }, { value: "Ninguna" }]
      },
      {
        id: "two",
        question: "Cuantas letras tiene la palabra: NOSTRADAMUS ?",
        correct_answer: "11",
        possible_answers: [{ value: "13" }, { value: "10" }, { value: "11" }, { value: "12" }]
      },
      {
        id: "three",
        question: "Cuantas letras tiene la palabra: RAMPERIN ?",
        correct_answer: "8",
        possible_answers: [{ value: "6" }, { value: "7" }, { value: "9" }, { value: "8" }]
      }
    ]
}
