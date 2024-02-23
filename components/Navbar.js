'use client'

import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const item = useSelector((state)=>state.cart)
  
  return (
    <nav className='flex flex-row px-2 mx-3 space-x-2 justify-center   text-4xl'>
        <ul className='flex  '>
        <li>
          <Link href="/">Home</Link>
        </li> 
        </ul>
        <ul>
        <li>
          <Link href="/cart">cart</Link>
        </li> 
        </ul>
        <ul>
        <li>
        <span>Cart: {item.length}</span>

        </li> 
        </ul>
    </nav>
  )
}
