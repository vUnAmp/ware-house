import React, { useState } from 'react';
import Button from '../Shared/Button';
import FormInput from '../Shared/FormInput';

const categories = [
  {
    name: 'Select Categories',
    value: '',
  },
  {
    name: 'Phone case',
    value: 'phonecase',
  },
  {
    name: 'Batteries',
    value: 'batteries',
  },
  {
    name: 'Display',
    value: 'display',
  },
];

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productInventory, setProductInventory] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="addProducts">
      <form onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <label htmlFor="category">Categories</label>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          required
          name=""
          id="category"
          defaultValue={null}
        >
          {categories.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <FormInput
          type="text"
          handleChange={(e) => {
            setProductName(e.target.value);
          }}
          value={productName}
          placeholder="Item name"
          required
        />
        <FormInput
          type="number"
          handleChange={(e) => {
            setProductInventory(e.target.value);
          }}
          label="Inventory"
          value={productInventory}
          placeholder="Item Inventory"
          required
        />
        <FormInput
          type="number"
          handleChange={(e) => {
            setProductPrice(e.target.value);
          }}
          label="Price"
          value={productPrice}
          placeholder="Item Price"
          required
        />
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
};

export default AddProducts;
