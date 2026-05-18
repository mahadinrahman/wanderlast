import DestinationCards from '@/components/DestinationCards';
import React from 'react';

const AdminPage = async() => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const datas=await res.json();
    console.log(datas);
    return (
        <div className='max-w-11/12 mx-auto my-13'>
           <div className='grid grid-cols-3 gap-4 '>
                {
                    datas.map(data=><DestinationCards key={data._id} data={data}></DestinationCards>)
                }
           </div>
        </div>
    );
};

export default AdminPage;