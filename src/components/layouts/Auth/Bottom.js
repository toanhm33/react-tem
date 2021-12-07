import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bottomContainer: {
    boxShadow: 'none',
    background: theme.palette.colors.strongCyan,
    height: 40,
    minHeight: 35,
  },
  bottomContent: {
    textAlign: 'center',
    width: '100%',
    color: theme.palette.colors.white,
    fontSize: 12,
  },
}));

function Bottom({ className, ...rest }) {
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
