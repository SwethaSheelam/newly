import React, { useState } from 'react';

const RegistrationForm = ({ saveRegistrationData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    idProof: null,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRegistrationData(formData);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">New Employee Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="mb-4" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="mb-4" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="mb-4" />
        <input type="file" name="idProof" onChange={handleFileChange} className="mb-4" />
        <input type="file" name="resume" onChange={handleFileChange} className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
