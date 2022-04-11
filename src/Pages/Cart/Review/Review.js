import React from 'react';
import useRooms from '../../../hooks/useRooms';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const rooms = useRooms();
    return (
        <div>
            <div>
                {
                    rooms.map(room => <ReviewItem key={room.id} room={room}/>)
                }
            </div>
        </div>
    );
};

export default Review;