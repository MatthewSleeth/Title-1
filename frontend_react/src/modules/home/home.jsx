import React from "react";
import { useEffect, useState, useHistory } from "react";
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
  const [state, setState] = useState(1); // enter some default value
  const [states, setStates] = useState([]); // enter some default value
  const [locale, setLocale] = useState(); // enter some default value
  const [locales, setLocales] = useState([]); // enter some default value

  const [totalStudents, setTotalStudents] = useState(); // enter some default value
  const [asianStudents, setAsianStudents] = useState(); // enter some default value
  const [hispanicStudents, setHispanicStudents] = useState(); // enter some default value
  const [blackStudents, setBlackStudents] = useState(); // enter some default value
  const [whiteStudents, setWhiteStudents] = useState(); // enter some default value
  const [hawaiianStudents, setHawaiianStudents] = useState(); // enter some default value
  const [mixedStudents, setMixedStudents] = useState(); // enter some default value
  const [freeLunchStudents, setFreeLunchStudents] = useState(); // enter some default value
  const [reducedLunchStudents, setReducedLunchStudents] = useState(); // enter some default value

  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/locales")
      .then((response) => response.json())
      .then((data) => setLocales(data))
      .catch((error) => console.log(error));
  }, []);

  // const [formValues, setFormValues] = useState(defaultValues);

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

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleLocaleChange = (event) => {
    setLocale(event.target.value);
  };

  const handleTotalStudentsChange = (event) => {
    setTotalStudents(event.target.value);
  };

  const handleAsianStudentsChange = (event) => {
    setAsianStudents(event.target.value);
    console.log(event.target.value);
  };

  const handleHispanicStudentsChange = (event) => {
    setHispanicStudents(event.target.value);
  };

  const handleBlackStudentsChange = (event) => {
    setBlackStudents(event.target.value);
  };

  const handleWhiteStudentsChange = (event) => {
    setWhiteStudents(event.target.value);
  };

  const handleHawaiianStudentsChange = (event) => {
    setHawaiianStudents(event.target.value);
  };

  const handleMixedStudentsChange = (event) => {
    setMixedStudents(event.target.value);
  };

  const handleFreeLunchStudentsChange = (event) => {
    setFreeLunchStudents(event.target.value);
  };

  const handleReducedLunchStudentsChange = (event) => {
    setReducedLunchStudents(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Working");
  };

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
  //     fetch("http://localhost:8000/user.json", {
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
  //     })
  //     .then(() => history.push("/"));
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
        component="form"
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
                    value={state}
                    onChange={handleStateChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select your state"
                  >
                    {states.map((state) => (
                      <option key={state.value} value={state.value}>
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
                    value={locale}
                    onChange={handleLocaleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Please select your locale"
                  >
                    {locales.map((locale) => (
                      <option key={locale.value} value={locale.value}>
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
                    value={totalStudents}
                    onChange={handleTotalStudentsChange}
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
                    value={asianStudents}
                    onChange={handleAsianStudentsChange}
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
                    value={hispanicStudents}
                    onChange={handleHispanicStudentsChange}
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
                    value={blackStudents}
                    onChange={handleBlackStudentsChange}
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
                    value={whiteStudents}
                    onChange={handleWhiteStudentsChange}
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
                    value={hawaiianStudents}
                    onChange={handleHawaiianStudentsChange}
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
                    value={mixedStudents}
                    onChange={handleMixedStudentsChange}
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
                    value={freeLunchStudents}
                    onChange={handleFreeLunchStudentsChange}
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
                    value={reducedLunchStudents}
                    onChange={handleReducedLunchStudentsChange}
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
