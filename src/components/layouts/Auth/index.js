import React, { Suspense, useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as CONSTANT from '../../constants';
// import gradients from 'src/utils/gradients'
import Topbar from './Topbar';
import Bottom from './Bottom';
import { getStorageItem } from '../../utils/storage';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.contrastText,
    minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0, // IE11 fix
    },
  },
  wrapper: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 56,
    },
  },
  doctor: {
    background: theme.palette.colors.brightYellow,
  },
  company: {
    background: theme.palette.colors.vividCyan,
  },
  admin: {
    background: theme.palette.colors.whiteSmoke,
  },
}));

function Auth({ route }) {
  const classes = useStyles();
  const history = useHistory();

  const session = useSelector((state) => state.session);
  const [role, setRole] = useState('');

  const pathname = history.location.pathname;

  // console.log('Auth', session.loggedIn)
  useEffect(() => {
    if (session.loggedIn) {
      const role = getStorageItem(CONSTANT.ROLE) || 'doctor';
      history.push(`/${role}/projects`);
    }
    if (pathname.includes('/auth/doctor')) {
      setRole(CONSTANT.DOCTOR);
    } else if (pathname.includes('/auth/company')) {
      setRole(CONSTANT.COMPANY);
    } else {
      setRole(CONSTANT.ADMIN);
    }
  }, [history, session.loggedIn, pathname]);

  return (
    <>
      <Topbar role={role} />
      <div className={classes.container}>
        <div className={clsx(classes[role], classes.wrapper)}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </div>
      <Bottom />
    </>
  );
}

Auth.propTypes = {
  route: PropTypes.object,
};

export default Auth;
