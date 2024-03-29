import { NavCard } from './NavCard';
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
                <NavCard/>
            </main>
        </section>
    )
}