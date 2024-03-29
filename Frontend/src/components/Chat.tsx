import { Icon } from '@iconify/react'
import { ChatStack } from './ChatStack'

export function Chat() {
    return (
        <section className="flex grow h-full bg-slate-700 text-slate-200 p-4 pb-0 pl-0">
            <main className="w-full flex grow bg-slate-800 rounded-xl flex-col-reverse overflow-hidden">
                <section className="2xl:px-64 xl:px-32 lg:px-16 w-full h-16 flex items-center"> {/* INPUT */}
                    <div className="w-full h-10 p-2 rounded-full bg-slate-900 flex items-center gap-4 relative">
                        <textarea 
                        name="" 
                        id="input" 
                        className='w-full h-full resize-none bg-transparent focus:outline-none'
                        placeholder='Užduokite klausimą'
                        />

                        <div className="h-8 w-8 bg-slate-950 rounded-full grid place-items-center cursor-pointer">
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