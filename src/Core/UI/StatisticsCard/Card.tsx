import React from 'react'

interface CardProps {
    title: string;
    amount: string | number;
    img: string;
}

const Card: React.FC<CardProps> = ({ title, amount, img }) => {
    return (
        <div className='flex gap-5 bg-gray-500 rounded-lg p-4 w-full sm:w-72 items-center'>
            <div className='rounded-full bg-white flex justify-center items-center w-24 h-24'>
                <img src={img} alt="Müşteri avatarı" className="w-20 h-20 object-cover rounded-full" />
            </div>
            <div className='text-center sm:text-left'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className='text-2xl font-bold'>{amount}</p>
            </div>
        </div>
    )
}

export default Card