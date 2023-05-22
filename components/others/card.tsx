import React from 'react'

type cardProps  = {
  product:   {
    name:string,
    description:string,
    image:string,
    price:number,
    promotion:number,
    promotionPercents:number
  },
}


const Card = ({product} :cardProps) => {
  let promotion:boolean = product.promotion!=0

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img className="h-48 w-full object-cover object-center" src={product.image} alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
    <div className="flex items-center">
      {promotion != false? <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{product.promotion+" MMK"}</p> :""}
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{product.price+" MMK"}</p>
      {promotion != false? <p className="ml-auto text-base font-medium text-green-500">{product.promotionPercents+"% OFF"}</p>:""}
    </div>
  </div>
</div>
  )
}

export  {Card}