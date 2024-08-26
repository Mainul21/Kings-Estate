import { NavLink } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const RIghtSide = () => {
  const{googleLogIn} = useContext(AuthContext)

  const handleGoogle = () =>{
      googleLogIn()
      .then((result) => {
        toast.success('Logged In Successfully')
      }).catch((err) => {
        toast.error(err.message)
      });
  }

  return (
    <div>
      <div className="flex flex-col mt-2">
        <NavLink>
          <button onClick={handleGoogle} className="btn btn-outline btn-primary w-11/12 mx-2 mb-3">
            <FaGoogle></FaGoogle> Google
          </button>
        </NavLink>
        <NavLink>
          <button className="btn btn-outline btn-secondary w-11/12 mx-2">
            <FaGithub></FaGithub> GitHub
          </button>
        </NavLink>
      </div>
      <div className="mt-5">
        <div className="stats stats-vertical border w-full mx-auto">
          <div className="stat">
            <div className="stat-title">Visits</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIghtSide;
