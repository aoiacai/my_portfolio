//プロフィール
import React from 'react';
import './Profile.css'
import { Typography } from '@mui/material';

const Award: React.FC = () => {
    return (
        <div className='profile' id='awards' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '12vmin', padding: '4vmin' }}>Awards</Typography>
            <div className='text-area'>


                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'column' }}>
                    <div className='centerClass'>
                        <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>2023</Typography>
                    </div>
                    <div className='centerClass'>
                        <ul>
                            <li style={{ fontSize: '4vmin' }}>高専プロコン競技部門優勝 チーム「蟹高専」アルゴリズム担当</li>
                            <li style={{ fontSize: '4vmin' }}>文部科学大臣賞</li>
                            <li style={{ fontSize: '4vmin' }}>情報処理学会若手奨励賞</li>
                            <li style={{ fontSize: '4vmin' }}>電子情報通信学会若手奨励賞</li>
                            <li style={{ fontSize: '4vmin' }}>The 15th NAPROCK INTERNATIONAL PROGRAMMING CONTEST Competition section Champion </li>
                        </ul>
                    </div>
                    <div className='centerClass'>
                        <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>2024</Typography>
                    </div>
                    <div className='centerClass'>
                        <ul>
                            <li style={{ fontSize: '4vmin' }}>AI-STEP 準奨励賞</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Award;
