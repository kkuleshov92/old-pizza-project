import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <Link to="/order">
        Сделать заказ
      </Link>
    </section>
  )
}

export default Home;