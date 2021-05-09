import React, { memo } from 'react';
import plisImg from '../../public/plus.png';
import minusImg from '../../public/minus.png';

const RightField = ({ type, min, max, value, handleClicMinusCount, handleClicAddCount, handleChangePeopleCount }) => (
    <div className="field-right">
        <div className="img-border" onClick={handleClicMinusCount(type)}>
            <img src={minusImg}></img>
        </div>
        <div className="input-border">
            <input name={type} min={min} max={max} type="number" value={value} step="1" onChange={handleChangePeopleCount} />
        </div>
        <div className="img-border" onClick={handleClicAddCount(type)}>
            <img src={plisImg}></img>
        </div>
    </div>
)


export default memo(RightField);