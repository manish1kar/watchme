import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import useContent from '../Hooks/useContent';
import ChatContainer from './ChatContainer';
import { Namegenerate, randomString } from '../utils/helper';
import { addMessage } from '../Redux/chatSlice';


const WatchPage = () => {

    const videos = useContent();
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const [liveMsg, setLiveMsg] = useState("");

    const messages = useSelector((store)=> store.chat.messages);

    useEffect(()=> {
      const i = setInterval(()=> {
          dispatch(addMessage({
            name : Namegenerate(),
            message : randomString(20)
          }))
          }, 2000
      );

     return (()=> clearInterval(i));
  }, [])

    if(videos ===null) return <h1>Loading...</h1>


  return (
    <div className='flex w-full'>
      <div className='flex flex-col w-8/12'>
        <iframe className='px-4 m-2'
        // width="1000"
        height="500" 
        src={"https://www.youtube.com/embed/"+searchParam.get("v")} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        >
        </iframe>
        <div className=''>
         <CommentContainer/>
        </div> 
      </div>  
      <div className='h-[500px] border w-4/12 m-2 bg-slate-100 rounded-lg '>
      <div className='h-[460px] overflow-y-scroll flex flex-col-reverse'>
      {
        messages.map((message) => (
          <ChatContainer
          name = {message.name}
          message = {message.message}
        />
        ))
      }
      </div>
      <form className='p-1 flex h-[40px] shadow-sm justify-between'
      onSubmit={(e)=> 
      {
        e.preventDefault();
        dispatch(addMessage({
          name : "manish wankar",
          message : liveMsg,
        }))
        setLiveMsg("");
      }
      }>
        <input className='w-80 px-2' type='text' value={liveMsg} onChange={(e)=> setLiveMsg(e.target.value)}/>
        <button className='bg-green-700 px-4 rounded-sm text-white'>Send</button>
      </form>
      </div>
    </div>
  )
}

export default WatchPage;