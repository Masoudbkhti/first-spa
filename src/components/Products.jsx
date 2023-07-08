import { Link } from "react-router-dom";
import { Card } from "./Card";
import sizif from "../assets/images/sizif.jpg";
import ikigai from "../assets/images/ikigay.jpg";
import ablah from "../assets/images/ablah.jpg";
import ansuyemarg from "../assets/images/ansuyemarg.jpg";
import mana from "../assets/images/mana.jpg";
import badbadakbaz from "../assets/images/badbadakbaz.jpg";

export const Products = () => {
  return (
    <div className="py-20 px-20 flex justify-center">
      <div className="grid grid-cols-3 gap-40">
        <Link to="/products/1">
          <Card img={sizif} title="Der Mythos des Sisyphos" price="18 Euro" />
        </Link>
        <Link to="/products/2">
          <Card img={ikigai} title="Ikigai" price="25 Euro" />
        </Link>
        <Link to="/products/3">
          <Card img={ablah} title="Der Idiot" price="29 Euro" />
        </Link>
        <Link to="/products/3">
          <Card img={ansuyemarg} title="Jenseits des todes" price="19 Euro" />
        </Link>
        <Link to="/products/3">
          <Card img={mana} title="Ja zum Leben" price="39 Euro" />
        </Link>
        <Link to="/products/3">
          <Card img={badbadakbaz} title="Drachenläufer" price="49 Euro" />
        </Link>
      </div>
    </div>
  );
};

/*
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card } from "./Card";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setProducts(response.data.products);
        console.log(Products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-20 px-20 flex justify-center">
      <div className="grid grid-cols-3 gap-40">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card
              img={product.image}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
*/
