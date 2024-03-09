import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { comCss } from "./ComponentsCss";
import { Homeextra_1 } from "../data";
import { Video } from "lucide-react";
//import "../index-tailwind.css";
//{'text-[#c28135] flex items-center text-[20px] bg-[#ffeeda] p-2 rounded-full mr-2'}

const Extra1 = () => {
  const classes = comCss();
  return (
    <Box className={classes.extea1_section}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {Homeextra_1.map((item, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Box className={classes.extea1_icon_box}>
                <div
                  style={{
                    color:"#c28135", 
                    fontSize: "20px !important",
                    display: "flex",
                    alignItems:"center", 
                    background: "#ffeeda",
                    padding: "0.7rem",
                    borderRadius: "50%",
                    marginRight: "0.6rem",
                  }}
                >
                  {item.icon}
                </div>
                <Box className={classes.extea1_content}>
                  <Typography
                    variant="h4"
                    component="h4"
                    className={classes.extea1_title}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    className={classes.extea1_des}
                  >
                    {item.des}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Extra1;
