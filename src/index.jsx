import React from 'react';
import './styles/global.scss'

const Index = () => {

    return (
        <div className='container'>
            <header>oyaisa</header>
            <div className="app-wrapper">
                <div className="booking-info">住客人數：3 人 / 2 房</div>
                <div className="room-wrapper">
                    <div className="room-info">
                        房間：2 人
                    </div>
                    <div className="people-statistics-wrapper">
                        <div className="adult">
                            <div className="adult-left">
                                <div>大人</div>
                                <div>年齡 20+</div>
                            </div>
                            <div className="adult-right">
                                <div>+</div>
                                <input type="number" />
                                <div>-</div>
                            </div>
                        </div>
                        <div className="children"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;