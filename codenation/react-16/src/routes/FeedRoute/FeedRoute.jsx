import React, { useState, useEffect } from 'react';
import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [ posts, setPosts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [stories, setStories] = useState([]);

  function getUserHandler(id) {
    return users.find((user) => user.id === id);
  }  

  async function getUsers() {
    await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', { method: 'GET'})
    .then((response) => response.json())
    .then((users) => {
      setUsers(users);
      users.forEach((user) => {
        getAllPostsByUser(user.id)
      })
    });
  }

  async function getAllPostsByUser(id) {
    await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`, 
    { method:'GET' })
    .then( async (response) => {
      const data = await response.json();
      setPosts((prev) => {
        return [...prev, ...data];
      });
    })
  }

  useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then((res) => res.json())
      .then(data => {
        setStories(data);
      });
  }, [users]);

  return (

    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && (<Stories stories={stories} getUserHandler={getUserHandler}/>)}   
      {posts.length > 0 ? <Posts posts={posts} getUserHandler={getUserHandler}/> : <Loading /> }
    </div>
    
  );
};

export default FeedRoute;