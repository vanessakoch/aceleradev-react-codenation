import React, { useState, useEffect } from 'react';
import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';
import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const { pathname } = window.location;
    const name = pathname.split("/users/")[1];
  
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${name}`)
    .then(res => res.json())
    .then(([user]) => {
      setUser(user);
    });

  }, []);

  useEffect(() => {
   
    const { id } = user;
    fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`)
    .then(res => res.json())
    .then((posts) => {
      if(Array.isArray(posts)) setPosts(posts);
      setIsLoading(false);
    });

  }, [user]);
  
  return (
  
    <div data-testid="profile-route">
      {isLoading ? <Loading /> : (
        <>
        <UserProfile avatar={user.avatar} name={user.name} username={user.username}/>  
        {posts.length > 0 && <UserPosts posts={posts}/>}
        </>
      )}
    </div>
  );
};

export default ProfileRoute;