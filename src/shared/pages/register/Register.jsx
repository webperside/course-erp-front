import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"



const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('backend-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
     
        console.log('Registration successful');
      } else {
      
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>

        <span>Register Form</span>
        <div className='input_sect'>
         
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            required
          />
        </div>
        <div className='input_sect'>
        
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
        </div>
        <div className='input_sect'>

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
        </div>
        <div className="foot">
         
          <Link to="/login">
            Sign-up
          </Link>
        <button type="submit">Register</button>
       </div>
      </form>
    </div>
  );
};

export default Register;
