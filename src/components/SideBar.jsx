import React from 'react'

export default function SideBar(props) {
  const {data, showModel , HandleTogleModel} = props
  return (
    <div className='sid' >
      <h2>{data?.title}</h2>
      <div className="bgoverlay" onClick={HandleTogleModel}></div>
      <div className='sidcontent'>
        <p>Description</p>
        <p>{data?.explanation}</p>
      </div>
      <button >
      <i class="fa-solid fa-right-long"></i>
      </button>
    </div>
  )
}
