import React from 'react'

const Cards = ({item}) => {
  return (
    <>
    <div className='mt-4 my-4'>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark-border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-800 ">Buy</div>
    </div>
  </div>
</div>
      
    </div>
    </>
  )
}

export default Cards
