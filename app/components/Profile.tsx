//プロフィール
import React from 'react';
import './Profile.css'
import { Avatar, Link, Typography } from '@mui/material';

const Profile: React.FC = () => {
    return (
        <div className='profile' id='profile' style={{ paddingTop: '20px' }}>
            <Typography style={{ fontSize: '7vh', padding: '5vh' }}>Profile</Typography>
            <div className='text-area'>
                <div className='text_and_icon'>
                    <div style={{ display: 'block' }}>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>NAME</Typography>
                        <Typography style={{ fontSize: '3vh' }}>Tomoya Takahashi</Typography>
                        <Typography style={{ fontSize: '2vh', color: 'cyan' }}>SCHOOL</Typography>
                        <Typography style={{ fontSize: '3vh' }}>National Institute of Technology 5th grade</Typography>
                    </div>

                    <Link href="https://github.com/aoiacai" target="_blank" rel="noopener noreferrer">
                        <Avatar style={{ height: '12vh', width: '12vh' }} alt="aoiacai" src="https://github.com/aoiacai.png" />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Profile;