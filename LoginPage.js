/**
 * 
 */import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    axios.post('/api/login', { username, password })
      .then(response => {
        alert('Login successful!');
        // Redirect based on user role
        if (response.data.role === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      })
      .catch(error => console.error('Login failed:', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password"
