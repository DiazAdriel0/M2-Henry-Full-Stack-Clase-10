import React from 'react'
import './Contact.modules.css'
import { log, message } from '@11ty/eleventy/src/EleventyErrorHandler';
import { useState, useEffect } from 'react';
import validate from '../../utils/validacion/validate';

// eslint-disable-next-line
export const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handlerChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
    setErrors(
      validate(
        {
          ...inputs,
          [event.target.name]: event.target.value
        }
      )
    )
  }



  const handlerSubmit = (event) => {
    event.preventDefault()
    if(!Object.values(errors).length){
      alert("Datos completos")
      setInputs({
        name: "",
        email: "",
        message: "",
      })
      setErrors({
        name: "",
        email: "",
        message: "",
      })
    }else{
      alert("Debe llenar todos los campos")
    }
  }
  

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Nombre:</label>
        <input type='text' placeholder='Escribe tu nombre...' name='name' value={inputs.name} onChange={handlerChange} className={errors.name && 'warning'}/>
        {/* errors.name ? <p className='danger'>{errors.name}</p> : null */}
        <p className='danger'>{errors.name}</p>

        <label>Correo Electrónico:</label>
        <input type='text' placeholder='Escribe tu email...' name='email' value={inputs.email} onChange={handlerChange} className={errors.email && 'warning'}/>
        {/* errors.email ? <p className='danger'>{errors.email}</p> : null */}
        <p className='danger'>{errors.email}</p>

        <label>Mensaje:</label>
        <textarea type='text' placeholder='Escribe tu mensaje...' name='message' value={inputs.message} onChange={handlerChange} className={errors.message && 'warning'}/>
        {/* errors.message ? <p className='danger'>{errors.message}</p> : null */}
        <p className='danger'>{errors.message}</p>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
