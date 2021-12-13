import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal, { ModalProps } from '@material-ui/core/Modal';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: theme.shadows[5],
      padding: 30
    },
  }),
);

export const ModalComponent: React.FC<ModalProps> = (props) => {
  const classes = useStyles();
  const { children } = props
  return (
    <Dialog
      {...props}
    >
      <div className={classes.root}>
        {children}
      </div>
    </Dialog>
  );
}
