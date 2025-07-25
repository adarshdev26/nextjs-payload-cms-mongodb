import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'

const AnnouncementBar = () => {
  return (
    <div className="bg-[#0963a4] text-white text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">
        {/* Left side: Phone + Email */}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white text-xs" />
            <span>
              {' '}
              <a href="tel:+911724000151">(+91) 172-4000151</a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white text-xs" />
            <span>
              {' '}
              <a href="mailto:info@codexstream.com"> info@codexstream.com</a>
            </span>
          </div>
        </div>

        {/* Right side: Socials */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <span>Follow Us:</span>
          <a href="#" className='text-base' aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-blue-300" />
          </a>
          <a href="#" className='text-base' aria-label="Instagram">
            <FaInstagram className="text-white hover:text-blue-300" />
          </a>
          <a href="#" className='text-base' aria-label="Twitter">
            <FaTwitter className="text-white hover:text-blue-300" />
          </a>
          <a href="#" className='text-base' aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-blue-300" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
