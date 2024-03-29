import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

interface PostData {
    email: string
    password: string
}

const BaseURL = 'http://172.16.50.58:5000';

export function Authentication() {
    const [postData, setPostData] = useState<PostData>({
        email: "",
        password: ""
    });

    function handleLogin() {
        fetch(`${BaseURL}/login`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa('username:password'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Posted successfully', data);
        })
        .catch(err => {
            console.error('Error posting', err);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPostData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <main className="w-screen h-screen overflow-hidden grid place-items-center dark:bg-slate-700 bg-slate-100">
                <div className="w-[420px] flex flex-col p-4 py-8 rounded-lg dark:bg-slate-800 bg-slate-200 gap-6">
                    <header>
                        <h1 className="text-3xl font-bold text-center uppercase dark:text-slate-200">Login</h1>
                    </header>

                    <form className='w-full flex flex-col items-center gap-6 '>
                        <div className='w-full flex flex-col items-center text-slate-800 dark:text-slate-200'>
                            <label htmlFor="email" className='text-sm font-bold'>Email:</label>
                            <div className="w-3/4 h-8 p-1 pr-2 bg-slate-300 dark:bg-slate-900 rounded-full flex items-center gap-2">
                                <div className="h-6 w-6 bg-slate-400 dark:bg-slate-950 rounded-full grid place-items-center">
                                    <Icon icon="tabler:mail" className="w-4 h-4"/>
                                </div>

                                <input type="text" name="email" className='flex grow text-sm focus:outline-none bg-transparent' onChange={handleChange}/>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center dark:text-slate-200'>
                            <label htmlFor="password" className='text-sm font-bold'>Password:</label>
                            <div className="w-3/4 h-8 p-1 pr-2 bg-slate-300 dark:bg-slate-900 rounded-full flex items-center gap-2">
                                <div className="h-6 w-6 bg-slate-400 dark:bg-slate-950 rounded-full grid place-items-center">
                                    <Icon icon="tabler:mail" className="w-4 h-4"/>
                                </div>

                                <input type="password" name="password" className='flex grow text-sm focus:outline-none bg-transparent' onChange={handleChange}/>
                            </div>
                        </div>
                    </form>

                    <section className='w-full flex justify-center'>
                        <div className='py-2 px-6 w-min h-min bg-indigo-300 hover:bg-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl grid place-items-center text-lg uppercase font-bold cursor-pointer select-none transition-colors shadow' onClick={handleLogin}>
                            Login
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}