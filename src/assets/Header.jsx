import { useImperativeHandle } from "react"

function Header() {
    return (
        <div className="flex bg-fuchsia-200 gap-2 px-8 py-5">
            <img className="h-10 w-18
            " src="src\assets\imgs\undraw_coding_joxb.png" alt="TEMP" />
            <h1 className="text-4xl">Tools 1.0</h1>
            <a className="ml-auto text-2xl px-1" href="">Olá, user</a>
            <h1 className="ml-2.5 text-2xl">|</h1>
            <a className="ml-2.5 text-2xl px-1" href="">Configurações</a>
        </div>
    )
}
export default Header