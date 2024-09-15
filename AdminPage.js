/**
 * 
 */import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createNotice = (e) => {
    e.preventDefault();
    axios.post('/api/notices', { title, description })
      .then(() => {
        alert('Notice created successfully!');
        setTitle('');
        setDescription('');
      })
      .catch(error => console.error('Error creating notice:', error));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Create New Notice</h3>
      <form onSubmit={createNotice}>
        <input 
          type="text" 
          placeholder="Notice Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Notice Description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Create Notice</
