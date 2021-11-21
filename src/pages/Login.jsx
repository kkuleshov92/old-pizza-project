import React from 'react';

import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../config/constants";
import { useAuthContext } from "../context/AuthContext";


const Login = () => {
  const {register, handleSubmit} = useForm();

  const {
    logIn,
  } = useAuthContext();

  const onSubmit = (data) => {
    logIn({
      login: data.login,
      password: data.password,
    })
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
          Авторизоваться
        </button>
      </form>

      <NavLink to={ROUTES.registration}>
        Регистрация
      </NavLink>
    </section>
  )
}

export default Login;