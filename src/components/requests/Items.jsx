import React, { useEffect, useState } from 'react';


const Items = () => {
  const [formData, setFormData] = useState([]);
  
  useEffect(() =>{
    fetch("./items")
    .then((res) => res.json())
    .then((response) => {
      setFormData()
    })
  },[])
  
  return (
    <div>
        
    </div>
  )
}

export default Items