
import ProductCard from '@/app/ProductCard/page'
import React from 'react'

export default async function CardSection() {
      const res = await fetch('https://grocery-project-server.vercel.app/latestProducts')
    const data = await res.json()
    console.log(data)
  return (
     <div>
         <div className="text-3xl  bg-gradient-to-r from-[#bfe30a] via-[#83e54e] to-[#5bb52a] bg-clip-text text-transparent font-bold text-center">All Products</div>
       <title>Grocery - Latest Products</title>
  
         <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
         {data.map((product) => (
             <ProductCard key={product._id} product={product} />
         ))}
         </div>
 
     </div>
  )
}
