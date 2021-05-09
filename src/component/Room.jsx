import React, { useEffect, useState } from 'react';
import PeopleCountField from './PeopleCountField'
import RoomInfo from './RoomInfo'

const Room = ({ room, index, handleDistribution }) => {
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const peopleTypeList = ['adult', 'child'];

    useEffect(() => {
        handleDistribution(index, adultCount, childrenCount)
    }, [adultCount, childrenCount]);

    return (
        <div className="people-statistics-wrapper">
            <RoomInfo adultCount={adultCount} childrenCount={childrenCount} />
            {peopleTypeList.map((type) =>
                <PeopleCountField key={type} type={type} room={room} setAdultCount={setAdultCount} setChildrenCount={setChildrenCount} adultCount={adultCount} childrenCount={childrenCount} />
            )}
        </div>
    )
}

export default Room;