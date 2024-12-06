import React from 'react'
import pic from "../images/pmfound.jpg";
import "../components/Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <h2>{props.name}</h2>
        <img src={props.pic} width="100" height="100" alt='pmbrand'/>
        <h2>{props.roll}</h2>
    </div>
  )
}

export default Card