export default function List(){
    let cars = [
        {name:"xuv-700"},
        {name: "baleno"},
        {name: "thar"}, 
        {name: "scorpio"}
    ];
    return(
        <ol>
            {cars.map((item, index) => (
                <li key={index}>
                    {item.name}
                </li>
            ))}
        </ol>
    )
}