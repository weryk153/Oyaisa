import React from 'react';
import plisImg from '../public/plus.png';
import minusImg from '../public/minus.png';

const PeopleCountField = ({ room, type, setAdultCount, setChildrenCount, childrenCount, adultCount }) => {
    const PeopleType = {
        adult: {
            title: '大人',
            age: '20+',
            count: adultCount,
            max: room.max - childrenCount
        },
        child: {
            title: '小孩',
            age: '0+',
            count: childrenCount,
            max: room.max - adultCount
        }
    };

    const handleClicAddCount = (type) => () => {
        if (room.max > adultCount + childrenCount) {
            if (type === 'adult') {
                setAdultCount(val => val + 1);
            }
            if (type === 'child') {
                setChildrenCount(val => val + 1);
            }
        }
    };

    const handleClicMinusCount = (type) => () => {
        if (type === 'adult') {
            if (adultCount > 0) {
                setAdultCount(val => val - 1);
            }
        }
        if (type === 'child') {
            if (childrenCount > 0) {
                setChildrenCount(val => val - 1);
            }
        }
    };

    const handleChangePeopleCount = (e) => {
        if (e.target.name === "adult") {
            if (Number(e.target.value) > PeopleType[type].max) {
                setAdultCount(PeopleType[type].max)
            } else {
                setAdultCount(Number(e.target.value));
            }
        }
        if (e.target.name === "child") {
            if (Number(e.target.value) > PeopleType[type].max) {
                setChildrenCount(PeopleType[type].max)
            } else {
                setChildrenCount(Number(e.target.value));
            }
        }
    }

    return (
        <div className="people-count-field-wrapper">
            <div className="field-left">
                <div className="title">{PeopleType[type].title}</div>
                <div className="description">年齡 {PeopleType[type].age}</div>
            </div>
            <div className="field-right">
                <div className="img-border" onClick={handleClicMinusCount(type)}>
                    <img src={minusImg}></img>
                </div>
                <div className="input-border">
                    <input name={type} min={room.min} max={PeopleType[type].max} type="number" value={PeopleType[type].count} step="1" onChange={handleChangePeopleCount} />
                </div>
                <div className="img-border" onClick={handleClicAddCount(type)}>
                    <img src={plisImg}></img>
                </div>
            </div>
        </div>
    )
}

export default PeopleCountField;