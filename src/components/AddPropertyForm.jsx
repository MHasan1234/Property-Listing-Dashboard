import React, { useState } from 'react';

function AddPropertyForm({ onAddProperty }) {
    const [formData, setFormData] = useState({
        name: '',
        type: 'House',
        price: '',
        location: '',
        description: '',
        image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProperty({ ...formData, id: Date.now() }); // Use timestamp for unique ID
        setFormData({ name: '', type: 'House', price: '', location: '', description: '', image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' });
    };

    return (
        <div className="form-container card">
            <h2>Add Property</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Property Name" required />
                <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="House">House</option>
                    <option value="Loft">Loft</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Penthouse">Penthouse</option>
                </select>
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddPropertyForm;