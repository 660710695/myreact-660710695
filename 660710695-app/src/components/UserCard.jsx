import React from 'react';
import pic from './660710695pic.jpg';

const Avatar = () => (
  <img
    src={pic}
    alt="User Avatar"
    style={{
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      border: '3px solid #e69bc9ff'
    }}
  />
);

const UserName = () => (
    <h3 style={{ color: '#333', margin: '10px 0' }}>
        กุลจิรา ไทยเจริญ
    </h3>
);

const UserBio = () => (
    <p style={{ marginTop: '100px', color: '#4e4c4cff', fontSize: '14px' }}>
        <p>นักศึกษาชั้นปีที่ 3</p>
        <p>คณะวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ</p>
        <p>รหัสนักศึกษา 660710695</p>
    </p>
);

const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #333',
            padding: '10px',
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: '#e28e5eff',
            maxWidth: '300px',
            height: '400px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;