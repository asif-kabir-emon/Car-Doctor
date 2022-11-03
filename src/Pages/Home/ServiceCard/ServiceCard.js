import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="card-actions justify-between items-center mb-3">
          <p className="text-lg text-orange-600 font-semibold">
            Price: ${price}
          </p>
          <Link to={`/check-out/${_id}`}>
            <button>
              <FaArrowRight className="text-orange-600"></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
