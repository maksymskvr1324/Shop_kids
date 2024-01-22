import { Session } from 'inspector';
import React, { useState } from 'react';
// файл і функція для запису в базу данних, але вибиває помилку і не знаю як це вирішити
// import insert from '../../backend/server';

let i = 1;
const insert = (email: string, password: string) =>{
  sessionStorage.setItem(`register${i}`, JSON.stringify([email, password]));
  i++;
}

const select = () =>{
  for(let j = 0; j < i; j++){
    const session = sessionStorage.getItem(`register${j}`);
    if(session){
      const sessionObj = JSON.parse(session);
      console.log(sessionObj);
      return sessionObj;
    }
  }
}

const LoginForm = () => {

  return (
    <form>
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
        />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot">
        <label> <input type="checkbox"/>Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button onClick={select} className="btn">Login Now</button>
    </form>
  );
};

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }else{
      console.log(email, password);
      // виклик функції для запису в базу данних
      // insert(email, password);

      insert(email, password);
    };
    
  };

  return (
    <form>
      <h1>Signup</h1>
      <div className="input-box">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Create password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          onChange={(e) => setConfirmPassowrd(e.target.value)}
        />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <button onClick={handleSubmit} className="btn">Signup Now</button>
    </form>
  );
};

const Register: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <div className='reg'>
      <div className="wrapper">
        {showLoginForm ? (
          <>
            <LoginForm />
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
            <RegistrationForm />
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
