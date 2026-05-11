import { useState } from "react"
export default function Show() {
    let [show, setShow] = useState(false); //let show = true;

    let hide = () => {
        setShow(!show)
        //console.log(show)
    }

    return (
        <>
            <p onClick={hide}>
                {show ? (
                    <i className="fa-solid fa-moon"></i>) : (
                    <i className="fa-solid fa-sun"></i>
                )}
            </p>
        </>
    )
}