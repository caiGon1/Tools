import { useImperativeHandle } from "react"

function Header() {
    return (
        <div className="flex bg-fuchsia-200 w-screen gap-2">
            <img className="h-10 w-18
            " src="src\assets\imgs\undraw_coding_joxb.png" alt="TEMP" />
            <h1 className="text-4xl">Tools 1.0</h1>
            <a className="ml-auto text-2xl" href="">Olá, user</a>
        </div>
    )
}
export default Header