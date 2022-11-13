import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      `https://genius-car-server-beige.vercel.app/services?search=${search}&order=${
        isAsc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="my-10">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-bold my-3">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
        <div className="my-5">
          <input
            type="text"
            ref={searchRef}
            placeholder="Type here"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <button onClick={handleSearch} className="btn btn-sm mx-1">
            Search
          </button>
        </div>
        <div className="my-5 text-xl font-bold">
          <span>Sorting:</span>
          <button onClick={() => setIsAsc(!isAsc)} className="btn btn-sm mx-3">
            {isAsc ? "desc" : "asc"}
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>

      <div className="text-center">
        {services.length > 0 ? (
          <button className="btn btn-outline btn-error mt-10">
            More Services
          </button>
        ) : (
          <p className="text-xl">Nothing Found from Your Keyword Searching</p>
        )}
      </div>
    </div>
  );
};

export default Services;
