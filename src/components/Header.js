import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Redux/appSlice'
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../Redux/searchSlice';

const Header = () => {

  const [searchVideo, setSearchVideo] = useState("");
  const [videoSuggestions, setVideoSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const searchCache = useSelector((store) => store.search)

  const dispatch = useDispatch();

  const getVideoSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchVideo);
    const data = await response.json()
    setVideoSuggestions(data[1])
    dispatch(
      cacheResults(
        {[searchVideo]:data[1]}
        )
      );
  }

  useEffect(()=> {
    const timer = setTimeout(() => {
      if(searchCache[searchVideo]){
        setVideoSuggestions(searchCache[searchVideo])
      }else{
        getVideoSuggestions();
      }
    }, 200)
    return () => {
      clearTimeout(timer);
    };
}, [searchVideo]);

  const toggleClick = () => {
    dispatch(toggleMenu());
  }

  const searchSelected = (search) => {

  }

  return (
    <div className='flex justify-between px-2 m-2 pb-2 shadow-xl'>
      <div className='flex gap-2'>
        <img className='h-8 cursor-pointer'
          onClick={() => toggleClick()}
         alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
         />
        <div>
        <Link to={"/"}>
        <img className='h-8 cursor-pointer'
        at='logo' src='https://ongpng.com/wp-content/uploads/2023/04/3-13.png'
        />
        </Link>
</div>
      </div>
      <div>
        <input className='border border-gray-400 px-2 w-96 rounded-l-3xl'
        type='text'
        value={searchVideo}
        onChange={(e)=> setSearchVideo(e.target.value)}  
        onFocus={()=> setShowSearch(true)}
        onBlur={()=> setShowSearch(false)}
        />
        <button className='px-4 border border-gray-400 rounded-r-full'>
          🔍
        </button>
        { showSearch &&
        <div className=' absolute bg-white w-96 shadow-lg rounded-lg border-gray-100 border'>
      {        
        videoSuggestions.map((search)=>(
            <p onClick={()=>searchSelected(search)} className='hover:bg-gray-200 py-2 px-3'>🔍{search}</p>
          ))
      }
        </div>
        }
      </div>
      <div>
        <img className='h-8'
        alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'/>
      </div>
    </div>
  )
}

export default Header;