import React, { useState } from 'react';
import ProductList from './components/product-list';
import ProductForm from './components/product-form';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>E-commerce Product Management</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList />
    </div>
  );
}

export default App;