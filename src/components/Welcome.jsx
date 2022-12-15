import React from "react";
import Card from "@mui/material/Card";
import "./welcom.css";
import { CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid, styled, Paper } from "@mui/material";
import { Navbar } from "react-bootstrap";

const Welcome = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  const data = [
    {
      name: "lawyer",
      catagory: "Criminal law",
      description: "I have been a lawyer with 15 year expriance"
    },
    {
      name: "lawyer",
      catagory: "Criminal law",
      description: "I have been a lawyer with 15 year expriance"
    }
  ];

  return (
  
    <div>
      <div style={{ marginLeft: 40 }}>
        <h3> Lawyer page </h3>
        <Grid container spacing={4}>
          {data.map(lawyer => (
            <Grid xs={6} item>
              <Card
                sx={{
                  marginTop: 5,
                  maxWidth: 450,
                  display: "flex"
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 180 }}
                  src="./Image/lawyer.png"
                  alt="profile Image"
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    component="h3"
                    color="text.Primary"
                    sx={{ marginBottom: 3 }}
                  >
                    {lawyer.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{ marginBottom: 2 }}
                  >
                    {" "}
                    {lawyer.catagory}
                  </Typography>
                  <Typography>{lawyer.description}</Typography>
                  <Link to="/bookappt">Hire Lawyer</Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
 
    
  );
};

export default Welcome;
