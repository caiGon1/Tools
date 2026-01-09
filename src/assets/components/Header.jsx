import { useImperativeHandle } from "react"

function Header() {
    return (
        <div className=" shadow-xl flex bg-fuchsia-200 gap-2 px-8 py-5">
            <img className="h-10 w-18
            " src="src\assets\imgs\undraw_coding_joxb.png" alt="TEMP" />
            <h1 className="font-extralight text-4xl">Tools 1.0</h1>
            <a className="font-extralight ml-auto text-2xl px-1 transition delay-75 duration-150 ease-in-out hover:scale-110" href="">Hello, user</a>
            <h1 className="font-extralight ml-2.5 text-2xl">|</h1>
            <a className="font-extralight ml-2.5 text-2xl px-1 transition delay-75 duration-150 ease-in-out hover:scale-110" href="">Configurations</a>
        </div>
    )
}
export default Header