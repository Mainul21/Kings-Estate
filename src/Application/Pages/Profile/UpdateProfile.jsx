import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {setUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setUserProfile(data.displayName, data.photoURL)
    .then(()=>{toast.success('Profile Updated')
        navigate('/')
    })

    .catch((error)=>{
        toast(error.message)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col items-center max-w-screen-sm bg-white p-6 shadow-md rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 mb-4"
          src="https://i.postimg.cc/3JdfCC69/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg"
          alt="Profile Photo"
        />
        <div className="w-full">
          <label className="block text-start mb-2 font-bold">Name</label>
          <input
            className="border border-gray-300 rounded w-full mb-4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="UserName"
            required
            {...register("displayName")}
          />
        </div>
        <div className="w-full">
          <label className="block text-start mb-2 font-bold">Photo URL</label>
          <input
            className="border border-gray-300 rounded w-full mb-4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Photo URL"
            {...register("photoURL")}
          />
        </div>
        <input
          className="btn btn-primary w-full mt-4 py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded"
          type="submit"
          value="Update Profile"
        />
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default UpdateProfile;
