'use client'

import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import QuoteModal from '@/components/QuoteModal'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="">
      {/* Desktop Nav */}
      <nav className="gap-5 items-center hidden md:flex">
        {navItems.map(({ link }, i) => (
          <CMSLink className="leading-[40px] pl-[8px] font-bold pr-[8px] text-[#333] uppercase text-left text-[15px] hover:text-[#0963a4] active:text-[#0963a4]" key={i} {...link} />
        ))}
        <Link href="/search">
          <span className="sr-only">Search</span>
          {/* Icon here if needed */}
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] hover:from-[#0963a4] hover:to-[#0963a4] text-white rounded-[50px] px-4 py-3 transition-all duration-500 ease-in-out"
        >
          GET A QUOTE
        </button>
      </nav>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 bg-white shadow-md flex flex-col items-start px-4 py-6 gap-4 md:hidden z-50 w-full ">
          {navItems.map(({ link }, i) => (
            <CMSLink className="text-black font-semibold hover:text-[#0963a4]" key={i} {...link} />
          ))}
          <Link href="/search" className="text-black hover:text-[#0963a4]">
            Search
          </Link>
          <button
            onClick={() => {
              setOpen(true)
              setMenuOpen(false)
            }}
            className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] hover:from-[#0b7aba] hover:to-[#4ab8f5] text-white rounded-[50px] p-3 w-full transition-all duration-500 ease-in-out"
          >
            GET A QUOTE
          </button>
        </div>
      )}

      {/* Modal */}
      {open && <QuoteModal onClose={() => setOpen(false)} />}
    </header>
  )
}
