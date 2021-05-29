import { useSelector, useDispatch } from "react-redux";
import { InCount, OutCount, Refresh } from "./redux/actions/countActions.js";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 10.4,
  },
});

function App() {
  const count = useSelector((state) => state.CountReduce );
  const counter = useDispatch();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  return (
    <div className={classes1.root, classes2.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes1.paper}>
          <Button variant="contained" color="primary" onClick={() => counter(OutCount())}>
            <RemoveIcon />
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes1.paper}>
          <ThemeProvider theme={theme}>
            <Typography>
              {count}
            </Typography>
          </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes1.paper}>
          <Button variant="contained" color="secondary" onClick={() => counter(InCount())}>
            <AddIcon />
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes1.paper}>
            <Button variant="contained" onClick={() => counter(Refresh())}>
              <RefreshIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
