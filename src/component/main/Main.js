import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFromFirebase } from '../../redux/actions/authAction';

export const Main = () => {
  const { name } = useSelector((state) => state.auth);
  console.log(name);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutFromFirebase());
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        LogOut
      </button>
      <h3>Hi {name}</h3>
      <h1>Main</h1>
    </div>
  );
};
