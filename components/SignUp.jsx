import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../src/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("mechanic");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signupUser({ email, password, role })).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-[rgb(255,245,245)] p-8 rounded-2xl ">
  {/* <h2 className="text-3xl font-bold text-center text-[rgb(139,0,0)]">
    Sign Up
  </h2> */}

  <input
    type="email"
    placeholder="Enter your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border border-[rgb(250,128,114)] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] text-[rgb(139,0,0)] placeholder:text-[rgb(220,20,60)]"
  />

  <input
    type="password"
    placeholder="Enter your Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="border border-[rgb(250,128,114)] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] text-[rgb(139,0,0)] placeholder:text-[rgb(220,20,60)]"
  />

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="border border-[rgb(250,128,114)] p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] text-[rgb(139,0,0)] bg-white"
  >
    <option value="mechanic">Mechanic</option>
    <option value="carwasher">Carwasher</option>
  </select>

  <button
    className="p-2 rounded-xl text-white bg-[rgb(139,0,60)] hover:bg-[rgb(255,69,58)] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
    disabled={loading}
  >
    {loading ? "Creating..." : "Sign Up"}
  </button>

  {error && <p className="text-[rgb(220,20,60)] text-sm text-center">{error}</p>}
</form>
  );
}
