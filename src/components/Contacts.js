//Pass name, age, school, graduationYear
//Return an h3 with name, and a p tag with the remaining information

const Contacts = (props) => {
    
    return(
        <>
        <h3>My name is {props.name}</h3>
        <p>I am {props.age} years old. I graduated from {props.school} in {props.graduationYear}</p>
        </>
    )
}

export default Contacts;