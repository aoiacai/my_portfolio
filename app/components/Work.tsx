//プロフィール
import React from 'react';
import { Typography } from '@mui/material';
import './Profile.css'

const Work: React.FC = () => {
    return (
        <div className='profile' id='works' style={{ paddingTop: '65px' }}>
            <Typography style={{ fontSize: '12vmin', paddingLeft: '4vmin', paddingBottom: '4vmin' }}>Works</Typography>
            <div className='text-area'>
                <div className='images' style={{ flexWrap: 'wrap' }}>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>高専プロコン競技部門 GUI</Typography>
                        <a href="https://github.com/aoiacai/procon34_Open" className='centerClass'>
                            <img src="https://github.com/aoiacai/procon34_Open/blob/main/pic.png?raw=true" alt="Procon34 Open" style={{ maxHeight: '40vh', maxWidth: '80%', borderRadius: '12px', marginBottom: '5vh' }} />
                        </a>
                    </div>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>Pomodoro Timer</Typography>
                        <a href=" https://aoiacai.github.io/pomodoro_simple/" className='centerClass'>
                            <img src="https://github.com/aoiacai/pomodoro_simple/blob/main/pic.png?raw=true" alt="Pomodoro Timer" style={{ maxHeight: '40vh', maxWidth: '80%', borderRadius: '12px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Work;
