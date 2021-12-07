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

const useStyles = makeStyles((theme) => ({
  container: {
    // maxWidth: 1620,
    width: '100%',
    minHeight: 'calc(100vh - 40px)',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0, // IE11 fix
    },
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
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  return (
    <>
      <TopBar onOpenNavBarMobile={() => setOpenNavBarMobile(true)} />
      <div className={classes.container}>
        <div>
          <div>
            <Suspense fallback={<LinearProgress />}>
              {renderRoutes(route.routes)}
            </Suspense>
          </div>
        </div>
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