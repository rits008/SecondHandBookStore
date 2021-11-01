import React from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MyTextField from "../base/MyTextField";
import MyButton from "../base/MyButton";
import MyAlert from "../base/MyAlert";
/* import api from "../../network/"; */
import { Link, useHistory } from "react-router-dom";

function Sell() {
  const classes = useStyles();

  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [page, setPages] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [payment, setPayment] = React.useState("");

 /*  const [showPassword, setShowPassword] = React.useState(false); */
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({}); 

  const buttonStyle = {
    padding: "10px 12px",
    borderRadius: "8px",
    transition: "all 0.1s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#0069d9",
    },
    "&.disabled": {
      cursor: "not-allowed",
    },
  };
  return (
    <div>
      {error.message && (
        <MyAlert
          message={error.message}
          severity={error.status}
          onClose={() => setError({})}
        />
      )}
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              <b>Sell Book</b>
            </Typography>
           {/*  <Typography variant="body1" align="center" gutterBottom>
              Already have account <Link to="/login"> Sign in</Link>
            </Typography> */}
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Title"
              placeholder="enter your Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Category"
              placeholder="enter category of book"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Pages"
              type="enter no of pages"
              value={page}
              onChange={(e) => setPages(e.target.value)}
              placeholder="enter your password"
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Price"
              placeholder="enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Author"
              placeholder="enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Contact"
              placeholder="enter contact detail"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label="Payment"
              placeholder="enter payment detail"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              label="show password"
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
            />
          </Grid> */}
          <Grid item xs={12}>
            <MyButton
             // onClick={handleUserRegister}
              fullWidth
              disabled={loading}
              label="Sell Book"
              styles={buttonStyle}
              endIcon={<ArrowRightAltIcon sx={{ fontSize: "40px" }} />}
            />
          </Grid>
          <Grid item xs={12}>
            {loading && <LinearProgress />}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up(780)]: {
      width: "25%",
      marginTop: "100px",
      padding: theme.spacing(3),
      borderTop: "4px solid #626EE3",
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows[2],
      margin: "0 auto",
    },
  },

  button: {
    backgroundColor: "#626EE3",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

export default Sell;