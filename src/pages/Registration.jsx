import React from 'react';

import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../config/constants";


const Registration = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("login")}/>
        </div>

        <div>
          <input type='password' {...register("password")}/>
        </div>

        <button>
          Зарегистрироваться
        </button>
      </form>

      <NavLink to={ROUTES.login}>
        Авторизация
      </NavLink>
    </section>
  )
}

export default Registration;