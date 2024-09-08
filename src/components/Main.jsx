import React from 'react'

export default function Main(props) {
  const {data} = props
  return (
    <div className='imgcontainer'>
        <img className='imag' src={data.hdurl} alt="" />
    </div>
  )
}
