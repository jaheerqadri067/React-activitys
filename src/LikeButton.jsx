import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(true); //let isLiked = true; 
    let Toggle = () => {
        setIsLiked(!isLiked)
        //console.log(isLiked)
    }

    return (
        <p onClick={Toggle}>
            {/* {isLiked.toString()}
            <i className="fa-regular fa-heart"></i> */}
            {isLiked ? (
                <i className="fa-regular fa-heart"></i>
            ) : (
                <i style={{color: "brown"}} className="fa-solid fa-heart"></i>
            )
            }
        </p>
    )

}