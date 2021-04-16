import React from 'react';

export const UserProfile = ({name,email}) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
  </div>
)