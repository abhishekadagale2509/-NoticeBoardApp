import React from 'react';
import Header from '../components/Header';
import NoticeBoard from '../components/NoticeBoard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the Online Notice Board</h2>
        <p>This platform provides access to important notices and information for students, teachers, and staff. Please log in to view personalized notices and updates.</p>
        <NoticeBoard />
      </main>
    </div>
  );
}

export default HomePage;
