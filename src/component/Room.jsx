import React, { useCallback, useEffect, useState } from 'react';
import plisImg from '../public/plus.png'
import minusImg from '../public/minus.png'

const Room = ({ room, index, handleDistribution }) => {
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);

    const handleClicAddCount = (type) => () => {
        if (room.max > adultCount + childrenCount) {
            if (type === 'adult') {
                setAdultCount(val => val + 1)
            }
            if (type === 'child') {
                setChildrenCount(val => val + 1)
            }
        }
    }

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
    }

    useEffect(() => {
        handleDistribution(index, adultCount, childrenCount)
    }, [adultCount, childrenCount])

    return (
        <div className="people-statistics-wrapper">
            <div className="room-info">
                {`房間：${adultCount + childrenCount} 人`}
            </div>
            <div className="adult">
                <div className="adult-left">
                    <div className="title">大人</div>
                    <div className="description">年齡 20+</div>
                </div>
                <div className="adult-right">
                    <div className="img-border" onClick={handleClicMinusCount('adult')}>
                        <img src={minusImg}></img>
                    </div>
                    <input name="adult" min={room.min} max={room.max - childrenCount} type="number" value={adultCount} readOnly />
                    <div className="img-border" onClick={handleClicAddCount('adult')}>
                        <img src={plisImg}></img>
                    </div>
                </div>
            </div>
            <div className="adult">
                <div className="adult-left">
                    <div className="title">小孩</div>
                    <div className="description">年齡 0+</div>
                </div>
                <div className="adult-right">
                    <div className="img-border" onClick={handleClicMinusCount('child')}>
                        <img src={minusImg}></img>
                    </div>
                    <input name="children" min={room.min} max={room.max - adultCount} type="number" value={childrenCount} readOnly />
                    <div className="img-border" onClick={handleClicAddCount('child')}>
                        <img src={plisImg}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room;