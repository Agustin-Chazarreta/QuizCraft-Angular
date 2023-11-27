export interface Question {
    id: string,
    question: string,
    correct_answer: string,
    possible_answers: Answer[]
}

export interface QuestionView extends Question {
    selectedAnswer?: boolean
}
export interface Answer {
    value: string
    selected?: boolean
}
