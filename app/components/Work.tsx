//プロフィール
import React from 'react';
import { Typography } from '@mui/material';
import './Profile.css'

const Work: React.FC = () => {
    /*
    高専プロコン競技部門　GUI
    写真とURL
    https://github.com/aoiacai/procon34_Open/blob/main/pic.png
    https://github.com/aoiacai/procon34_Open


    Pomodoro Timer
    https://github.com/aoiacai/pomodoro_simple/blob/main/pic.png
    https://github.com/aoiacai/pomodoro_simple

    jig.jp インターン 共同開発
    https://private-user-images.githubusercontent.com/15647868/293295348-2d0fdf8f-0adc-4fd5-b5ac-ca81413d3752.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc4NTg5NjksIm5iZiI6MTcxNzg1ODY2OSwicGF0aCI6Ii8xNTY0Nzg2OC8yOTMyOTUzNDgtMmQwZmRmOGYtMGFkYy00ZmQ1LWI1YWMtY2E4MTQxM2QzNzUyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjA4VDE0NTc0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE1NDBjMjc4OWQxYzAyNzc1MjU3NmY1YTg0Mzk0YWE3OWRmNWJiMDc5NGZkMzdiNjNkYTM1NTgyNGZhZTk0NDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ll72iG3u2GASDX_-5oJeQapWeqr2fzy4nQwrVc-1uJU
    https://github.com/jigintern/ultimate-osechi
    */
    return (
        <div className='profile' id='works' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Works</Typography>
            <div className='text-area'>
                <div className='text_and_icon' style={{ flexWrap: 'wrap' }}>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>高専プロコン競技部門 GUI</Typography>
                        <a href="https://github.com/aoiacai/procon34_Open">
                            <img src="https://github.com/aoiacai/procon34_Open/blob/main/pic.png?raw=true" alt="Procon34 Open" style={{ height: '40vh' }} />
                        </a>
                    </div>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh' }}>Pomodoro Timer</Typography>
                        <a href="  https://github.com/aoiacai/pomodoro_simple/blob/main/pic.png">
                            <img src="https://github.com/aoiacai/pomodoro_simple/blob/main/pic.png?raw=true" alt="Procon34 Open" style={{ height: '40vh' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Work;
