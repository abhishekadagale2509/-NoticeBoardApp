import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices from the backend
    axios.get('/api/notices')
      .then(response => setNotices(response.data))
      .catch(error => console.error('Error fetching notices:', error));
  }, []);

  return (
    <div>
      <h2>Latest Notices</h2>
      <ul>
        {notices.length > 0 ? (
          notices.map(notice => (
            <li key={notice.id}>
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>
            </li>
          ))
        ) : (
          <p>No notices available at the moment.</p>
        )}
      </ul>
    </div>
  );
}

export default Notice
