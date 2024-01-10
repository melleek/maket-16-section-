import React from 'react'

function Card2({img, h1, p}) {
  return (
    <div className='flex items-start flex-col gap-[5px]'>
        <img src={img} alt="" />
        <h1 className='text-[#5f5f5f]'>{h1}</h1>
        <p className='font-[700]'>{p}</p>
    </div>
  )
}

export default Card2
