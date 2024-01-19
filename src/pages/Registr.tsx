import React, { useState } from 'react';
import axios from 'axios';

interface FormProps {
  onSubmit: () => void;
}

interface UserCredentials {
  email: string;
  password: string;
}

const LoginForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      await axios.post('http://localhost:5000/login', credentials);

      onSubmit();
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          value={credentials.email}
          onChange={handleChange}
        />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={credentials.password}
          onChange={handleChange}
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot">
        <label> <input type="checkbox"/>Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" className="btn">Login Now</button>
    </form>
  );
};

const RegistrationForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      await axios.post('http://localhost:5000/register', credentials);

      onSubmit();
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div className="input-box">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          value={credentials.email}
          onChange={handleChange}
        />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Create password"
          required
          value={credentials.password}
          onChange={handleChange}
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          onChange={handleChange}
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <button type="submit" className="btn">Signup Now</button>
    </form>
  );
};

const Register: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log(showLoginForm ? 'Login submitted' : 'Registration submitted');
  };

  return (
    <div className='reg'>
      <div className="wrapper">
        {showLoginForm ? (
          <>
            <LoginForm onSubmit={handleSubmit} />
            <div className="register-link">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={toggleForm}>
                  Register
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <RegistrationForm onSubmit={handleSubmit} />
            <div className="register-link">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={toggleForm}>
                  Login
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
