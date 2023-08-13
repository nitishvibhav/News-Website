import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {

  const [news, setNews] = useState([])
useEffect (()=>{
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad49bef20150494a9a6b9595f0745673")
  .then((res)=>{
    console.log(res.data.articles)
    setNews(res.data.articles)
  })
},[])

  return (
    <>
    <div className='container my-5'>
      <div className='row text-center'>
     {
      news.map((val)=>{
        return(
          <div className='col my-3'>
          <div className="card" style = {{ width:'18rem' }}>
        <img className="card-img-top" src={val.urlToImage}alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{val.title}</h5>
      <p className="card-text">{val.description}</p>
      <a href={val.url} className="btn btn-primary">Link to read main News</a>
    </div>
  </div>
          </div>

        )}
      )
     }
      </div>
    </div>
    </>
  )
}

export default App