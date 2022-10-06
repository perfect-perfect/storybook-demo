// this file is to show how decorators work
import React from 'react'
import './Center.css'

function Center(props) {
  return (
    // this className is defined in Center.css
    <div className='center'>
        {props.children}
    </div>
  )
}

export default Center