import { Question } from './QuestionBubble';
import { Answer } from './AnswerBubble';

export function ChatStack() {
    return (
        <div className="w-full h-auto">
            <Question/>
            <Answer/>
        </div>
    )
}