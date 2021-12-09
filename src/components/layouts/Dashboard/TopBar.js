import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Typography,
  Container,
} from '@material-ui/core';
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { authActions } from 'src/views/auth/authSlice';

// import MenuIcon from '@material-ui/icons/Menu'
// import * as ACTIONS from 'src/store/actions'
// import { handleSignOut } from '../../utils/auth'
// import * as CONSTANT from '../../constants'
// import { getStorageItem } from '../../utils/storage'
// import NotificationsTooltip from '../Public/NotificationsTooltip'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.13)',
    zIndex: 1201,
  },
  toolbar: {
    '@media(max-width: 450px)': {
      padding: 0,
    },
  },
  customContainer: {
    // '@media(max-width: 1620px)': {
    //   width: '100%'
    // }
    maxWidth: 1620,
    width: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  logo: {
    height: 30,
  },
  logoTitle: {
    marginLeft: 20,
    marginTop: 6,
  },
}));

function TopBar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(state => state.auth.isLoggedIn);
  const handleClick = () => {
    if(isLogging) {
      dispatch(authActions.logout());
      history.push('/login');
    } else {
      history.push('/login');
    }
  };

  useEffect(() => {}, [isLogging])

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Container
        maxWidth="lg"
        component="div"
        className={classes.customContainer}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.flexGrow} />
          {isLogging ? <Button onClick={() => {history.push('/dashboard/student')}}>Student</Button> : ''}
          {isLogging ? <Button onClick={() => {history.push('/dashboard/city')}}>City</Button> : ''}
          <Button onClick={handleClick}>{isLogging ? 'logout' : 'login'}</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func,
};

export default TopBar;
