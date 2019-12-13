import React, { useState } from 'react';

const AddUserForm = props => {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Email</label>
      <input type="text" name="email" value="" />
      <label>Phone</label>
      <input type="text" name="phone" value="" />
      <label>Address</label>
      <input type="text" name="address" value="" />
      <label>City</label>
      <input type="text" name="city" value="" />
      <label>State</label>
      <input type="text" name="state" value="" />
      <label>Zip Code</label>
      <input type="text" name="zip" value="" />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm