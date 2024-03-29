import { Icon } from '@iconify/react'
import { ChatStack } from './ChatStack'

export function Chat() {
    return (
        <section className="flex grow h-full dark:bg-slate-700 bg-slate-100 dark:text-slate-200 text-slate-800 p-4 lg:pb-0 lg:pl-0">
            <main className="w-full flex grow dark:bg-slate-800 bg-slate-200 rounded-xl flex-col-reverse overflow-hidden">
                <section className="2xl:px-64 xl:px-32 lg:px-16 w-full h-20 flex items-center"> {/* INPUT */}
                    <div className="w-full h-12 pl-4 p-2 rounded-full dark:bg-slate-900 bg-slate-300 flex items-center gap-4 relative">
                        <textarea 
                        name="" 
                        id="input" 
                        className='w-full h-full text-lg resize-none bg-transparent focus:outline-none'
                        placeholder='Užduokite klausimą'
                        />

                        <div className="h-8 w-8 transition-colors dark:bg-slate-900 dark:hover:bg-slate-950 dark:text-slate-200 text-slate-800 bg-slate-300 hover:bg-slate-400 rounded-full grid place-items-center cursor-pointer">
                            <Icon icon="tabler:send-2" className='w-5 h-5'/>
                        </div>
                    </div>
                </section>

                <section className='w-full h-full flex flex-col'>
                    <ChatStack/>
                </section>
            </main>
        </section>
    )
}