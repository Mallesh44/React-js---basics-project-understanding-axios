import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, price, description, image };

    // Since fakestoreapi is read-only, we'll just simulate adding a product
    onAddProduct(newProduct); // Pass the new product to the parent component

    // If you had a real API, you would do this:
    // axios.post('YOUR_API_ENDPOINT', newProduct)
    //   .then(response => {
    //     onAddProduct(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error adding product:', error);
    //   });

    // Reset the form
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;