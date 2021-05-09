import React, { useEffect, useState } from 'react';
import PeopleCountField from './PeopleCountField'

const Room = ({ room, index, handleDistribution }) => {
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const peopleTypeList = ['adult', 'child'];

    const handleClicAddCount = (type) => () => {
        if (room.max > adultCount + childrenCount) {
            if (type === 'adult') {
                setAdultCount(val => val + 1)
            }
            if (type === 'child') {
                setChildrenCount(val => val + 1)
            }
        }
    };

    const handleClicMinusCount = (type) => () => {
        if (type === 'adult') {
            if (adultCount > 0) {
                setAdultCount(val => val - 1)
            }
        }
        if (type === 'child') {
            if (childrenCount > 0) {
                setChildrenCount(val => val - 1)
            }
        }
    };

    useEffect(() => {
        handleDistribution(index, adultCount, childrenCount)
    }, [adultCount, childrenCount]);

    return (
        <div className="people-statistics-wrapper">
            <div className="room-info">
                {`房間：${adultCount + childrenCount} 人`}
            </div>
            {peopleTypeList.map((type) =>
                <PeopleCountField key={type} type={type} room={room} handleClicMinusCount={handleClicMinusCount} handleClicAddCount={handleClicAddCount} adultCount={adultCount} childrenCount={childrenCount} />
            )}
        </div>
    )
}

export default Room;