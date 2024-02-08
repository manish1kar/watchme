import React from 'react'
import ButtonList from './ButtonList'
import useContent from '../Hooks/useContent'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainContent = () => {

 // const isSearched = useSelector((store)=> store.app.isSearched);

  const videos = useContent();

  if(videos ===null) return <h1>Loading...</h1>

  return (
    <div>
        <ButtonList/>
        <div className='flex flex-wrap w-full justify-center'>
       { 
        (
          videos.map((video) => (
            <Link to={"/watch?v="+video.id}><VideoCard info = {video}/></Link>
          ))
        )
}
        </div>
    </div>
  )
}

export default MainContent