//プロフィール
import React from 'react';
import './Profile.css'
import { Typography } from '@mui/material';

const Award: React.FC = () => {
    return (
        <div className='profile' id='awards' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Awards</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>2023</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・高専プロコン競技部門優勝 チーム「蟹高専」アルゴリズム担当</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・文部科学大臣賞</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・情報処理学会若手奨励賞</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・電子情報通信学会若手奨励賞</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・The 15th NAPROCK INTERNATIONAL PROGRAMMING CONTEST Competition section Champion </Typography>

                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>2024</Typography>
                        <Typography style={{ fontSize: '3vh' }}>・AI-STEP 準奨励賞</Typography>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Award;
