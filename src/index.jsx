import React, { useCallback, useEffect, useState } from 'react';
import Room from './component/Room'
import './styles/global.scss'

const Index = () => {
    const [people, setPeople] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [distribution, setDistribution] = useState([]);

    const handleDistribution = (index, adultCount, childrenCount) => {
        distribution[index] = {
            ...distribution[index],
            adult: Number(adultCount),
            child: Number(childrenCount)
        }
        setDistribution([
            ...distribution,
        ])

    }
    console.log(distribution);

    const adultTotal = distribution.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.adult;  // 與前一個值相加
    }, 0);

    const childTotal = distribution.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.child;  // 與前一個值相加
    }, 0);


    useEffect(() => {
        setRooms([...rooms, {
            min: 0,
            max: 4,
        }, {
            min: 0,
            max: 2,
        }])
    }, []);

    useEffect(() => {
        setDistribution([...distribution, {
            adult: 0, child: 0
        }, {
            adult: 0, child: 0
        }])
    }, []);

    useEffect(() => {
        setPeople(adultTotal + childTotal)
    }, [adultTotal, childTotal])

    return (
        <div className='container'>
            <header>oyaisa</header>
            <div className="app-wrapper">
                <div className="booking-info">{`住客人數：${people} 人 / ${rooms.length} 房`}</div>
                <div className="room-wrapper">
                    {rooms.map((room, index) =>
                        <Room key={`room_${index}`} room={room} index={index} distribution={distribution} handleDistribution={handleDistribution}></Room>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index;