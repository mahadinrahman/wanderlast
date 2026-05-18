import { IconCalendar } from '@heroui/react';
import { ArrowUpRight, MapPin } from '@gravity-ui/icons';
import Link from 'next/link';

const DestinationCards = ({ data }) => {

    return (
        <div>
      
            <div className='p-3 shadow-2xl h-full rounded-xl'>
                <img src={data.imageUrl} alt="image" className='h-67 rounded-lg'/>

                <p className='flex gap-1 items-center mt-2'><MapPin></MapPin>{data.country}</p>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-xl font-semibold mt-2.5 text-amber-900'>{data.destinationName}</h2>
                        <p className='flex gap-1 items-center mb-3'><IconCalendar></IconCalendar>{data.duration}</p>
                    </div>
                    <h3 className='my-2.5'><span className='text-xl font-medium'>${data.price}/</span>person</h3>
                </div>
                <Link href={`/all-destination/${data._id}`}><p className='flex items-center gap-1 text-blue-500 mb-3'><ArrowUpRight></ArrowUpRight>Book Now</p></Link>
            </div>



        </div>
    );
};

export default DestinationCards;