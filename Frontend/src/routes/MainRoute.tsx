import { TemporaryComponent } from '../components/TempComponent';
import { Navbar } from '../components/Navigation';
import { Chat } from '../components/Chat';
import { Footer } from '../components/Footer';

export function MainRoute() {
    return (
        <main className="w-screen h-screen overflow-hidden flex">
            <Navbar/>
            <section className='flex flex-col grow'>
                <Chat/>
                <Footer/>
            </section>
            {/* <TemporaryComponent/> */}
        </main>
    )
}