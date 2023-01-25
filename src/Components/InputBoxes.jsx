import React from 'react'
import { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function InputBoxes({setData}) {
  const defaultData = {
    state: "+",
    description: "",
    value: 0,
  }

  const [formData, setFormData] = useState(defaultData)
  const [formDataCollection, setFormDataCollection] = useState([]);

  function handleChange(event) {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  function dataPopulate() {
    if (formData.description.length != 0 && formData.value != 0)
    {
      setFormDataCollection(prevData => { return [formData, ...prevData]});
    }
    // setData(formDataCollection);
    setFormData(defaultData);
  }

  return (
    <div className='inputBoxes'>
      <select id='state' name='state' onChange={handleChange} value={formData.state}>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input type='text' id='description' onChange={handleChange} value={formData.description} name='description' placeholder='Description' />
      <input placeholder='Value' type='number' id='value' onChange={handleChange} value={formData.value} name='value' />
      {/* Below two onClicks are used as both involve state changes and I want both to rerender together */}
      <button onClick={setData(formDataCollection)} className='addBtn'><IoIosCheckmarkCircleOutline onClick={dataPopulate} className='addIcon' /></button>
    </div>
  )
}
