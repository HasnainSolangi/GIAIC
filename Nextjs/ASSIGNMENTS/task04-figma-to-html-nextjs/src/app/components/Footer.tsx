import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-8 pb-16 bg-[#CFA6A61C]">
      <div className="flex md:text-3xl justify-center md:space-x-10 space-x-4 text-[30px]">
        <Link
          href="https://www.facebook.com/HasnainAhmed90s"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/hasnainahmed90s/"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://twitter.com/HasnainAhmed90s"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hasnainahmed90s/"
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]"
        >
          <FaLinkedin />
        </Link>
      </div>
      <p className="text-center sm:text-[22px] leading-8 text-sm font-semibold pt-6">
        <b>Hasnain</b> Copyright 2020 All rights reserved
      </p>
    </div>
  )
}

export default Footer
