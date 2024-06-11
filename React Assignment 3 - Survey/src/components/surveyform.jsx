// src/components/SurveyForm.jsx
import React, { useState } from 'react';
import './surveyform.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.age) formErrors.age = 'Age is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.feedback) formErrors.feedback = 'Feedback is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: '',
        feedback: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h2>Survey Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      {errors.age && <p className="error">{errors.age}</p>}
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <p className="error">{errors.gender}</p>}
      <textarea
        name="feedback"
        placeholder="Your feedback"
        value={formData.feedback}
        onChange={handleChange}
      />
      {errors.feedback && <p className="error">{errors.feedback}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
