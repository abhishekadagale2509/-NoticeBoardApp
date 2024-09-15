import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch logged-in user's profile data
    axios.get('/api/user/profile')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  return (
    <div>
      <h2>Your Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>R
