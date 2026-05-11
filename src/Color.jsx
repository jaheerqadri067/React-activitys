import { useState } from "react";

export default function Color() {
    let [color, setColor] = useState("red");

    let ChangeColor = () => {
        //console.log("btn was clicked")
        setColor(color === "red" ? "blue" : "red")
    }

    return(
        <>
            <div style={{
                 height: "200px",
                 width: "200px",
                 border: "2px solid black",
                 borderRadius: "0.4rem",
                 backgroundColor: color
            }} onClick={ChangeColor}></div>
        </>
    )
}