import React from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Loading from './components/loading'
import { useState } from 'react'
import { useEffect } from 'react'
export default function App() {
  const [data,setData] = useState(null)
  const [loading,setloading] = useState(false)
  const [showModel , setShowModel] = useState(false)
  const NasaApiKey = import.meta.env.VITE_NASA_API_KEY
  function HandleTogleModel() {
   setShowModel(!showModel) 
  }
  useEffect(()=>
    {
     async function fetchApiData() {
        const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NasaApiKey}`
        try{
          const res = await fetch(url)
          const ApiData = await res.json()
          setData(ApiData)
        }catch(err){
          console.log(err.message)
        }
     } 
     fetchApiData()
    }
    
  ,
    [])
  return (
    <>
     {data ? (<Main data={data} />):
     <Loading></Loading>
     }
      {showModel &&(<SideBar data={data} showModel={showModel} HandleTogleModel={HandleTogleModel}></SideBar>)}
{data &&(<Footer data={data} showModel={setShowModel} HandleTogleModel={HandleTogleModel}></Footer>)}  

</>
)
}
