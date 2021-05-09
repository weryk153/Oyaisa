import React, { useCallback, useEffect, useState } from 'react';
import RoomsContainer from './component/RoomsContainer'
import BookingInfo from './component/BookingInfo'
import Header from './component/Header';
import './styles/global.scss';

const Index = () => {
    const [people, setPeople] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [distribution, setDistribution] = useState([]);

    const handleDistribution = (index, adultCount, childrenCount) => {
        distribution[index] = {
            ...distribution[index],
            adult: adultCount,
            child: childrenCount
        }
        setDistribution([
            ...distribution,
        ])
    };

    const peopleSums = distribution.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.adult + currentValue.child
    }, 0);

    const roomSums = distribution.reduce((accumulator, currentValue) => {
        if (currentValue.adult > 0 || currentValue.child > 0) {
            return accumulator + 1;
        } else {
            return accumulator
        }
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
        setPeople(peopleSums)
    }, [peopleSums]);

    return (
        <div className='container'>
            <Header />
            <div className="app-wrapper">
                <BookingInfo people={people} roomSums={roomSums} />
                <RoomsContainer rooms={rooms} distribution={distribution} handleDistribution={handleDistribution} />
            </div>
        </div>
    )
}

export default Index;