import { Icon } from '@iconify/react'
import { useState } from 'react';

interface Props {
    text: string
}

export function Question({text}: Props) {
    const [extended, setExtended] = useState(false);

    return (
        <section className="w-full0 h-min p-4  flex flex-row-reverse">
            <div className="w-2/3 h-min py-2 pl-4 pr-1 rounded-lg dark:bg-slate-600 bg-slate-300 flex">
                <p className={`text-clip ${!extended && 'line-clamp-3'}`}>
                {text}
                </p>
                <header className="w-9 flex justify-center">
                    <div className="w-6 h-6 cursor-pointer grid place-items-center" onClick={() => setExtended(extended => !extended)}>
                        <Icon icon="tabler:chevron-left" className={`w-4 h-4 transition-transform ${extended && '-rotate-90'}`}/>
                    </div>
                </header>
            </div>
        </section>
    )
}