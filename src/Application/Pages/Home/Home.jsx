import { useContext, useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import RIghtSide from "../../components/RightSide/RIghtSide";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("estate.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  console.log(user);

  return (
    <div>
      <div className="flex items-center justify-center">
        <Slider />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-4">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <RIghtSide />
        </div>
      </div>
    </div>
  );
};

export default Home;
