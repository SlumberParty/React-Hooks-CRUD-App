import React from 'react';

const UserTable = props => (
  <table>
    <thread>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Street Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
      </tr>
    </thread>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.state}</td>
        <th>{user.zip}</th>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
          ))
      ) : (
        <tr>
          <td colSpan={3}>No Users</td>
        </tr>
          )}
    </tbody>
  </table>
)

export default UserTable

