'use client'
import { useEffect, useState } from "react";
import Find from "../components/Find";
import Product from "../components/Product";
import Serach from "../components/Serach";



export default function page() {
const [data , setdata] = useState([]);


  return (
    <>
  <div className="flex  justify-center  items-center  flex-col  ">
  
    <div >
      <Find data={data}/>
      <Serach/>
      <Product/>
      
    </div>
  </div>
    </>
  )
}
