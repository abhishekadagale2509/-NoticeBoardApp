/**
 * 
 */import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT');

  const registerUser = (e) => {
    e.preventDefault();
    axios.post('/api/register', { name, username, password, role })
      .then(() => {
        alert('Registration successful! Please log in.');
        setName('');
        setUsername('');
        setPassword('');
      })
      .catch(error => console.error('Registration failed:', error));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={registerUser}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="STUDENT">Student</option>
          <option value="PROFESSOR">Professor</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
