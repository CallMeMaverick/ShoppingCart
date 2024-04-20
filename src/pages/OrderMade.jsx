import {Link} from "react-router-dom";

export default function OrderMade() {
    return (
        <div className={"order-made"}>
            <h1>Thanks for ordering!</h1>
            <p>We would be glad if this was a real transaction 😕</p>
            <p>Perhaps in the future, time will tell 😁</p>
            <span>Anyway, thanks for stopping by!</span> <br />
            <Link to={"/"} className={"return-main"}>{'--> Main page <--'}</Link>
        </div>
    )
}