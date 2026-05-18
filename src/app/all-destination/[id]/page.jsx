import { Button, IconCalendar } from '@heroui/react';
import { ArrowLeft, ArrowUpRight, MapPin, PencilToLine } from '@gravity-ui/icons';
import Link from 'next/link';
import Edit from '@/components/Edit';
import Delete from '@/components/Delete';
import BookingCards from '@/components/BookingCards';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
     const {token} =await auth.api.getToken({
       headers:await headers()
     })
     console.log(token);


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
        headers:{
            authorization : `Bearer ${token}`
        }
    });
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <div className='max-w-6/12 mx-auto  my-5 flex justify-between'>
                <Link href={`/all-destination`}><Button variant='outline' className='flex gap-1 items-center '><ArrowLeft></ArrowLeft>Back To All-Destination</Button></Link>
                <div className='flex gap-2'>
                    <Delete data={data}></Delete>
                    <Edit data={data}></Edit>
                </div>
            </div>

            <div className='max-w-6/12 mx-auto my-5'>

                <div className='p-3 shadow-2xl  rounded-xl'>
                    <img src={data.imageUrl} alt="image" className='w-150 rounded-lg mx-auto' />

                    <p className='flex gap-1 items-center mt-2'><MapPin></MapPin>{data.country}</p>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-xl font-semibold mt-2.5 text-amber-900'>{data.destinationName}</h2>
                            <p className='flex gap-1 items-center mb-3'><IconCalendar></IconCalendar>{data.duration}</p>
                            <h3 className=' font-bold text-amber-900'>OverView :</h3>
                            <p className='mb-2'>{data.description}</p>
                        </div>
                        <div>
                            <BookingCards data={data}></BookingCards>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsPage;