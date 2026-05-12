import React from 'react'

const Button = (props) => {
  return (
    <div className=' text-white text-2xl w-fit bg-amber-700 m-12 rounded'>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Button
