import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '80px',
    background: '#ba5370',
    background: 'linear-gradient(to right, #000428, #004e92)',
  },
}));

const Bottom = () => {
  const classes = useStyles();

  return <footer className={classes.root}>
    <div>
      bottom
    </div>
  </footer>;
};

export default Bottom;
