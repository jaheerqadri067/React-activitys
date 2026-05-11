export  default function Price({oldPrice, newPrice}) {
    let oldStyle = {
        textDecorationLine: "line-through",
    }
    let styles = {
        backgroundColor: "#e0c367",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; 
            <span>{newPrice}</span>
        </div>
    )
}
