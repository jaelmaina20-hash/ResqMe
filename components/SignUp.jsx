import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!role) {
      toast.error("Please select a role!");
      return;
    }

    try {     
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("role", role);
        toast.success("Account created successfully!");     
        setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(255,245,245)] p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-[rgb(139,0,0)] mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,69,58)]"
            value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,69,58)]" value={password} onChange={(e) => setPassword(e.target.value)} required/>

          {/* Role Selection */}
          <div className="flex justify-between mt-2">
                <label className="flex items-center gap-2">
                <input type="radio" name="role" value="mechanic" checked={role === "mechanic"} onChange={(e) => setRole(e.target.value)}className="accent-[rgb(139,0,0)]"/>Mechanic</label>
                <label className="flex items-center gap-2">
                <input type="radio" name="role" value="carwasher" checked={role === "carwasher"} onChange={(e) => setRole(e.target.value)}className="accent-[rgb(139,0,0)]"/>Car Washer</label>
          </div>

          <button type="submit" className="w-full bg-[rgb(139,0,60)] text-white py-3 rounded-lg hover:bg-[rgb(220,20,60)] transition-all"> Register </button>
        </form>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
