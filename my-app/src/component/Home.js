import React, { useState } from "react";
import BoxContainer from "./BoxContainer";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SelectPlayers from "./SelectPlayers";
import SelectPunishments from "./SelectPunishments";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Home = () => {
  const classes = useStyles();
  const [totalPlayer, setTotalPlayer] = useState(0);
  const [clickedPlay, setClickedPlay] = useState(false);
  const [multiValue, setMultiValue] = useState([]);

  const onSelectHandleChange = (value) => {
    setTotalPlayer(value);
  };

  const onMultiSelect = (multiVal) => {
    setMultiValue(multiVal);
  };
  const showPlayerBtns = () => {
    let btnWrap = [];

    for (var i = 1; i <= totalPlayer; i++) {
      btnWrap.push(i);
    }
    return btnWrap;
  };

  const onPlay = () => {
    setClickedPlay(!clickedPlay);
    console.log(totalPlayer);
    console.log(multiValue);
  };

  return (
    <>
      <div className={classes.root}>
        <h1>Home Component</h1>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <SelectPlayers refHandleChange={onSelectHandleChange} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <SelectPunishments
                refHandleMultiSelect={onMultiSelect}
                multival={multiValue}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={onPlay}>
              {clickedPlay ? "Stop" : "Play"}
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
              >
                {clickedPlay &&
                  showPlayerBtns().map((v, i) => (
                    <Button key={v}>Player {v}</Button>
                  ))}
              </ButtonGroup>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
