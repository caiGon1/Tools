import { useImperativeHandle } from "react"

function Header() {
    return (
        <div className="shadow-xl flex bg-fuchsia-200 gap-4 px-6 py-4 items-center max-w-full overflow-x-hidden">
            <h1 className="font-extralight textxl sm:text-4xl ml-2.5">Tools 1.0</h1>
            <div className="ml-auto flex items-center gap-4 text-2xl shrink-0">
            <a className="font-extralight px-1 transition delay-75 duration-150 ease-in-out hover:scale-110" href="">Hello, user</a>
            <span className="font-extralight ml-2.5 text-2xl">|</span>
            <a className="font-extralight px-1 transition delay-75 duration-150 ease-in-out hover:scale-110" href="">Configurations</a>
            </div>
        </div>
    )
}
export default Header