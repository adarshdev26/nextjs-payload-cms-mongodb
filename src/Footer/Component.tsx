import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    // <footer className="mt-auto border-t border-border bg-white dark:bg-card text-white">
    //   <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
    //     <Link className="flex items-center" href="/">
    //       <Logo />
    //     </Link>

    //     <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
    //       <ThemeSelector />
    //       <nav className="flex flex-col md:flex-row gap-4">
    //         {navItems.map(({ link }, i) => {
    //           return <CMSLink className="text-black" key={i} {...link} />
    //         })}
    //       </nav>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-white border-t border-blue-900 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-black">
        {/* Brand + Description */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/media/codexstream.png" alt="CodeXstream Logo" width={130} height={150} />
            {/* <span className="text-xl font-bold text-[#0963a4]">CodeXstream</span> */}
          </Link>
          <p className="text-sm leading-6 text-[#000]">
            CodeXstream specializes in development and design services. Our team of experts creates
            custom solutions that help businesses thrive online.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-[#0963a4] text-[20px] font-[500] mb-4">USEFUL LINKS</h4>
          <ul className="space-y-2 text-sm text-[#000]">
            {navItems.map((item, index) => (
              <li key={index}>
                <CMSLink className="hover:text-blue-600 transition-colors" {...item.link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Office Info */}
        <div>
          <h4 className="text-[#0963a4] text-[20px] font-[500]  mb-4">OFFICE</h4>
          <p className="text-sm text-[#000] leading-6">
            Office No.50, D-185
            <br />
            Codexstream Phase 8B,
            <br />
            Industrial Area, Mohali
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#0963a4] text-[20px] font-[500]  mb-4">CONTACTS</h4>
          <p className="text-sm text-[#000] leading-6">
            (+91) 172-4000151
            <br />
            info@codexstream.com
          </p>
        </div>
      </div>
    </footer>
  )
}
