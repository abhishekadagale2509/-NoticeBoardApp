/**
 * 
 */import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [user, setUser] = useState({});
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch user profile and notices (based on the logged-in user)
    axios.get('/api/user/profile')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user data:', error));

    axios.get('/api/user/notices')
      .then(response => setNotices(response.data))
      .catch(error => console.error('Error fetching user notices:', error));
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        <h3>Your Profile</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div>
        <h3>Your Notices</h3>
        <ul>
          {notices.map(notice => (
            <li key={notice.id}>
              {notice.title}: {notice.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPage;
