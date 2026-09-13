import React from 'react';
import type { Icard } from '../../Type/cardType';
import { FaStar } from 'react-icons/fa';

interface AvailableProps {
  card: Icard[];
}

const Available = ({card}:AvailableProps) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-10">
            {
                card.map((card) => {
                    return <div>
                        <div className='border border-gray-100 rounded-2xl p-6 shadow-xs'>
                            <div className='flex justify-between'>
                                <div className='w-8'><img src={card.icon} alt="" /></div>
                                <div className='flex items-center 0'><p className='bg-blue-100 border border-blue-300 
                                rounded-2xl px-4 py-1 text-xs '>{card.badge}</p></div>
                            </div>
                            <h2 className='mt-5 text-2xl font-semibold'>{card.name}</h2>
                            <p className='mt-2 font-thin text-sm'>{card.description}</p>
                            <hr className="text-gray-100 mt-6" />
                            <div className='flex justify-between items-center text-xs mt-2'>
                                <p className='bg-gray-100 p-1 rounded '>{card.category}</p>
                                <p className='font-thin'>{card.difficulty}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar />
                                    <p>{card.rating}</p>
                                </div>
                            </div>
                            <div className='flex justify-center bg-black rounded-[10px] py-2 mt-4'>
                                <button className='text-white text-sm'>Add to Stack</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Available;