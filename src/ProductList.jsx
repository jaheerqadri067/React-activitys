import Product from "./Product"

function ProductList() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        borderRadius: "0.4rem"
    }
    return(
        <div style={styles}>
            <Product title="Logistic" idx={0}></Product>
            <Product title="pakiza life style" idx={1}></Product>
            <Product title="Zebronices" idx={2}></Product>
        </div>
    )
}

export default ProductList