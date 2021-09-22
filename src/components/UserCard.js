import React from 'react';

const UserCard = ({ item }) => {
  const { first_name, email, avatar } = item;
  return (
    <div className='usercard'>
      <h3>{first_name}</h3>
      <h5 className='light-text'>{email}</h5>
      <img className='user-img' src={avatar} alt={first_name} />
    </div>
  );
};

export default UserCard;
