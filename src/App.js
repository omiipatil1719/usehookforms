import React, { lazy, useState } from 'react'
import { useForm } from "react-hook-form";


const App = () => {
  const [useFoemdata,setuseFormdata]=useState([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submit = (data) => {
    console.log(data)
    reset({
      name: '',
      email: '',
      password: ''
    });
    setuseFormdata([
      ...useFoemdata,
       data
    ])
  }



  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input {...register('name', { required: true, })} />
          {errors.name ? <p style={{color:"red"}}>Name required</p> : null}
          
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' {...register('email',{required:true})} />
          {errors.email ?<p style={{color:"red"}}>email required </p>:null}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' {...register('password',{required:true})} />
          {errors.password?<p style={{color:"red"}}>password is required</p>:null}
        </div>
        
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>)
}

export default App