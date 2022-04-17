import React from "react";
import { useEffect, useState, useReducer } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { height, width } from "@mui/system";

export default function Home() {
  const [states, setStates] = useState([]);
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8050/locales")
      .then((response) => response.json())
      .then((data) => setLocales(data))
      .catch((error) => console.log(error));
  }, []);

  const initialFormData = Object.freeze({
    state: "",
    locale: null,
    totalStudents: null,
    asianStudents: null,
    hispanicStudents: null,
    blackStudents: null,
    whiteStudents: null,
    hawaiianStudents: null,
    mixedStudents: null,
    freeLunchStudents: null,
    reducedLunchStudents: null,
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:5000/results", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => console.log(JSON.stringify(data)));
  };

  return (
    <>
      <Box
        sx={{
          height: "25%",
          width: "100%",
          maxheight: false,
          maxwidth: false,
          bgcolor: "#3A3845",
          borderBottom: 3,
          borderColor: "white",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            padding: 4,
            fontWeight: "medium",
            textAlign: "center",
          }}
        >
          Title One Funding: Eligibility Predictor
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          height: "auto",
          maxheight: false,
          maxwidth: false,
          bgcolor: "#F7CCAC",
          paddingTop: "4ch",
          paddingBottom: "4ch",
          "& .MuiTextField-root": { bgcolor: "white", m: 1, width: "25ch" },
          "& .MuiButton-root": {
            width: "15ch",
            fontSize: "1.5ch",
            marginBottom: "3ch",
            marginLeft: "35ch",
            bgcolor: "#826F66",
            ":hover": {
              bgcolor: "#C69B7B",
            },
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "55%",
            margin: "auto",
            paddingTop: "2ch",
            paddingBottom: "2ch",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={0} align="center" sx={{ m: 1 }}>
              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  <Typography variant="body1" color="initial">
                    Enter State
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-select-state-native"
                    name="state"
                    variant="outlined"
                    select
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select your state"
                  >
                    {states.map((state) => (
                      <option key={state.id} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Locale
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-select-locale-native"
                    name="locale"
                    variant="outlined"
                    select
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select your locale"
                  >
                    {locales.map((locale) => (
                      <option key={locale.id} value={locale.value}>
                        {locale.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Total Student Population
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-totalStudents"
                    name="totalStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Asian Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-asianStudents"
                    name="asianStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Hispanic Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-hispanicStudents"
                    name="hispanicStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Black Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-blackStudents"
                    name="blackStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of White Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-whiteStudents"
                    name="whiteStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Hawaiian Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-hawaiianStudents"
                    name="hawaiianStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Mixed Students
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-mixedStudents"
                    name="mixedStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Students who get Free Lunch
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-freeLunchStudents"
                    name="freeLunchStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item container xs={12}>
                <Grid item xs={6} alignSelf="center">
                  Enter Number of Students who get Reduced Lunch
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-number-reducedLunchStudents"
                    name="reducedLunchStudents"
                    variant="outlined"
                    type="number"
                    min="0"
                    onChange={handleChange}
                    helperText="Enter a number (minimum 0)"
                  />
                </Grid>
              </Grid>

              <Grid item>
                <Button variant="contained" type="submit">
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </>
  );
}
