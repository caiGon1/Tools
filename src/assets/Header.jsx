import { useImperativeHandle } from "react"

function Header() {
    return (
        <div className="flex bg-amber-100 w-screen gap-2">
        <img src="TEMP" alt="TEMP" />
        <h1 className="text-4xl">Tools 1.0</h1>
            <a className="ml-auto text-2xl" href="">Olá, user</a>
        </div>
    )
}
export default Header