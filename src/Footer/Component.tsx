import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import logo from '../../src/assets/codexstream.png'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <>
      <footer className="bg-white  py-5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-black">
          {/* Brand + Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="CodeXstream Logo" width={180} height={200} />
              {/* <span className="text-xl font-bold text-[#0963a4]">CodeXstream</span> */}
            </Link>
            <p className="text-sm leading-6 text-[#000]">
              CodeXstream specializes in development and design services. Our team of experts
              creates custom solutions that help businesses thrive online.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-[#0963a4] text-[20px] font-[500] mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm text-[#000]">
              {navItems.map((item, index) => (
                <li key={index}>
                  <CMSLink className="hover:text-[#0963a4] transition-colors" {...item.link} />
                </li>
              ))}
            </ul>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="text-[#0963a4] text-[20px] font-[500]  mb-4">OFFICE</h4>
            <p className="text-[15px] text-[#000] leading-6">
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
            <p className="text-[15px] text-[#000] leading-6 ">
              <a className="hover:text-[#0963a4]" href="tel:+911724000151">
                (+91) 172-4000151
              </a>
              <br />
              <a className="hover:text-[#0963a4]" href="mailto:info@codexstream.com">
                {' '}
                info@codexstream.com
              </a>
              {/* <ThemeSelector /> */}
            </p>
          </div>
        </div>
      </footer>
      <div className="mt-10 border-t p-[15px] border-gray-200 text-center text-sm text-gray-600 bg-[#0963a4]">
        <p className="text-[#fff]">
          &copy; {new Date().getFullYear()} Codexstream | All rights reserved.
        </p>
      </div>
    </>
  )
}
