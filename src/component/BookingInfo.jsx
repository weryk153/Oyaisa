import React, { memo } from 'react';

const BookingInfo = ({ people, roomSums }) =>
    (
        <div className="booking-info">{`住客人數：${people} 人 / ${roomSums} 房`}</div>
    )


export default memo(BookingInfo);