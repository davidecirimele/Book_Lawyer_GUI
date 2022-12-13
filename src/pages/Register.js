import React, { useState } from "react";

import { Box, Card, TextField, Typography, Button } from "@mui/material";
import "./login.css";

import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";

const Register = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const handleSubmitRegister = async () => {
    console.log(data);
    try {
      const response = await axios.post(`${baseUrl}/auth/registration/`, data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      navigate("/myprofile");

      sessionStorage.setItem("key", response.data.key);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const btnstyle = { margin: "8px 0px" };
  return (
    <div className="login">
      Register to Hire lawyer
      <Card sx={{ maxWidth: 450, marginTop: 5 }} elevation={0} display="flex">
        <Box sx={{ m: "1rem" }} />

        <TextField
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <Box sx={{ m: "2rem" }} />
        <TextField
          label="Email"
          placeholder="Enter Email"
          variant="outlined"
          fullWidth
          required
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <Box sx={{ m: "2rem" }} />
        <TextField
          label="Password"
          name="password1"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={data.password1}
          onChange={handleInputChange}
        />
        <Box sx={{ m: "2rem" }} />
        <TextField
          label="Confirm Password"
          name="password2"
          placeholder="Enter confirm password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={data.password2}
          onChange={handleInputChange}
        />
        <Box sx={{ m: "2rem" }} />
        <div style={{ mx: 100 }}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            style={btnstyle}
            onClick={handleSubmitRegister}
          >
            Register
          </Button>
          <Box sx={{ m: "1rem" }} />
          <Typography elevation={0}>
            {" "}
            Already have an account ? <Link to="/login">Login</Link>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default Register;
