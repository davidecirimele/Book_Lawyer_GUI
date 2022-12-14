import { React, useState, useEffect } from "react";
import "./myProfile.css";
import { Input } from "@mui/material";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Sidebar from "../components/Sidebar";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import { Grid, styled, Paper } from "@mui/material/";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import "./myProfile.css";

const MyProfile = () => {
  const [data, setData] = useState({
    username: "",
    lastName: " ",
    email: " ",
    addressClient: " "
  });
  const [profile, setProfile] = useState(null);

  const getToken = () => sessionStorage.getItem("token");

  const fetchUserProfile = async () => {
    try {
      const result = await axios.get(`${baseUrl}/auth/user/`, {
        headers: {
          authorization: `Token ${getToken()}`
        }
      });

      setProfile(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  return (
    <div>
      <div style={{ marginLeft: 50, marginTop: 20 }}>
        <h3>My Profile</h3>
        <h3> Welcome {profile?.username}</h3>
      </div>
      <div className="cardProfile">
        <Sidebar>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Card sx={{ maxWidth: 445 }} className="firstCard">
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      U
                    </Avatar>
                  }
                  title="Profile Information"
                />
                <CardContent>
                  <div className="inputFirstName">
                    <span>First Name</span>
                    <div>
                      <Input
                        disabled
                        name="username"
                        value={profile?.username}
                        onChange={handleInputChange}
                      ></Input>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <span>email</span>
                    <div>
                      <Input
                        disabled
                        name="email"
                        value={profile?.email}
                        onChange={handleInputChange}
                      ></Input>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Sidebar>
      </div>
    </div>
  );
};

export default MyProfile;
