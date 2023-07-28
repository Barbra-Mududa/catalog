import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

const Items = () => {
  const [formData, setFormData] = useState([]);
  
  useEffect(() =>{
    fetch("./items")
    .then((res) => res.json())
    .then((response) => setFormData(response));
  },[])

  const handleDelete = async (e) => {
    const id = e.target.id;
    await fetch("http://localhost:3000/items" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormData(formData.filter((data) => data.id !== id));
  };

    const items = formData.map((data) => {
      return (
        <div key = {data.id} className='w-full flex-row'>
          <div className='flex-col'>
            <h3>{data.itemCode}</h3>
            <p id={data.id}>{data.item}</p>
          </div>
          <div className='flex-col'>
            <h3>Brand</h3>
            <p>{data.brand}</p>
          </div>
          <div className='flex-col'>
            <h3>UoM</h3>
            <p>{data.unitOfMeasurement}</p>
          </div>
          <div className='flex-col'>
            <h3>Unit Price</h3>
            <p>{data.unitPrice}</p>
          </div>
          <div className='flex'>
            <buton className="delete-btn" onClick={handleDelete} id={data.id}>
              <TrashIcon />
            </buton>
            <button>
              <PencilIcon />
            </button>
          </div>
        </div>
      )
    })

  return (
    <div className='container mx-auto mt-8'>
        <div className='relative'>
          <input type='text' 
                className='w-50% px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none pl-10'
                placeholder='Search name, brand'
          />
          <MagnifyingGlassIcon className='h-6 w-6 text-grey/500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none' fill="none" viewBox='0 0 24 24'/>
        </div>
        <div>
          <h3 className='text-base text-sm text-grey/500'>Showing 1 items </h3>
        </div>
        <div>{items}</div>
    </div>
  )
}

export default Items