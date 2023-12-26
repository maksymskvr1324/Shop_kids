import React, { useState } from 'react';
import { Navbar } from "../components/Navbar";

interface FormProps {
  onSubmit: () => void;
}

const LoginForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Create password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
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
