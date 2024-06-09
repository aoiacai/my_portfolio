//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Hobby: React.FC = () => {
    return (
        <div className='profile' id='hobby' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '12vmin', padding: '4vmin' }}>Hobby</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <div className='centerClass'>
                            <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>GAME</Typography>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                            <Typography style={{ fontSize: '4vmin' }}>stardew valley</Typography>
                            <Typography style={{ fontSize: '4vmin' }}>AtCoder</Typography>
                        </div>

                        <div className='centerClass'>
                            <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>COMIC</Typography>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '3vmin' }}>
                            <div style={{ fontSize: '4vmin' }}>結界師</div>
                            <div style={{ fontSize: '4vmin' }}>サマータイムレンダ</div>
                            <div style={{ fontSize: '4vmin' }}>チ。</div>
                            <div style={{ fontSize: '4vmin' }}>呪術廻戦</div>
                            <div style={{ fontSize: '4vmin' }}>エヴァンゲリオン</div>
                            <div style={{ fontSize: '4vmin' }}>不滅のあなたへ</div>
                            <div style={{ fontSize: '4vmin' }}>ダンジョン飯</div>
                            <div style={{ fontSize: '4vmin' }}>etc.</div>
                        </div>


                        <div className='centerClass'>
                            <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>Music</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            <iframe style={{ borderRadius: '12px', maxWidth: "90%", height: '30vh' }} src="https://open.spotify.com/embed/track/6UHwmfYfRm445uyyM9HO3o?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hobby;
