import React, { memo } from 'react';

const LeftField = ({ title, age }) => (
    <div className="field-left">
        <div className="title">{title}</div>
        <div className="description">年齡 {age}</div>
    </div>
)

export default memo(LeftField);