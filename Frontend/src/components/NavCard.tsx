import { Icon } from '@iconify/react';
import { useState } from 'react';

export function NavCard() {
    const [toDelete, useToDelete] = useState(false);

    return (
        <div className="w-full h-11 p-2 transition-colors dark:bg-slate-700 bg-slate-100 dark:hover:bg-slate-600 hover:bg-slate-50 dark:text-slate-300 flex items-center rounded-lg cursor-pointer select-none">
            <section className="w-8 min-w-8 h-8 rounded-md grid place-items-center">
                <Icon icon="tabler:message" className='w-6 h-6'/>
            </section>

            <section className={`w-64 h-full px-2 `}>
                <p className={`text truncate font-semibold ${toDelete ? 'w-52' : 'w-60'}`}>Chat 1</p>
            </section>

            <section className='w-min h-min'>
                {
                    !toDelete ? 
                    <div className='w-6 min-w-6 h-6 transition-colors dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-200 hover:bg-slate-300 text-red-400 hover:text-red-500 rounded grid place-items-center' onClick={() => useToDelete(toDelete => !toDelete)}>
                        <Icon icon='tabler:trash' className=''/>
                    </div>
                    :
                    <section className='flex gap-2'>
                        <div className='w-6 min-w-6 h-6 transition-colors dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-200 hover:bg-slate-300 text-green-400 hover:text-green-500 rounded grid place-items-center' onClick={() => useToDelete(toDelete => !toDelete)}>
                            <Icon icon='tabler:check' className=''/>
                        </div>

                        <div className={`w-6 min-w-6 h-6 transition-colors dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-200 hover:bg-slate-300 text-red-400 hover:text-red-500 rounded grid place-items-center opacity-100`} onClick={() => useToDelete(toDelete => !toDelete)}>
                            <Icon icon='tabler:x' className=''/>
                        </div>
                    </section>
                }
            </section>
        </div>
    )
}