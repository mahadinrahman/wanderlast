'use client'
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { useState } from "react";

const BookingCards = ({ data }) => {
    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;


    const [departureDate, setDeparturedate] = useState(null);


    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: data._id,
            destinationName: data.destinationName,
            price: data.price,
            imageUrl: data.imageUrl,
            country: data.country,
            departureDate: new Date(departureDate)

        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)

        })
        const bookings=await res.json();
        console.log(bookings);
    }

    return (
        <div>
            <div className="p-4 border shadow-xl">
                <p className="pb-3">Starting Form</p>
                <p><span className="text-xl text-cyan-500 font-bold my-2.5">${data.price}/</span>per person</p>
                <DateField className="w-[256px]" name="date" onChange={setDeparturedate}>
                    <Label className="mt-2">Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBooking} className={'w-full rounded-none bg-cyan-500 mt-5 mb-3'}>Book Now</Button>
            </div>
        </div>
    );
};

export default BookingCards;