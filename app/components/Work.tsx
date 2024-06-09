//プロフィール
import React from 'react';
import { Typography } from '@mui/material';
import './Profile.css'

const Work: React.FC = () => {

    return (
        <div className='profile' id='works' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Works</Typography>
            <div className='text-area'>
                <div className='images' style={{ flexWrap: 'wrap' }}>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>高専プロコン競技部門 GUI</Typography>
                        <a href="https://github.com/aoiacai/procon34_Open">
                            <img src="https://github.com/aoiacai/procon34_Open/blob/main/pic.png?raw=true" alt="Procon34 Open" style={{ maxHeight: '40vh', maxWidth: '100%' }} />
                        </a>
                    </div>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>Pomodoro Timer</Typography>
                        <a href="https://aoiacai.github.io/pomodoro_simple">
                            <img src="https://github.com/aoiacai/pomodoro_simple/blob/main/pic.png?raw=true" alt="Procon34 Open" style={{ maxHeight: '40vh', maxWidth: '100%'}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Work;
