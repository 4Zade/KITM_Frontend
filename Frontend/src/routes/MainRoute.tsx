import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Navbar } from '../components/Navigation';
import { Chat } from '../components/Chat';
import { Footer } from '../components/Footer';

export function MainRoute() {
    const [hidden, setHidden] = useState(true);

    return (
        <main className="w-screen h-screen overflow-hidden flex">
            <Navbar hidden={hidden}/>
            <section className='flex flex-col grow'>
                <header className='lg:hidden w-full h-10 dark:bg-slate-700 flex flex-row-reverse items-start'>
                    <div className='mt-1 mr-2 w-12 h-12 grid place-items-center cursor-pointer' onClick={() => setHidden(hidden => !hidden)}>
                        <Icon icon="tabler:menu-2" className='w-10 h-10 dark:text-slate-200 text-slate-800'/>
                    </div>
                </header>
                <Chat/>
                <Footer/>
            </section>
        </main>
    )
}