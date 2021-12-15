import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        borderBottom: "1px solid white",
      },
    },
  }));

function Navbar() {
    const classes = useStyles();


    return(
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4">
                    Personal trainer
                </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/customerlist" className={classes.link}>
                            Customers
                        </Link>
                        <Link to="/trainingslist" className={classes.link}>
                            Trainings
                        </Link>
                        <Link to="/trainingscalendar" className={classes.link}>
                            Calendar
                        </Link>
                    </div>
      </Toolbar>
    </AppBar>
    );

}
export default Navbar;