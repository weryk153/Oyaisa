import React, { useCallback, useEffect, useState } from 'react';
import Room from './component/Room'
import './styles/global.scss'

const Index = () => {
    const [people, setPeople] = useState(0);
    const [rooms, setRooms] = useState([]);

    const handleDistribution = () => {

    }
    useEffect(() => {
        setRooms([...rooms, {
            min: 0,
            max: 4,
        }, {
            min: 0,
            max: 2,
        }
        ])
    }, []);

    return (
        <div className='container'>
            <header>oyaisa</header>
            <div className="app-wrapper">
                <div className="booking-info">住客人數：3 人 / 2 房</div>
                <div className="room-wrapper">
                    <div className="room-info">
                        房間：2 人
                    </div>
                    {rooms.map((room, index) =>
                        <Room key={`room_${index}`} room={room}></Room>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Index;