import React from 'react'

function Card(props) {
  const {picture, brand, flavour}=props
  return (
    <div>Card
      <img src={picture} alt="chat"/>
      {brand}
      {flavour}

    </div>
  )
}

export default Card