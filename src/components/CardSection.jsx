
import ProductCard from '@/app/ProductCard/page'
import React from 'react'

export default async function CardSection() {
      const res = await fetch('http://localhost:5000/latestProducts')
    const data = await res.json()
    console.log(data)
  return (
     <div>
         <div className="text-2xl text-center font-bold">All Products</div>
       <title>Grocery - Latest Products</title>
  
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
         {data.map((product) => (
             <ProductCard key={product._id} product={product} />
         ))}
         </div>
 
     </div>
  )
}
