import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className={"error-page"}>
            <h1>Actually... You&apos;re not supposed to be here 😬</h1>
            <p>But we will show you the way!</p>
            <Link to={"/"}>Homepage</Link>
        </div>
    )
}