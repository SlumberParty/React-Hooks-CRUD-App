import React from 'react';

const UserTable = () => (
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
      <tr>
        <td>Name data</td>
        <td>Email data</td>
        <td>Phone data</td>
        <td>Street Address Data</td>
        <td>City data</td>
        <td>State data</td>
        <th>Zip Code data</th>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default UserTable

