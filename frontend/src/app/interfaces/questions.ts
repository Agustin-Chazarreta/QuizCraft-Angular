export interface Question {
    id: number,
    question: string,
    correct_answer: string,
    possible_answers: Answer[]
}

export interface QuestionView extends Question {
    selectedAnswer?: boolean
}
export interface Answer {
    id: string
    value: string
}
