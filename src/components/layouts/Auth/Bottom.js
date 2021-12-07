import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  bottomContainer: {
    boxShadow: 'none',
    height: 40,
    minHeight: 35,
  },
  bottomContent: {
    textAlign: 'center',
    width: '100%',
    fontSize: 12,
  },
}));

function Bottom({ className }) {
  const classes = useStyles();

  return (
    <div>
      <Toolbar className={classes.bottomContainer}>
        <Typography className={classes.bottomContent}>
          Copyright ©2020 Medical Concerto Co., Ltd. All rights reserved.
        </Typography>
      </Toolbar>
    </div>
  );
}

Bottom.propTypes = {
  className: PropTypes.string,
};

export default Bottom;
