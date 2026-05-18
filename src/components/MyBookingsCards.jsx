'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import DeleteBooking from './DeleteBooking';
import { redirect } from 'next/navigation';

const MyBookingsCards = ({ data }) => {
    const handleCancleBooking=async()=>{
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${data._id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        const deletedata=await res.json();
        redirect('/bookings');
    }
    return (
        <div className='w-10/12 mx-auto p-5 border shadow-2xl'>
            <div className='flex gap-9 '>
                <img src={data.imageUrl} alt="image" width={350} />
                <div className='pt-4'>
                    <h3 className='text-2xl font-semibold'>{data.destinationName} </h3>
                    <p className=''> {new Date(data.departureDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                    <p className='my-2'><strong>Bokking Id:</strong> {data.userId}</p>
                    <p className='text-3xl font-semibold text-cyan-500'>${data.price}</p>
                   
                   <DeleteBooking  handleCancleBooking={handleCancleBooking} data={data}></DeleteBooking>
                </div>
            </div>
        </div>
    );
};

export default MyBookingsCards;