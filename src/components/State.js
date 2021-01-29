//State is similar to props, but it is private and fully controlled by the component.
//Managed inside component instead of being passed into it like props.

import {useState} from 'react';

const State = () => {
    const [count, setCount] = useState( () => {
        console.log ("function ran!")
        return 4
    })
// current value/ function to update value
// useState hook must execute in same order (cant be used in if statement or loop...)
    function decCoun() {
        setCount(count - 1)
    }   
    function inCount(){
        setCount( count + 1)
    }

    return(
        <>
    <button onClick = {decCoun}>-</button>
    <span>{ count } </span>
    <button onClick = {inCount}>+</button>
        </>
    )

}
export default State;