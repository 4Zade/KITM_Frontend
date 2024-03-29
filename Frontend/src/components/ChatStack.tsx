import { Question } from './QuestionBubble';
import { Answer } from './AnswerBubble';

interface itemProps {
    question: string
    answer: string
}

interface Props {
    item: itemProps
}

export function ChatStack({item}: Props) {
    return (
        <div className="w-full h-auto">
            <Question text={item.question}/>
            <Answer text={item.answer}/>
        </div>
    )
}