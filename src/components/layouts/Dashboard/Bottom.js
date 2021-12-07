import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  footer__display: {
    zIndex: 1201,
  },
}));

const Bottom = () => {
  const classes = useStyles();

  return <footer>ccc</footer>;
};

export default Bottom;
