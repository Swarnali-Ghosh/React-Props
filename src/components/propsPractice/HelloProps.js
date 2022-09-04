import React,{useState} from 'react'
import PropsPractice from './PropsPractice'

const HelloProps = (props) => {
    const name = "Madhusudan Ghosh";
    const roll = 33;
    const age = 23 ;
    const address = "Kolkata";

    const [count,setCount] = useState(0);
  return (
    <>
        <h2>{props.data}</h2>
        <h3>{props.heading}</h3>
        <h4>{props.subheading}</h4>
        <PropsPractice name={name} roll={roll} age={age} address={address} count={count} setCount={setCount} />
    </>
  )
}

export default HelloProps