import React from 'react';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Enter your email to reset your password.</p>
      <input type="email" placeholder='Enter your email ' /><br />
      <button type='submit'>Reset password</button>
    </div>
  );
};

export default ForgotPassword;