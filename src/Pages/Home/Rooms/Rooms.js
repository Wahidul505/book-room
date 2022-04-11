import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center text-gray-700 mb-4'>Book Rooms</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room={room}
                    />)
                }
            </div>
        </div>
    );
};

export default Rooms;