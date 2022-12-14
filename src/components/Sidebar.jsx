import React, { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaBars, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, IconButton } from "@mui/material";
import { baseUrl } from "../api/baseUrl";

const Sidebar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const getToken = () => sessionStorage.getItem("token");
  const handleLogOut = async () => {
    try {
      const response = await axios.post(`${baseUrl}/auth/logout/`, {
        headers: {
          authorization: `Token ${getToken()}`
        }
      });

      console.log(response);
      sessionStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const menuItem = [
    {
      path: "/myprofile",
      name: "My Profile",
      icon: <FaUserAlt />
    },
    {
      path: "/bookappt",
      name: "Book appointment",
      icon: <CgAdd />
    },
    {
      path: "/myappt",
      name: "My Appointment",
      icon: <AiFillSchedule />
    }
  ];

  return (
    <div className="containerSide">
      <div style={{ width: isOpen ? "230px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Book Lawyer{" "}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            {" "}
            <FaBars onClick={toggle} />{" "}
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activateclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <IconButton size="small" onClick={handleLogOut}>
          <FaSignOutAlt style={{ color: "white", marginLeft: 15 }} />
        </IconButton>
      </div>
      <main>{props.children}</main>
    </div>
  );
};

export default Sidebar;