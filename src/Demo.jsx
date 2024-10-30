import React from 'react'

function Demo(props) {
    const a=5, b=5
    // const b=5
    const c= a+b
    console.log(props.firstName);
  return (
    <div>
      <h4>Hi {props.firstName}</h4>
      <p>{c}</p>
    </div>
  )
}

export default Demo