import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    service,
    serviceName,
    customer_name,
    phone,
    price,
    email,
    message,
    status,
  } = order;
  const [orderService, setOrderService] = useState([]);
  useEffect(() => {
    fetch(`https://genius-car-server-beige.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-circle btn-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-14 h-14">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <span className="font-bold">{serviceName}</span>
            <br />
            <span className="badge badge-ghost badge-sm">${price}</span>
          </div>
        </div>
      </td>
      <td>
        <div>{customer_name}</div>
      </td>
      <td>
        {phone}
        <br />
        {email}
      </td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
