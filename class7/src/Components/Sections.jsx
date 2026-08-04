import React from 'react'

const Sections = (props) => {
  console.log(props);
  return (
    <div>
        <h1  className='text-xl'>this is a section</h1>
        {props.children[0]}
        {props.children[1]}
    </div>
  )
}

export default Sections