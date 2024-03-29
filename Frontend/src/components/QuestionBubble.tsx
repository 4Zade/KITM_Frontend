import { Icon } from '@iconify/react'
import { useState } from 'react';

export function Question() {
    const [extended, setExtended] = useState(false);

    return (
        <section className="w-full0 h-min p-4  flex flex-row-reverse">
            <div className="w-2/3 h-min py-2 pl-4 pr-1 rounded-lg dark:bg-slate-600 bg-slate-300 flex">
                <p className={`text-clip ${!extended && 'line-clamp-3'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, turpis at vulputate lobortis, turpis tortor dictum sapien, sed tempus ipsum odio ac eros. Nulla porta quis elit a vestibulum. Praesent eu urna euismod odio rutrum lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel finibus enim. In interdum est imperdiet consectetur suscipit. Sed tincidunt eros at libero malesuada, eget maximus dolor dapibus. Curabitur vitae augue luctus, sollicitudin leo eu, dapibus lacus. Pellentesque et quam eros. Morbi iaculis tortor id orci cursus, quis sodales ipsum viverra. Integer sollicitudin blandit massa dignissim semper. 
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