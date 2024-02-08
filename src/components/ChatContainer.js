import React from 'react'

const ChatContainer = ({name, message}) => {

  return (
        <div className='flex items-center p-2 shadow-md'>
            <img className='h-8'
            alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'/>

        <span className='text-sm pr-2 font-bold'>{name}</span>
        <span className=''>{message}</span>
        </div>
  )
}

export default ChatContainer