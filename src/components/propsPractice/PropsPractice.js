import React from 'react'
const PropsPractice = ({name,roll,age,address,count,setCount}) => {
    const Name = "Swarnali Ghosh Das"
    return(
        <>
        <p>I am {Name}.</p>
        <p><b>My another name is {name} </b></p>
        <p>My roll is {roll} </p>
        <p>My age is {age} </p>
        <p>My address is {address} </p>
        <button onClick={() => {setCount(count+1)}}>+</button> {/* This is arrow function and it will trigger only onClick of the button. */}
        {/* <button onClick={setCount(count+1)}>+</button>  This is a normal function call , which calls the method as soon the rendering of the component happens.*/}
        <p>{count}</p>
        <button onClick={() => {setCount(count-1)}}>-</button>
        </>
    )
}
export default PropsPractice;
