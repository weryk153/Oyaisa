import React from 'react';
import Room from './Room';

const RoomsContainer = ({ rooms, distribution, handleDistribution }) => {
    return (
        <div className="room-wrapper">
            {rooms.map((room, index) =>
                <Room key={`room_${index}`} room={room} index={index} distribution={distribution} handleDistribution={handleDistribution}></Room>
            )}
        </div>
    )
}

export default RoomsContainer;