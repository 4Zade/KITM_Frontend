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
                'Content-Type': 'application/json'
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
        <>
            <main className="w-screen h-screen overflow-hidden grid place-items-center bg-red-300">
                <div className="w-[420px] flex flex-col p-4 py-8 rounded-lg bg-red-400 gap-6">
                    <header>
                        <h1 className="text-3xl font-bold text-center uppercase">Login</h1>
                    </header>

                    <form className='w-full flex flex-col items-center gap-6'>
                        <div className='w-full flex flex-col items-center'>
                            <label htmlFor="email" className='text-sm'>Email:</label>
                            <div className="w-3/4 h-8 p-1 pr-2 bg-red-500 rounded-full flex items-center gap-2">
                                <div className="h-6 w-6 bg-red-600 rounded-full grid place-items-center">
                                    <Icon icon="tabler:mail" className="w-4 h-4"/>
                                </div>

                                <input type="text" name="email" className='flex grow text-sm focus:outline-none bg-transparent' onChange={handleChange}/>
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center'>
                            <label htmlFor="password" className='text-sm'>Password:</label>
                            <div className="w-3/4 h-8 p-1 pr-2 bg-red-500 rounded-full flex items-center gap-2">
                                <div className="h-6 w-6 bg-red-600 rounded-full grid place-items-center">
                                    <Icon icon="tabler:mail" className="w-4 h-4"/>
                                </div>

                                <input type="password" name="password" className='flex grow text-sm focus:outline-none bg-transparent' onChange={handleChange}/>
                            </div>
                        </div>
                    </form>

                    <section className='w-full flex justify-center'>
                        <div className='py-2 px-6 w-min h-min bg-red-800 rounded-xl grid place-items-center text-lg uppercase font-bold cursor-pointer select-none' onClick={handleLogin}>
                            Login
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}