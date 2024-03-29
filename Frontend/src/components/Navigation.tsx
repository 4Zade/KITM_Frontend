import { NavCard } from './NavCard';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

const BaseURL = 'http://172.16.50.58:5000';

export function Navbar() {
    useEffect(() => {
            fetch(`${BaseURL}/chats`)
                .then((data: any) => {
                    console.log(data)
                })
                .catch(err => {
                    console.error('Error has been made', err)
                });
    })

    return (
        <section className="w-[360px] h-full bg-slate-700 p-4">
            <main className="w-full h-full">
                <header className='pb-8 flex items-center justify-between'>
                    <h1 className='text-slate-200 font-black text-4xl'>KITM DI</h1>

                    <div className='w-8 h-8 rounded-xl bg-slate-800 grid place-items-center'>
                        <Icon icon="tabler:user" className="w-6 h-6 text-slate-200"/>
                    </div>
                </header>

                <NavCard/>
            </main>
        </section>
    )
}