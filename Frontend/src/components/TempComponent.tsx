export function TemporaryComponent() {
    return (
        <div 
        className="
        2xl:bg-red-500
        xl:bg-orange-500
        lg:bg-yellow-500
        md:bg-green-500
        sm:bg-blue-500
        bg-purple-500
        absolute bottom-0 left-0 flex items-center pl-8
        w-full h-8 text-white
        ">
            <h1 className="hidden 2xl:block text-lg font-bold">2XL</h1>
            <h1 className="hidden xl:block 2xl:hidden text-lg font-bold">XL</h1>
            <h1 className="hidden lg:block xl:hidden text-lg font-bold">LG</h1>
            <h1 className="hidden md:block lg:hidden text-lg font-bold">MD</h1>
            <h1 className="hidden sm:block md:hidden text-lg font-bold">SM</h1>
            <h1 className="sm:hidden block text-lg font-bold"></h1>
        </div>
    )
}