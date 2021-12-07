import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '80px'
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
