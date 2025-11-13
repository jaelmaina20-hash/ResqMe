import React, { useEffect } from "react";
import Signup from "../components/SignUp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupPage() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(255,210,210)]">
      <div className="bg-[rgb(255,245,245)] p-8 rounded-2xl shadow-lg w-96 border border-[rgb(250,128,114)]">
        <h1 className="text-3xl font-bold text-center mb-4 text-[rgb(220,20,60)]">Create an Account</h1>
        <Signup />
        <p className="text-center text-sm text-[rgb(139,0,0)] mt-4">Already have an account?{" "}
          <Link to="/login" className="text-[rgb(255,69,58)] hover:text-[rgb(255,0,0)] font-medium transition-colors">Log in here
          </Link></p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
