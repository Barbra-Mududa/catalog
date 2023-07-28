import React, { useState } from 'react';

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemCode: '257427',
    item: '',
    brand: '',
    unitPrice: 0,
    unitOfMeasurement: 'Each',
    hasThreshold: 'true',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(formData);

    fetch("http://localhost:3000/items", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newFormData) => {
        console.log(newFormData); 
      })
      .catch((error) => {
        console.log('Error submitting item', error);
      });
      event.target.reset();
      window.location.reload()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-4 h-screen'>
        <h2 className='text-xl font-Lato font-bold'>Add Item</h2>
        <div>
          <div className='mt-4'>
            <label>Item Code:</label>
            <input
              type='text'
              name='itemCode'
              className='w-full px-3 py-2 bg-grey/200 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              placeholder='Enter item code...'
              value={formData.itemCode}
              onChange={handleChange}
              readOnly
              required
            />
          </div>
          <div className='mt-4'>
            <label>Item Description:</label>
            <input
              type='text'
              name='item'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              placeholder='e.g Pen Black...'
              value={formData.item}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-4'>
            <label>Select Brand:</label>
            <select
              name='brand'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.brand}
              onChange={handleChange}
              required
            >
              <option>Kaluma</option>
              <option>Bic</option>
              <option>Pelikan</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Set Unit Price(KES):</label>
            <input
              type='number'
              name='unitPrice'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.unitPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-4'>
            <label>Select Unit of Measurement(UoM):</label>
            <select
              name='unitOfMeasurement'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.unitOfMeasurement}
              onChange={handleChange}
              required
            >
              <option>Each</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Has Threshold:</label>
            <select
              name='hasThreshold'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.hasThreshold}
              onChange={handleChange}
              required
            >
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full mt-4 items-center  border border-gray-500 border-solid border-opacity-30 rounded-lg p-2 bg-secondary text-white shadow-md'
          >
            Save to Catalogue
          </button>
        </div>
      </div>
      
    </form>
  );
};

export default AddItem;