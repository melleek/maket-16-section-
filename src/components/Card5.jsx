import React from 'react'

function Card5({ img, h1, p }) {
    return (
        <div>
            <div className='w-[288px] bg-[#fff] card5 dark:bg-[#232323] rounded-[8px] dark:text-white'>
                <img src={img} alt="" />
                <div className='p-[24px] flex flex-col gap-[5px]'>
                    <h1 className='font-[700]'>{h1}</h1>
                    <p className='text-[14px]'>{p}</p>
                </div>
            </div>
        </div>
    )
}

export default Card5
