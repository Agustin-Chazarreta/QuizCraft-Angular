import { Questions } from "./questions"

export interface Quiz {
    id: number,
    author_id: number,
    title: string,
    description: string,
    questions:Questions[]
}
