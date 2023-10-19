import { useState, useContext } from "react";
import "./Signin.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../contextAPI/appContext";
export default function Sigin() {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //console.log(data);
      const response = await axios.post(`/api/login`, data);
      if (response.status === 201) {
        dispatch({ type: "UNSHOW" });
        alert("Logined Successfully");
        navigate("/");
      } else {
        alert("Login Failed");
        throw new Error("Login Failed");
      }
    } catch (error) {
      alert("Login Failed");
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="alert alert-warning" role="alert">
        You must log in to view this content.
      </div>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">LOG-IN</h1>
            <form onSubmit={handleSubmit}>
              <input
                onChange={inputHandler}
                name="email"
                value={data.email}
                type="email"
                placeholder="Email ID"
              />
              <input
                onChange={inputHandler}
                name="password"
                value={data.password}
                type="password"
                placeholder="Password"
              />
              <button className="opacity mt-3 mb-0" type="submit">
                SUBMIT
              </button>
            </form>
            <div className="register-forget opacity">
              <NavLink to="/register">Create an account</NavLink>
              <a href="">Forgot Password ?</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
  );
}
