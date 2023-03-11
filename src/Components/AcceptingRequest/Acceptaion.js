import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux1/actions/postAction';
import { getUsers } from '../../Redux1/actions/UserActions';
import "./Acceptaion.css"
import AcceptationCard from './AcceptationCard';
const Acceptaion = () => {
   const { user } = useSelector((state) => state.authReducer.authData) || {};
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.postReducer);
  const { users } = useSelector((state) => state.userReducer);

useEffect(() => {
  dispatch(getUsers());
}, []); 

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {posts
        .filter((post) => post.userIdBook === user._id && post.taken === 2)
        .map((item) => (
          <div>
            <AcceptationCard
              item={item}
              users={users.filter((user) => user._id === item.userId)[0]}
            />
          </div>
        ))}
      {posts.filter((post) => post.userIdBook === user._id && post.taken === 2)
        .length === 0 && <div className="noRequest">No Notifications !</div>}
    </div>
  );
}

export default Acceptaion
