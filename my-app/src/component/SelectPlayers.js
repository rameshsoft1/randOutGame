import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SelectPlayer(props) {
  const classes = useStyles();
  const [totalPlayer, setTotalPlayer] = React.useState("");

  const handleChange = (event) => {
    setTotalPlayer(event.target.value);
    props.refHandleChange(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Total Players
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={totalPlayer}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
            <MenuItem value={v} key={`id_${v}`}>
              {v}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
