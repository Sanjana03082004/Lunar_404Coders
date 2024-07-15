import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDesigns = ({ addDesign }) => {
  const [design, setDesign] = useState({ name: '', description: '', image: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setDesign({ ...design, [name]: URL.createObjectURL(files[0]) });
    } else {
      setDesign({ ...design, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDesign(design);
    navigate('/home');
  };

  return (
    <div>
      <h1>Add Your Designs</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Design Name" onChange={handleChange} />
        <input type="text" name="description" placeholder="Design Description" onChange={handleChange} />
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit">Add Design</button>
      </form>
    </div>
  );
};

export default AddDesigns;
