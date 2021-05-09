import React, { memo } from 'react';

const RoomInfo = ({ adultCount, childrenCount }) => {
    return (
        <div className="room-info">
            {`房間：${adultCount + childrenCount} 人`}
        </div>
    )
}

export default memo(RoomInfo);