import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import * as CONSTANT from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: 'none',
    background: theme.palette.colors.white,
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
    color: theme.palette.colors.darkGray,
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
  const [title, setTitle] = useState('');
  const [url] = useState('/');

  useEffect(() => {
    switch (role) {
      case CONSTANT.COMPANY:
        setTitle('for BUSINESS');
        break;
      case CONSTANT.DOCTOR:
        setTitle('for DOCTOR');
        break;
      case CONSTANT.ADMIN:
        setTitle('for ADMIN');
        break;
      default:
        break;
    }
  }, [role]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <RouterLink className={classes.heightHeader} to={url}>
          <img
            className={classes.logoLeft}
            alt="Medical concerto"
            src="/images/logo.png"
          />
        </RouterLink>
        <Typography className={classes.logo}>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  role: PropTypes.string.isRequired,
};

export default TopBar;
