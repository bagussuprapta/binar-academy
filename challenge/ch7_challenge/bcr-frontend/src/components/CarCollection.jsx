import { useState, useEffect } from "react";

import CarCard from "./CarCard";
import "./CarCollection.css";

function CarCollection() {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/cars")
      .then((response) => response.json())
      .then((cars) => setCars(cars))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container car-collection position-relative">
      <div className="row">
        {cars?.cars?.map((cars) => {
          return (
            <CarCard
              key={cars.plate}
              srcImg="./images/drawkit-404.svg"
              manufacture={cars.manufacture}
              type={cars.type}
              rentPerDay={cars.rentPerDay.toLocaleString("id-ID")}
              description={cars.description}
              capacity={cars.capacity}
              transmision={cars.transmision}
              year={cars.year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CarCollection;
