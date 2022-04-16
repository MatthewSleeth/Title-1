import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";

export default function Home() {
  const [state, setState] = useState(); // enter some default value
  const [locale, setLocale] = useState(); // enter some default value
  const [totalStudents, setTotalStudents] = useState(); // enter some default value
  const [asianStudents, setAsianStudents] = useState(); // enter some default value
  const [hispanicStudents, setHispanicStudents] = useState(); // enter some default value
  const [blackStudents, setBlackStudents] = useState(); // enter some default value
  const [whiteStudents, setWhiteStudents] = useState(); // enter some default value
  const [hawaiianStudents, setHawaiianStudents] = useState(); // enter some default value
  const [mixedStudents, setMixedStudents] = useState(); // enter some default value
  const [freeLunchStudents, setFreeLunchStudents] = useState(); // enter some default value
  const [reducedLunchStudents, setReducedLunchStudents] = useState(); // enter some default value

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/results", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((error) => console.log(error));
  }, []);

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
        <div>
          <Grid container spacing={2} sx={{ m: 1 }}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Enter State
                </Grid>
                {state ? (
                  <Grid item xs={6}>
                    <TextField
                      id="state"
                      variant="outlined"
                      select
                      label="Select"
                      value={state}
                      onChange={handleStateChange}
                      helperText="Please select your state"
                    />
                  </Grid>
                ) : (
                  <Grid item xs={6}>
                    <TextField
                      error
                      id="state"
                      variant="outlined"
                      select
                      label="Select"
                      value={state}
                      onChange={handleStateChange}
                      helperText="Please select a valid state"
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  Enter Locale
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="locale"
                    variant="outlined"
                    select
                    label="Select"
                    value={locale}
                    onChange={handleLocaleChange}
                    helperText="Please select your locale"
                  />
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
                    id="totalStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={totalStudents}
                    onChange={handleTotalStudentsChange}
                    helperText=""
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
                    id="asianStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={asianStudents}
                    onChange={handleAsianStudentsChange}
                    helperText=""
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
                    id="hispanicStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={hispanicStudents}
                    onChange={handleHispanicStudentsChange}
                    helperText=""
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
                    id="blackStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={blackStudents}
                    onChange={handleBlackStudentsChange}
                    helperText=""
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
                    id="whiteStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={whiteStudents}
                    onChange={handleWhiteStudentsChange}
                    helperText=""
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
                    id="hawaiianStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={hawaiianStudents}
                    onChange={handleHawaiianStudentsChange}
                    helperText=""
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
                    id="mixedStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={mixedStudents}
                    onChange={handleMixedStudentsChange}
                    helperText=""
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
                    id="freeLunchStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={freeLunchStudents}
                    onChange={handleFreeLunchStudentsChange}
                    helperText=""
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
                    id="reducedLunchStudents"
                    variant="outlined"
                    type="number"
                    label=""
                    defaultValue="0"
                    min="0"
                    value={reducedLunchStudents}
                    onChange={handleReducedLunchStudentsChange}
                    helperText=""
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => console.log("Submitted")}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
