import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return !isMenuOpen ? null : (
    <div className='w-2/12 shadow-lg'>
      <ul className='p-4 m-4'>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className='p-4 m-4'>
      <li className='font-bold'>You ➡️</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch later</li>
      </ul>
      <ul className='p-4 m-4'>
        <li className='font-bold'>Explore ➡️</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default SideBar