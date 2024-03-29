import { Icon } from '@iconify/react'
import { useState } from 'react';

interface Props {
    text: string
}

export function Answer({text}: Props) {
    const [extended, setExtended] = useState(true);

    return (
        <section className="w-full h-min p-4  flex">
            <div className="w-2/3 h-min py-2 pr-4 pl-1 rounded-lg dark:bg-sky-500 bg-sky-300 flex">
                <header className="w-9 flex justify-center">
                    <div className="w-6 h-6 cursor-pointer grid place-items-center" onClick={() => setExtended(extended => !extended)}>
                        <Icon icon="tabler:chevron-right" className={`w-4 h-4 transition-transform ${extended && 'rotate-90'}`}/>
                    </div>
                </header>
                <p className={`text-clip ${!extended && 'line-clamp-3'}`}>
                {text}
                </p>
            </div>
        </section>
    )
}