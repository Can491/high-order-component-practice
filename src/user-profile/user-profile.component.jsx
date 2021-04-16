import React from 'react';

import { WithData } from "../with-data.component";

const UserProfile = ({name,email,data}) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    {
      data.map(({id,title,body}) => (
        <div className='post' key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))
    }
  </div>
)

export default WithData(UserProfile)