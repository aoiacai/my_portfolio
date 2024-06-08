//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Hobby: React.FC = () => {
    return (
        <div className='profile' id='hobby' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Hobby</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>GAME</Typography>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <Typography style={{ fontSize: '3vh' }}>stardew valley</Typography>
                            <Typography style={{ fontSize: '3vh' }}>AtCoder</Typography>
                        </div>

                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>COMIC</Typography>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>結界師</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>サマータイムレンダ</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>チ。</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>呪術廻戦</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>エヴァンゲリオン</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>不滅のあなたへ</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>ダンジョン飯</Typography>
                            <Typography style={{ fontSize: '3vh', paddingLeft: '1vh', paddingRight: '1vh' }}>etc.</Typography>
                        </div>


                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>Music</Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

                            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6UHwmfYfRm445uyyM9HO3o?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hobby;
