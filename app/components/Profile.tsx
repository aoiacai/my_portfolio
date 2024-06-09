//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Profile: React.FC = () => {
    return (
        <div className='profile' id='profile' style={{ paddingTop: '65px' }}>
            <Typography style={{ fontSize: '12vmin', paddingLeft: '4vmin', paddingBottom: '4vmin' }}>Profile</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>NAME</Typography>
                        <Typography style={{ fontSize: '4vmin' }}>Tomoya Takahashi</Typography>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>SCHOOL</Typography>
                        <Typography style={{ fontSize: '4vmin' }}>National Institute of Technology 5th grade</Typography>
                    </div>

                    <Link href="https://github.com/aoiacai" target="_blank" rel="noopener noreferrer">
                        <Avatar style={{ height: '12vmin', width: '12vmin' }} alt="aoiacai" src="https://github.com/aoiacai.png" />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Profile;
