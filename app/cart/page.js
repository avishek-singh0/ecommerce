'use client'
import { remove } from './../../Redux/CartSlice'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart); 



  const handlecart =(productid)=>{
    console.log(productid)
 dispatch(remove(productid))

  }
  return (
    <div>
      <h3>Cart page</h3>
      <div>
        {
          products.map(product => (
            <div>
              <ul>
    <li >
    <img className=" h-60 w-60"  src={product.image} alt={product.title} />
        <p className='text-slate-200 mt-2 break-all'>{product.title}</p>
        <h4 className='text-slate-200 '>{product.price}</h4>
        <h4 className='text-slate-200 '>{product.rating.rate}</h4>
        <button className='text-cyan-600 ' onClick={()=>handlecart(product.id)}>remove</button>
    </li>
</ul>
              </div>
          ))
        }
      </div>
    </div>
  );
}
