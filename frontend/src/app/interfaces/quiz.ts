import { Question, QuestionView } from "./questions"

export interface Quiz {
    _id: string,
    author_id: number,
    title: string,
    description: string,
    questions: Question[]
}
export interface QuizView extends Quiz {
    questions: QuestionView[]
}