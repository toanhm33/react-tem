import React, { Suspense, useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import Topbar from './Topbar';
import Bottom from './Bottom';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    position: 'relative'
  },
  wrapper: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    paddingTop: 64,
  }
}));

function Auth({ route }) {
  const classes = useStyles();

  return (
    <>
      <Topbar/>
      <div className={classes.container}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
      </div>
      <Bottom />
    </>
  );
}

Auth.propTypes = {
  route: PropTypes.object,
};

export default Auth;
