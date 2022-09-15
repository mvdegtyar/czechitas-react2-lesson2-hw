import React, { useState } from 'react';

import './registration.css';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    const updates = { email: newEmail };
    if (!user.username) {
      const parts = newEmail.split('@');
      if (parts.length > 1) {
        updates.username = parts[0];
      }
    }
    setUser({ ...user, ...updates });
  }

  const handleUserName = (e) => {
    setUser({ ...user, username: e.target.value });
  }

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  }

  const handlePasswordConfirmation = (e) => {
    setUser({ ...user, passwordConfirm: e.target.value });
  }

  const register = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className="container">
      <h2>Registratin</h2>
      <div className="photo" />
      <form>
        <input type="text" placeholder="Email Address" value={user.email} onChange={handleEmail}></input>
        <input type="text" placeholder="User Name" value={user.username} onChange={handleUserName}></input>
        <input type="password" placeholder="Password" value={user.password} onChange={handlePassword}></input>
        <input type="password" placeholder="Confirm password" value={user.passwordConfirm} onChange={handlePasswordConfirmation}></input>

        <button type="button" onClick={register}>Register</button>
      </form>
    </div>
  );
};

export default Registration;