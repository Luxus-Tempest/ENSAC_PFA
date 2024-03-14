import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { comCss } from "./ComponentsCss";
import heroimg from "../image/hero-img.png";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
//import "../index-tailwind.css";
import SignUp from "./SignUp";

const Hero = () => {
  const classes = comCss();
  return (
    <Box className={classes.hero_section}>
      <Container maxWidth="lg">
        <Box className={classes.hero_banner}>
          <Box className={classes.hero_banner_laft}>
            <Typography
              variant="h2"
              component="h2"
              className={classes.hero_title}
            >
              Bienvenu(e) sur votre plateforme d'apprentissage
            </Typography>
           { /*<SignIn />
            <SignUp />*/}
            <Typography variant="h5" component="p" className={classes.hero_des}>
              Instructeurs sélectionnés avec soin et cours élaborés par des
              experts, conçus pour les étudiants et entrepreneurs modernes.
            </Typography>
            <Box className={classes.hero_button}>
              <Button
                sx={{ marginRight: "12px" }}
                ccomponent={NavLink}
                to="/"
                className={`${classes.button} ${classes.button_3}`}
              >
                Parcourir les cours
              </Button>

              <Button
                ccomponent={NavLink}
                to="/"
                className={`${classes.button} ${classes.button_1}`}
              >
                Êtes-vous un instructeur ?
              </Button>
            </Box>
          </Box>
          <Box className={classes.hero_banner_right}>
            <img
              src={heroimg}
              alt="hero img"
              className={classes.img_responsive}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
