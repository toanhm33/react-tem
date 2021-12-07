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

  const [title, setTitle] = useState('');
  const [url] = useState('/');

  const onLogout = () => {};

  useEffect(() => {}, []);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Container
        maxWidth="lg"
        component="div"
        className={classes.customContainer}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              color="primary"
              onClick={onOpenNavBarMobile}
            >
              xcc
            </IconButton>
          </Hidden>
          <RouterLink to={url}>
            <img
              className={classes.logo}
              alt="Medical concerto"
              src="/images/logo.png"
            />
          </RouterLink>
          <Typography className={classes.logoTitle}>{title}</Typography>
          <div className={classes.flexGrow} />
          <Button onClick={onLogout}>ログアウト</Button>

          <Hidden mdDown>
            <IconButton className={classes.menuButton}></IconButton>
          </Hidden>
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
