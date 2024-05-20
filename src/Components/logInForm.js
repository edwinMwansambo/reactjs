

// components/Auth/LoginForm.js

import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Login Data:', formData);
  };

  return (
    <>
    <div class="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl justify-center">
    
  <form action="" className="justify-center">
    <div class="mb-6">
    <label for="email" class="block text-gray-800 font-bold">Email:</label>
      <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      
       </div>
    <div>
    <label for="password" class="block text-gray-800 font-bold">Password:</label>
      <input type="password" name="password" id="password" placeholder="********" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
    </div>
    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
  </form>
</div>
</>
  );
}

export default LoginForm;
