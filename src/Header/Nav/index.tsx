'use client'

import React, { useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import QuoteModal from '@/components/QuoteModal'
//import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="flex gap-3 items-center">
        {navItems.map(({ link }, i) => {
          return <CMSLink className="text-black font-bold" key={i} {...link} appearance="link" />
        })}
        <Link href="/search">
          <span className="sr-only">Search</span>
          {/* <SearchIcon className="w-5 text-primary" /> */}
        </Link>
        <button onClick={() => setOpen(true)} className="bg-black text-white rounded-2xl p-3">
          GET A QUOTE
        </button>
        {open && <QuoteModal onClose={() => setOpen(false)} />}
      </nav>
    </>
  )
}
