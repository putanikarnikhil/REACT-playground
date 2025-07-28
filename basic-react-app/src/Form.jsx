function handleFormSubmit(){
    console.log("form was submitted");
}


export default function Form(){
    return (
    <form>
        <input type="text" placeholder="Write Something" />
        <submit onClick={handleFormSubmit}>Submit</submit>
    </form>
    )
}