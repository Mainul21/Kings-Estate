import { FaHouse,FaLocationDot,FaDollarSign,FaClipboardUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const PropertyCard = ({ property }) => {
  const { id,estate_title, price, status, area, location,image } = property;
  return (
    <div className="card bg-base-100 image-full w-11/12 shadow-xl mb-3">
      <figure>
        <img
          className="rounded"
          src={image}
          alt={estate_title}
        />
      </figure>
      <div className="card-body justify-center items-center">
        <h2 className="card-title text-4xl font-bold">{estate_title}</h2>
        <div className="border rounded p-4 mt-4 text-xl font-semibold h-48">
            <div className="mb-2 flex flex-col-reverse">
                <span className="mr-3 flex gap-2 items-center justify-start"><FaHouse></FaHouse> Area: {area}</span>
                <span className="flex gap-2 items-center justify-start"><FaLocationDot></FaLocationDot>Location: {location}</span>
            </div>
            <div className="mb-2 flex flex-col">
                <span className="mr-2 flex gap-2 items-center justify-start"><FaClipboardUser></FaClipboardUser>Status: {status}</span>
                <span className="flex gap-2 items-center justify-start"><FaDollarSign></FaDollarSign>Price: {price}</span>
            </div>
        </div>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}><button className="btn btn-primary">Show More</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
