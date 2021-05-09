import React, { useCallback, useEffect, useState } from 'react';

const Room = ({ room, index, handleDistribution }) => {
    const [adultCount, setAdultCount] = useState('0');
    const [childrenCount, setChildrenCount] = useState('0');
    // const [totalCount, setTotalCount] = useState(0);

    const handleChangeCount = (e) => {
        if (e.target.name === "adult") {
            setAdultCount(e.target.value);
        }
        if (e.target.name === "children") {
            setChildrenCount(e.target.value);
        }
        handleDistribution(index, adultCount, childrenCount)
    }
    useEffect(() => {
        handleDistribution(index, adultCount, childrenCount)
    }, [adultCount, childrenCount])
    // useEffect(() => {
    //     setTotalCount(Number(adultCount) + Number(childrenCount))
    // }, [Number(adultCount), Number(childrenCount)])

    // console.log(totalCount);

    return (
        <div className="people-statistics-wrapper">
            <div className="room-info">
                房間：2 人
                    </div>
            <div className="adult">
                <div className="adult-left">
                    <div>大人</div>
                    <div>年齡 20+</div>
                </div>
                <div className="adult-right">
                    <div>-</div>
                    <input name="adult" min={room.min} max={room.max - childrenCount} type="number" value={adultCount} onChange={handleChangeCount} />
                    <div>+</div>
                </div>
            </div>
            <div className="adult">
                <div className="adult-left">
                    <div>小孩</div>
                    <div>年齡 0+</div>
                </div>
                <div className="adult-right">
                    <div>-</div>
                    <input name="children" min={room.min} max={room.max - adultCount} type="number" value={childrenCount} onChange={handleChangeCount} />
                    <div>+</div>
                </div>
            </div>
        </div>
    )
}

export default Room;