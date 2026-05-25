import MyBookingsCards from '@/components/MyBookingsCards';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const BookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
     console.log(session);
    const user=session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,{
         cache: "no-store",
    });
    const datas =await res.json();
    console.log(datas);
    return (
        <div className='mb-6'>
            <h3 className='text-center font-bold text-3xl py-5'>My Bookings</h3>
            <div className='space-y-6 '>
                {
                   datas.map(data=><MyBookingsCards key={data._id} data={data}></MyBookingsCards>)
                }
            </div>
        </div>
    );
};

export default BookingsPage;