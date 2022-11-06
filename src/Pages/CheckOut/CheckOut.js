import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Check Out");

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.fname.value} ${form.lname.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const order = {
      service: service._id,
      serviceName: service.title,
      price: service.price,
      customer_id: user.uid,
      customer_name: name,
      phone: phone,
      email: email,
      message: message,
    };

    if (phone.length < 10) {
      alert("Phone number should be 10 numbers or longer");
    } else {
      fetch("https://genius-car-server-beige.vercel.app/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged === true) {
            form.reset();
            toast.success("Order placed successfully.");
            navigate("/orders");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="my-4">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-3xl mb-2">
          You are about to oreder: {service.title}
        </h2>
        <h4 className="text-2xl mb-2">Price: ${service.price} </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="input input-bordered input-ghost w-full"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="input input-bordered input-ghost w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input input-bordered input-ghost w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered input-ghost w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-28 w-full"
          placeholder="Your Message"
        ></textarea>
        <input
          type="submit"
          value="Order Confirm"
          className="btn border-0 bg-orange-500 hover:bg-orange-600 w-full my-2 normal-case"
        />
      </form>
    </div>
  );
};

export default CheckOut;
