function FormSubmitted(event) {
    event.preventDefault()
    console.log(
        "Form submitted succesfully!"
    )
}

export default function Form(event){
    return(
        <form>
            <input type="text" placeholder="Write something"></input>
            <button onSubmit={FormSubmitted}>Submit</button>
        </form>
    )
}