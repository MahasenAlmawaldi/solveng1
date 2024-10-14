import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className='button prim-but'>
        <a herf='/#'> {props.children}
        </a></div>
  )
}

export default Button