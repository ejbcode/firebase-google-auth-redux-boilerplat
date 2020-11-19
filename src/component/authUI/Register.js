import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { sigInWithEmailPasswordName } from '../../redux/actions/authAction';

export const Register = () => {
  const dispatch = useDispatch();
  const { formValues, handleInputChange } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    dispatch(sigInWithEmailPasswordName(email, password, name));
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          -name
          <input
            onChange={handleInputChange}
            type="text"
            id="name"
            name="name"
          />
        </label>

        <label htmlFor="email">
          -Email
          <input
            onChange={handleInputChange}
            type="text"
            id="email"
            name="email"
          />
        </label>

        <label htmlFor="password">
          -password
          <input
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
          />
        </label>

        <label htmlFor="password2">
          -password2
          <input type="password" id="password2" name="password2" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
