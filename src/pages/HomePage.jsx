import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className={"header"}>
                <header>
                    <h1>TechTreasure</h1>
                    <p>Powering up your digital lifestyle</p>
                </header>

                <nav className={"navigation"}>
                    <NavLink to={"/"} activeStyle={{color: "#efd510"}}>Home</NavLink>
                    <NavLink to={"#"} activeStyle={{color: "#efd510"}}>Catalog</NavLink>
                    <NavLink to={"#"} activeStyle={{color: "#efd510"}}>Cart</NavLink>
                </nav>
            </div>
        </>
    )
}