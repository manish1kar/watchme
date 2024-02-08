import React from 'react'

const VideoCard = ({info}) => {

  const {snippet, statistics} = info;

  const {title, channelTitle, publishedAt, thumbnails} = snippet;

  const {viewCount} = statistics;

  //const publish = new Date(publishedAt);
  
  return (
    <div className='p-2 m-2 w-60 shadow-md'>
        <div>
            <img className='h-28 m-1 rounded-md'
            alt='thumbnail' src={thumbnails?.medium?.url}/>
        </div>
        <div className='p-1 m-1'>
        <h3 className='font-extrabold text-gray-600'>{title}</h3>
        <h2 className='font-bold text-gray-600'>{channelTitle}</h2>
        <p className='font-normal text-gray-500'>{viewCount} view <span>{publishedAt}</span></p>
        </div>
        </div>
  )
}

export const videoCardEnh = (VideoCard) => {
  return({info})=> {
    return (
      <VideoCard/>
    )
  }
}

export default VideoCard