import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '6-7AM',
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
    if (!validateAge(formData.age)) {
      setError('Age must be between 18 and 65.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/enroll', formData);
      // Handle response here
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
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
        <button type="submit">Enroll</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;