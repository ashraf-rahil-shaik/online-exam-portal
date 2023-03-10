
import "./Login.css";
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'password') {
      setError('logged in');
     
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-page-title">Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field"
        />
        <button  type="submit" className="submit-button-1">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
