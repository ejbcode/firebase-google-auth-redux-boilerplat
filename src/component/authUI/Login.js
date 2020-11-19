import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import {
  logWithEmailPassword,
  logWithGoogle,
} from '../../redux/actions/authAction';

export const Login = () => {
  const { formValues, handleInputChange } = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(logWithGoogle());
  };

  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleGoogleLogin} type="button">
        Login with google
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          -Email
          <input
            onChange={handleInputChange}
            type="text"
            id="email"
            name="email"
            value={email}
          />
        </label>

        <label htmlFor="password">
          -password
          <input
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
