import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '6-7AM',
    month: '',
    payment: '500'  // Assuming a fixed payment
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateAge = (age) => {
    return age >= 18 && age <= 65;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear any existing errors
  
    if (!validateAge(formData.age)) {
      setError('Age must be between 18 and 65.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/enroll', formData);
      // Handle the response here
      alert(response.data.message); // Show a simple alert with the response message
      console.log(response.data.message);
      setFormData({
        name: '',
        age: '',
        batch: '6-7AM',
        month: '',
        payment: '500'
      });
    } catch (error) {
      if (error.response) {
        // Handle the case where the server responded with a status outside the range of 2xx
        setError(`Enrollment Failed: ${error.response.data.message}`);
      } else {
        // Handle other types of errors (network error, etc.)
        setError('An error occurred during enrollment.');
      }
    }
  };

  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select name="batch" value={formData.batch} onChange={handleChange}>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        <input
          type="month"
          name="month"
          placeholder="Month"
          value={formData.month}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="payment"
          placeholder="Payment"
          value={formData.payment}
          onChange={handleChange}
          readOnly
        />
        <button type="submit">Enroll</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default App;