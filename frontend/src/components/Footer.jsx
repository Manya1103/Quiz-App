import React from 'react'
import QuizImage from '../assets/quiz.png'
import { FaFacebook } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#13027e] to-[#3f2182] text-white p-10'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-white pb-8">
          <div className="mb-6 lg:mb-0">
            <img src={QuizImage} alt="QuizImage" className="w-20" />
          </div>
          <div className="flex space-x-12 lg:space-x-48 mb-6 lg:mb-0">
            <div>
              <h4 className='font-semibold mb-2 underline'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:underline'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    How to Play
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-2 underline'>Support</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:underline'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="flex flex-col space-x-4">
            <p className='mb-2 items-center justify-center flex underline'>Connect with Us</p>
            <div className="flex flex-row space-x-4">
              <a href='https://www.facebook.com/' className='w-10 h-10 rounded-full flex items-center justify-center'>
                <FaFacebook className='text-4xl' />
              </a>
              <a href='https://twitter.com/' className='w-10 h-10 rounded-full flex items-center justify-center'>
                <FaSquareXTwitter className='text-4xl' />
              </a>
              <a href='https://www.instagram.com/' className='w-10 h-10 rounded-full flex items-center justify-center'>
                <FaInstagram className='text-4xl' />
              </a>
            </div>

          </div>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row items-center justify-between">
          <p className='text-sm text-center lg:text-left'>
            Copyright © 2025 Quiz App. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href='#' className='text-sm hover:underline'>
              Terms & Conditions
            </a>
            <a href='#' className='text-sm hover:underline'>
              Privacy Policy
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer