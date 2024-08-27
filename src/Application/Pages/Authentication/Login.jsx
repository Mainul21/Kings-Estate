import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye,FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const {user,logIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const location = useLocation()
  console.log(location)


  const handleLOgIn = e =>{
    e.preventDefault()
    
    const email = e.target.email.value
    const password = e.target.password.value
    logIn(email,password)
    .then(()=>{

      toast.success('Logged In Successfully')
      location.state? navigate(location.state):navigate('/')
    })
    .catch(error =>{
      toast.error(error.message)
    })

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLOgIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show? 'password':'text'}
                placeholder="password"
                name="password"
                className="input input-bordered relative"
                required
              />
              <button className="absolute right-10 top-2/4 transform -translate-y-1/2" onClick={()=>{
                setShow(!show)
              }}>{show? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</button>
              <label className="label flex flex-col">
                <Link to={'/reset'}  className="label-text-alt link link-hover text-start">
                  Forgot password?
                </Link>
                <span className="font-bold text-xs mt-3 text-start">Don't Have An Account? <Link to={'/signup'} className="text-blue-500">Register</Link></span>
              </label>
            </div>
            <div className="form-control mt-4">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Login;
