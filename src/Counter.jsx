import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0) //let count = 0; count is a state variable
    //console.log("count is renders", count)

    function innerCount() {
        setCount(count + 1);
        //console.log("count is re-render", count);
    }

    return(
        <div>
            <button onClick={innerCount}> Increase Count = {count}</button>
        </div>
    )
}