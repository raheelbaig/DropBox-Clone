import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dropBoxIcon from "@/public/dropbox.svg"
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { ThemeToggler } from './ui/ThemeToggler'

function Header() {
  return (
    <header className='flex items-center justify-between pt-2'>
        <Link href="/" className='flex items-center justify-center py-2 space-x-2 pl-4'>
            <Image 
                src={dropBoxIcon}
                alt='dropbox-icon'
                className=''
                width={40}
                height={40}
            />
            <h1 className='font-bold text-xl'>Dropbox</h1>
        </Link>

        <div className='flex px-5 space-x-4 items-center'>
            {/* Theme toggler */}
            <ThemeToggler />

            <UserButton afterSignOutUrl='/' />

            <SignedOut>
                <SignInButton afterSignInUrl='/dashboard' mode='modal' />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header