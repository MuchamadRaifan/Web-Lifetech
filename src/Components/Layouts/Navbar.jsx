import React from 'react'
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
  return (
     <nav className="bg-white py-[33px] pl-[53px] pr-[86px] shadow">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img className="h-10" src={Logo} alt="Logo" />
            <div className="flex items-center">
              <a href="#" className="mr-10 text-gray-800">
                About
              </a>
              <a href="#" className="mr-10 text-gray-800">
                Tentang Kami
              </a>
              <a href="#" className="mr-10 text-gray-800">
                Layanan
              </a>
              <a href="#" className="mr-10 text-gray-800">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar