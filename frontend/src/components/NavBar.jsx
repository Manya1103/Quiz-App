import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-row bg-[#0c0620] items-center justify-between p-1">
      <img src={Logo} onClick={() => navigate('/')} alt="Logo" className="lg:w-16 w-16 cursor-pointer" />
      <button className='bg-white font-bold rounded-full text-black hover:bg-gradient-to-b from-[#13027e] to-[#3f2182] hover:text-white px-4 py-2 border'>
        Contact Us
      </button>
    </div>
  )
}

export default NavBar