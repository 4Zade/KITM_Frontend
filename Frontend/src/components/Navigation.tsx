import { NavCard } from './NavCard';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const BaseURL = 'http://172.16.50.58:5000';

interface Props {
    hidden: boolean
}

export function Navbar({hidden}: Props) {
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
        <section className={`top-0 left-0 absolute lg:static w-[360px] h-full dark:bg-slate-700 bg-slate-100 p-4 ${hidden && 'hidden'} lg:block`}>
            <main className="w-full h-full">
                <header className='pb-8 flex items-center justify-between'>
                    <Link to="/" className='flex dark:text-slate-200 text-slate-800 font-black gap-1 cursor-pointer select-none'>
                        <img src="/kitm.png" alt="KITM" className='w-10 h-10 object-contain'/>
                        <div>
                            <h1 className='text-4xl leading-5'>KITM DI</h1>
                            <h1 className='uppercase text-xs leading-7 ml-px'>Dirbtinis intelektas</h1>
                        </div>
                    </Link>

                    <div className='transition-colors w-8 h-8 rounded-xl dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-200 hover:bg-slate-300 grid place-items-center cursor-pointer'>
                        <Icon icon="tabler:user" className="w-6 h-6 dark:text-slate-200"/>
                    </div>
                </header>

                <NavCard/>
            </main>
        </section>
    )
}