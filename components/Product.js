'use client'
import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { add } from '@/Redux/CartSlice';

export default function Product() {

    const [products,setproducts]  = useState([]);
    const dispatch =useDispatch();

useEffect(()=>{
const fetcproduct = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)
    setproducts(data)
}
fetcproduct();

},[])

const handlecart =(product)=>{
    console.log('add')
    console.log(product)
dispatch(add(product))
}



  return (
    <div className='mt-5 flex flex-wrap flex-row justify-start items-stretch '>
    {

products.map(product =>(
   <div key={product.id} className='  text-slate-200 '>
<ul>
    <li >
    <img className=" h-60 w-60"  src={product.image} alt={product.title} />
        <p className='text-slate-200 mt-2 break-all'>{product.title}</p>
        <h4 className='text-slate-200 '>{product.price}</h4>
        <h4 className='text-slate-200 '>{product.rating.rate}</h4>
        <button className='text-cyan-600 ' onClick={()=>handlecart(product)}>Add to cart</button>
    </li>
</ul>

   </div>

) )

    }
    </div>


  )
}
