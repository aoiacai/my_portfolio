//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <div className='profile' id='contact' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Contact</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block', paddingLeft: '10vh' }}>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>Publication scheduled.</Typography>
                        <Typography style={{ fontSize: '3vh' }}>xxxx@example.com</Typography>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Contact;