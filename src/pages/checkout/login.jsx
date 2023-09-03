import React from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  fName : yup.string().required("* First Name is required"),
  lName : yup.string().required("* Last Name is required"),
  address : yup.string().required("* Address is required"),
  district : yup.string().required("* District is required"),
  landmark : yup.string().required("* LandMark is required"),
  pincode: yup.string().required().min(6, "minimun 6 numbers required").max(6, "maximum 6 characters only"),
  phoneNumber: yup.string().required().min(10, "minimun 10 numbers required").max(10, "maximum 10 number only"),
})


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  console.log(errors);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0 ) {
      navigate ("/payment")
    }
  }

  return (
    <div className='login-page'>
    <div className='container'> 
    <h1 className='loginHeading'>Sign Up Here !</h1>
      <form type="submit" onSubmit={handleSubmit(onSubmit)}>
        <input {...register ("fName")} type='text' placeholder='First Name'/>
        <p>{errors.fName?.message}</p>
        <input {...register ("lName")} type='text' placeholder='Last Name' />
        <p>{errors.lName?.message}</p>
        <input {...register ("address")} type='text' placeholder='Address'/>
        <p>{errors.address?.message}</p>
        <input {...register ("district")} type='text' placeholder='District'/>
        <p>{errors.district?.message}</p>
        <input {...register ("landmark")} type='text' placeholder='Landmark'/>
        <p>{errors.landmark?.message}</p>
        <input {...register ("pincode")} type='number' placeholder='Pincode' />
        <p>{errors.pincode?.message}</p>
        <input {...register ("phoneNumber")} type='number' placeholder='Phone Number'/>
        <p>{errors.phoneNumber?.message}</p>
        <button className='login-button' type='submit'>Login</button>
      </form> 
      </div> 
    </div>
  )
}

export default Login;