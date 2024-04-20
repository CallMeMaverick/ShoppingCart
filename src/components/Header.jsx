import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <div className={"header"}>
            <header>
                <h1>TechTreasure</h1>
                <p>Powering up your digital lifestyle</p>
            </header>

            <nav className={"navigation"}>
                <NavLink exact to={"/"} >Home</NavLink>
                <NavLink exact to={"/catalog"}>Catalog</NavLink>
                <NavLink exact to={"#"}>Cart</NavLink>
            </nav>
        </div>
    )
}
