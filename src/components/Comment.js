import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='p-2 m-2 bg-gray-200 flex'>
            <img className='h-8 mt-2'
            alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'/>
        <div className=' '>
        <p className=''>{name}</p>
        <p className='px-3'>{text}</p>
        </div>
    </div>
  )
}

export default Comment