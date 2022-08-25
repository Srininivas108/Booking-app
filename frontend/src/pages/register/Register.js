import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css"

const Register = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
        country:"",
        city:"",
        phone:"",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container">
			<div className="formcontainer">
				<div className="left">
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="whitebtn">
							Sing in
						</button>
					</Link>
				</div>
				<div className="right">
					<form className="formcontainer" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User name"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className="input"
						/>
                        <input
							type="text"
							placeholder="Country"
							name="country"
							onChange={handleChange}
							value={data.country}
							required
							className="input"
						/>
                          <input
							type="text"
							placeholder="City"
							name="city"
							onChange={handleChange}
							value={data.city}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
                          <input
							type="tel"
							placeholder="Mobile number"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="errormsg">{error}</div>}
						<button type="submit" className="greenbtn">
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;