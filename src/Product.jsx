import "./Product.css";
import Price from "./Price.jsx"

export default function Product({title, idx}) {
    let oldPrice = ["12000", "13000", "5000"]
    let newPrice = ["8900", "9999", "3500"]
    let description = [
        ["wireless headphone", "cable headphone"],
        ["institute", "iphone"],
        ["ipad pro max", "samsung galaxy"]
    ]
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
        </div>
    )
}


