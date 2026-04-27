import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";


import { users } from './data';
import List from './components/list';
import Search from './components/search';

import './App.css';

console.log({ users })




function App() {
  const [input, setInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filter, setFilter] = useState('all');

  function searchUsers(text) {
    const filteredResult = users.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredUsers(filteredResult);
  }
  function filterUsers(f) {
    if (f === 'all') {
      setFilteredUsers(users);
    }
    else {
      const filteredResult = users.filter((user) => user.status === f);
      setFilteredUsers(filteredResult);
    }
  }


  return (
    <div className='container'>
      <input type="text" value={input} onChange={(event) => { setInput(event.target.value) }} />
      <button onClick={() => searchUsers(input)}>Search</button>

      <input type="radio" id="all" name="filter" value="all" checked={filter === 'all'}
        onChange={(e) => {
          setFilter(e.target.value);
          filterUsers(e.target.value)
        }} />
      <label for="all">All</label>
      <input type="radio" id="active" name="filter" value="active" checked={filter === 'active'}
        onChange={(e) => {
          setFilter(e.target.value);
          filterUsers(e.target.value)
        }} />
      <label for="all">Active</label>
      <input type="radio" id="inactive" name="filter" value="inactive" checked={filter === 'inactive'}
        onChange={(e) => {
          setFilter(e.target.value);
          filterUsers(e.target.value)
        }} />
      <label for="all">Inactive</label>

      <List users={filteredUsers} />
    </div>
  );
}

export default App;
