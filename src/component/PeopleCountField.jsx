import React, { useCallback } from 'react';
import LeftField from './common/LeftField'
import RightField from './common/RightField'

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

    const handleClicAddCount = useCallback(type => () => {
        if (room.max > adultCount + childrenCount) {
            if (type === 'adult') {
                setAdultCount(val => val + 1);
            }
            if (type === 'child') {
                setChildrenCount(val => val + 1);
            }
        }
    }, [adultCount, childrenCount]);

    const handleClicMinusCount = useCallback(type => () => {
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
    }, [adultCount, childrenCount]);

    const handleChangePeopleCount = useCallback((event) => {
        if (event.target.name === "adult") {
            if (Number(event.target.value) > PeopleType[type].max) {
                setAdultCount(PeopleType[type].max)
            } else {
                setAdultCount(Number(event.target.value));
            }
        }
        if (event.target.name === "child") {
            if (Number(event.target.value) > PeopleType[type].max) {
                setChildrenCount(PeopleType[type].max)
            } else {
                setChildrenCount(Number(event.target.value));
            }
        }
    }, [event.target.value]);

    return (
        <div className="people-count-field-wrapper">
            <LeftField title={PeopleType[type].title} age={PeopleType[type].age} />
            <RightField type={type} min={room.min} max={PeopleType[type].max} value={PeopleType[type].count} handleChangePeopleCount={handleChangePeopleCount} handleClicMinusCount={handleClicMinusCount} handleClicAddCount={handleClicAddCount} />
        </div>
    )
}

export default PeopleCountField;