import React, { useState } from 'react';
import UserTable from './tables/UserTable';

const App = () => {
  const usersData = [
    { id: 1, 
      name: 'Claire', 
      email: 'abc@gmail.com', 
      phone: '360-123-4567',
      address: '123 ok lane',
      city: 'blahville',
      state: 'OR',
      zip: '99999'
   }
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>add user</h2>
        </div> 
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App;
