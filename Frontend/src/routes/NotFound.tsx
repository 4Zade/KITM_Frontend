export function NotFound() {
    return (
        <>
            <main className="w-screen h-screen overflow-hidden bg-slate-100 dark:bg-slate-700 flex flex-col justify-center items-center">
                    <section className='flex text-slate-200 dark:text-slate-800 font-black gap-1 cursor-pointer select-none'>
                        <img src="/kitm.png" alt="KITM" className='saturate-0 w-10 h-10 object-contain'/>
                        <div>
                            <h1 className='text-4xl leading-5'>KITM DI</h1>
                            <h1 className='uppercase text-xs leading-7 ml-px'>Dirbtinis intelektas</h1>
                        </div>
                    </section>
                <h1 className="text-[12rem] font-black leading-[10rem] text-slate-300 dark:text-slate-800">404</h1>
                <h1 className="uppercase font-extrabold text-[8rem] text-slate-300 dark:text-slate-800">not found</h1>
            </main>
        </>
    )
}