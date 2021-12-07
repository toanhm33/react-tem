import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: 'none',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.13)',
  },
  toolbar: {
    height: 64,
    marginLeft: 50,
    overflow: 'hidden',
    '@media(max-width: 450px)': {
      padding: 0,
      marginLeft: 0,
    },
  },
  label: {
    fontSize: '16px',
    letterSpacing: '1.2px',
    marginLeft: '-10px',
    fontWeight: 'bolder',
    '@media(max-width: 450px)': {
      fontSize: '14px',
      marginLeft: '-20px',
    },
  },
  logo: {
    marginLeft: 20,
    marginTop: 13,
    '@media(max-width: 450px)': {
      width: 280,
    },
    '@media(max-width: 350px)': {
      width: 250,
    },
  },
  logoLeft: {
    height: 34,
    '@media(max-width: 450px)': {
      width: 280,
    },
    '@media(max-width: 350px)': {
      width: 250,
    },
  },
  heightHeader: {
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

function TopBar({ className, role, ...rest }) {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <RouterLink className={classes.heightHeader}>
          <img
            className={classes.logoLeft}
            alt="Medical concerto"
            src="/images/logo.png"
          />
        </RouterLink>
        <Typography className={classes.logo}>title</Typography>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  role: PropTypes.string.isRequired,
};

export default TopBar;
