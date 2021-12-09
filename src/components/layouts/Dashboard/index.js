import React, { Suspense, useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from 'react-router';
// import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles';
import { LinearProgress, withWidth } from '@material-ui/core';
import Bottom from './Bottom';
import TopBar from './TopBar';
import { useAppSelector } from 'src/app/hooks';

const useStyles = makeStyles((theme) => ({
  container: {
    // maxWidth: 1620,
    marginTop: 64,
    width: '100%',
    minHeight: 'calc(100vh - 40px)',
    overflowX: 'hidden',
    display: 'flex',
    background: '#ba5370',
    background: 'linear-gradient(to right, #000428, #004e92)',
  },
  content: {
    paddingTop: 83,
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    backgroundColor: '#00BCD4',
  },
  wrapContent: {
    maxWidth: 1480,
    width: '100%',
  },
}));

function Dashboard({ route, width }) {
  const classes = useStyles();
  const history = useHistory();
  const isLogging = useAppSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    
  }, [history, isLogging])
  return (
    <>
      <TopBar/>
      <div className={classes.container}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </div>
      <Bottom />
    </>
  );
}

Dashboard.propTypes = {
  route: PropTypes.object,
  width: PropTypes.string,
};

export default withWidth()(Dashboard);
