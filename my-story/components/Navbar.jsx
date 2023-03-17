import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return(
    <div className='fixed w-full h-50 shadow-xd z-[100] bg-black'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px=16'>
        
        {/* logo img with next/imgage*/}
        <Image 
        src='/../public/assets/pen.png'
        width='125' height='50'/>
        
        <div>
            <ul className='hidden md:flex text-white'> 
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Home</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Skills</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '>Contact</li>
                </Link>
            </ul>
        </div>
{/* 
        <div>
            <ul>
                <link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </link>
            </ul>
        </div> */}

        </div>
    </div>
    );
}

export default Navbar

