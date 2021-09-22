import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      setUsers(response.data?.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log({ users });

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h1 className='mt-4 text-center'>Hello ReqRes users!</h1>
      <div className='user-container'>
        {users.map((item) => (
          <UserCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
