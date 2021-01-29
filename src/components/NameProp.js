// Props are short for 'properties'
// They are the parameters of a component function 
//That get passed into a component to aid in its reusability.
//Dynamic data that can be assigned tp child components.

const NameProp = (props) => {// property returning the react element 
    return <h1>Hello, {props.name}</h1>
}

export default NameProp;