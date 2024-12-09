import { Services, AddServices } from '@/Core/index'
import React, { useState } from 'react'

const services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='p-10'>
            <div className='text-center'>
                <h1 className="text-3xl font-semibold text-gray-800">Hizmetler</h1>
            </div>
            <div className="flex justify-end mb-2">
                <ul className="cursor-pointer text-xl p-3 bg-green-500 text-white text-center rounded-full shadow-lg transform transition-all hover:scale-105 hover:bg-green-600 active:bg-green-700 hover:shadow-xl"
                    onClick={() => { setIsModalOpen(true) }}
                >
                    <li>Hizmet Ekle</li>
                </ul>
            </div>
            <Services />
            <AddServices
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} />
        </div>
    )
}

export default services
