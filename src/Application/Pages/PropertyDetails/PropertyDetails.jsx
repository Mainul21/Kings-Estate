import { useLoaderData, useParams } from "react-router-dom";
import { FaHouse,FaLocationDot,FaDollarSign,FaClipboardUser } from "react-icons/fa6";

const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const estate = properties.find((property) => property.id == id);
  console.log(estate);

  const {
    estate_title,
    price,
    status,
    area,
    location,
    image,
    details,
    facilities,
  } = estate;
  return (
    <div className="mb-4 font-playfair">
      <div>
        <img className="rounded" src={image} alt="" />
      </div>
      <div className=" mt-4 space-y-3">
        <h2 className="text-4xl font-bold ">{estate_title}</h2>
        <p className="text-2xl">{details}</p>
      </div>
      <div className="mt-4 text-2xl flex flex-col justify-center">
        <span className="flex justify-center items-center mb-2">
            <FaLocationDot className="mr-2"></FaLocationDot>
          Location: <span className="font-bold ml-2">{location}</span>
        </span>
        <span className="flex justify-center items-center mb-2">
            <FaHouse className="mr-2"></FaHouse>
          Area: <span className="font-bold ml-2">{area}</span>
        </span>
      </div>
      <div className="flex flex-col text-2xl mb-4">
        <span className="flex justify-center items-center mb-2">
            <FaClipboardUser className="mr-2"></FaClipboardUser>
            Status: <span className="font-bold ml-2">{status}</span></span>
        <span className="flex justify-center items-center mb-2">
            <FaDollarSign className="mr-2"></FaDollarSign>
            Price: <span className="font-bold ml-2">{price}</span></span>
      </div>
      <div className="mb-4">
        {facilities.map((facility, idx) => (
          <div key={idx} className="badge badge-ghost badge-outline mr-2">
            {facility}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetails;
