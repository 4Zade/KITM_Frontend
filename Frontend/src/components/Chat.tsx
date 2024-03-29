import { Icon } from '@iconify/react'
import { ChatStack } from './ChatStack'

export function Chat() {
    const Items = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, turpis at vulputate lobortis, turpis tortor dictum sapien, sed tempus ipsum odio ac eros. Nulla porta quis elit a vestibulum. Praesent eu urna euismod odio rutrum lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel finibus enim. In interdum est imperdiet consectetur suscipit. Sed tincidunt eros at libero malesuada, eget maximus dolor dapibus. Curabitur vitae augue luctus, sollicitudin leo eu, dapibus lacus. Pellentesque et quam eros. Morbi iaculis tortor id orci cursus, quis sodales ipsum viverra. Integer sollicitudin blandit massa dignissim semper.",
            answer: 'Nunc mollis sollicitudin massa vitae pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus gravida quis magna eu pellentesque. Praesent auctor, ex sed interdum condimentum, erat quam euismod sapien, sit amet ornare ante lacus quis turpis. In hac habitasse platea dictumst. Ut a mollis lacus, non dictum leo. Nunc commodo maximus quam, a dictum risus gravida ac. Donec quis orci ex. Vestibulum nec ullamcorper orci. Aenean nec augue sit amet est ultrices laoreet a ut tellus. Nullam scelerisque lacus vel arcu placerat fringilla. Vestibulum consectetur, risus sit amet vulputate iaculis, dui tortor posuere urna, vitae semper libero arcu id lectus. Integer non congue orci, ac consequat urna. Proin commodo tempor tellus, vel ullamcorper tortor euismod a. Ut id neque sit amet turpis pretium elementum. Integer in ex id augue maximus ullamcorper.'
        },
        {
            question: 'How is the weather today?',
            answer: 'Perfect! Its sunny outside.'
        }
    ]

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
                    {
                        Items.map((item, index) => (
                            <ChatStack key={index} item={item}/>
                        ))
                    }
                </section>
            </main>
        </section>
    )
}