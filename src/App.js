import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

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
   },
   { id: 1, 
    name: 'Sam', 
    email: 'abc@gmail.com', 
    phone: '141-656-7878',
    address: '123 ok lane',
    city: 'oktown',
    state: 'OR',
    zip: '99999'
 }
  ]
  
  const [users, setUsers] = useState(usersData)

  const addUser = user => {
  user.id = users.length + 1
  setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
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
