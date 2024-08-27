import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {

    const {resetPassword} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleReset = e =>{
        e.preventDefault()
        const email = e.target.email.value
        resetPassword(email)
        .then(()=>{
            toast('Check Your Email')})
        .catch(error => alert(error.message))
        navigate('/login')
    }

    return (
        <div className="min-h-[500px]">
            <div className="bg-base-200 w-1/2 mx-auto mt-10 p-4 my-5 shadow-xl">
            <form onSubmit={handleReset} className="bg-white shadow-xl border rounded p-4 flex flex-col w-3/4 mx-auto">
                <input className="border p-4 mb-4" placeholder="Email" type="email" name="email" id="" />
                <input className="btn btn-primary" type="submit" />
            </form>
            <Toaster></Toaster>
            </div>
        </div>
    );
};

export default ResetPassword;