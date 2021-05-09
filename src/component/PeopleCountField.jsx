import React from 'react';
import plisImg from '../public/plus.png';
import minusImg from '../public/minus.png';

const PeopleCountField = ({ room, type, handleClicMinusCount, handleClicAddCount, childrenCount, adultCount }) => {
    const PeopleType = {
        adult: {
            title: '大人',
            age: '20+',
            count: adultCount
        },
        child: {
            title: '小孩',
            age: '0+',
            count: childrenCount
        }
    };

    return (
        <div className="adult">
            <div className="adult-left">
                <div className="title">{PeopleType[type].title}</div>
                <div className="description">年齡 {PeopleType[type].age}</div>
            </div>
            <div className="adult-right">
                <div className="img-border" onClick={handleClicMinusCount(type)}>
                    <img src={minusImg}></img>
                </div>
                <input name="adult" min={room.min} max={room.max - PeopleType[type].count} type="number" value={PeopleType[type].count} readOnly />
                <div className="img-border" onClick={handleClicAddCount(type)}>
                    <img src={plisImg}></img>
                </div>
            </div>
        </div>
    )
}

export default PeopleCountField;