import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Link to="/order/default_pizza">
        Сделать заказ
      </Link>
      <Link to="/order/custom_pizza">
        Сделать заказ
      </Link>
    </section>
  )
}

export default Home;