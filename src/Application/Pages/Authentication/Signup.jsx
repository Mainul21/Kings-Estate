import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {

  const {signUp,setUserProfile} = useContext(AuthContext)
  const [show, setShow] = useState(false)

  const handleSignUp = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const name = form.get('name')
    const photoURL = form.get('photo')
    const password = form.get('password')

    signUp(email,password)
    .then(()=>{
      setUserProfile(name,photoURL)
      .then(()=>toast.success("User Created Successfully"))
      .catch(error => toast.error(error.message))

    })
    .catch(error =>{
      toast.error(error.message)
    })
    
  }




  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Yourself</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                
              />
            </div>
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
                type={show?"password":'text'}
                placeholder="password"
                name="password"
                className="input input-bordered relative"
                required
              />
              <button className="absolute right-10 top-2/3 transform" onClick={()=>{setShow(!show)}}>{show? <FaEye></FaEye>: <FaEyeSlash></FaEyeSlash>}</button>
              <label className="label">
                <span className="font-bold"> Already Have An Account? <Link className="text-blue-700" to={'/login'}>Log In</Link></span>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Register" />
            </div>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Signup;
