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
    fetch("http://localhost:5000/index", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/results", {
  //     methods: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setResult(response))
  //     .catch((error) => console.log(error));
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     state &&
  //     locale &&
  //     totalStudents &&
  //     asianStudents &&
  //     hispanicStudents &&
  //     blackStudents &&
  //     whiteStudents &&
  //     hawaiianStudents &&
  //     mixedStudents &&
  //     freeLunchStudents &&
  //     reducedLunchStudents
  //   ) {
  //     fetch("http://localhost:8080/user.json", {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify({
  //         state,
  //         locale,
  //         totalStudents,
  //         asianStudents,
  //         hispanicStudents,
  //         blackStudents,
  //         whiteStudents,
  //         hawaiianStudents,
  //         mixedStudents,
  //         freeLunchStudents,
  //         reducedLunchStudents,
  //       }),
  //     });
  //   }
  // };

  return (
    <>
      <Box
        sx={{
          height: "25%",
          width: "100%",
          maxheight: false,
          maxwidth: false,
          bgcolor: "primary.main",
          borderBottom: 1.7,
          borderColor: "#06818a",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            padding: 4,
            fontWeight: "medium",
          }}
        >
          Title One Funding: Eligibility Predictor
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          height: 600,
          maxheight: false,
          maxwidth: false,
          bgcolor: "primary.white",
          "& .MuiTextField-root": { bgcolor: "white", m: 1, width: "25ch" },
          "& .MuiButton-root": {
            width: "15ch",
            fontSize: "1.5ch",
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ m: 1 }}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Enter State
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
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                    helperText="Enter a number"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
