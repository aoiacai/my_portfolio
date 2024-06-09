//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <div className='profile' id='contact' style={{ paddingTop: '65px' }}>
            <Typography style={{ fontSize: '12vmin', paddingLeft: '4vmin', paddingBottom: '4vmin' }}>Contact</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '3vmin', color: 'cyan' }}>Publication scheduled.</Typography>
                        <Typography style={{ fontSize: '4vmin' }}>*@example.com</Typography>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Contact;
