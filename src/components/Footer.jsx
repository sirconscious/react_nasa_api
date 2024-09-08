import React from 'react'

export default function Footer(props) {
  const { data, showModel , HandleTogleModel}= props
  return (
    <footer>
        <div className="backgrad"></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>Apod project</h1>
        </div>
        <button onClick={HandleTogleModel}>
        <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
