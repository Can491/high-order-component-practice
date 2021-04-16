import React from 'react';

import {WithData} from '../with-data.component'

const UserList = ({data}) => (
  <div className='container user-list'>
    <h1>user list</h1>
    {
      data.map(({name,email,id}) => (
        <div className='post' key={id}>
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
      )
      
      )
    }
  </div>
)

export default WithData(UserList);