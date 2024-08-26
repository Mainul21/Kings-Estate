import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            src={user.photoURL|| 'https://via.placeholder.com/150'}
            alt="User Profile"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.displayName || 'Username'}</h2>
          <p className="mt-2 text-gray-600">{user.email || 'email@example.com'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
