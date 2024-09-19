import React, { useState } from 'react';
import FormInput from '../common/FormInput';
import Button from '../common/Button';

const FormInputExample: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    const newErrors = {
      username: formData.username ? '' : 'Username is required',
      email: formData.email.includes('@') ? '' : 'Invalid email',
      password: formData.password.length >= 6 ? '' : 'Password must be at least 6 characters',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === '')) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Form Input Example</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormInputExample;