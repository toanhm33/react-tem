import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { ModalComponent } from 'src/components/common';
import { Student } from 'src/models';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { Button, TextareaAutosize, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    flexWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    flexItem: {
      width: '46%',
      marginBottom: 20,
    }
  }),
);
export interface IPropsStudentModal {
  modalIsOpen: boolean;
  modalClose: () => void;
  onSubmitForm: (value: Student) => Promise<void>;
  isLoading: boolean;
  isUpdate: boolean;
}

const schema = yup
  .object({
    name: yup.string().required('Name is require'),
    // age: yup.string().required('age is require'),
    // mark: yup.number().required(),
  })
  .required();
  
export const ModalStudent: React.FC<IPropsStudentModal> = ({
  modalIsOpen, modalClose, isLoading, onSubmitForm, isUpdate
}) => {
  const classes = useStyles();
  const history = useHistory();
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, formState, reset } = form;
  
  return (
    <ModalComponent 
      open={modalIsOpen}
      onClose={modalClose}
      >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-wrap">
          <div className={classes.flexWrap}>
            <TextField
              {...register('name')}
              fullWidth
              label="Name"
              name="name"
              autoComplete="true"
              variant="outlined"
              size="small"
              className={classes.flexItem}
            />
            <TextField
              // error={hasError('password') || hasError('email')}
              fullWidth
              label="Age"
              name="age"
              autoComplete="true"
              // onChange={handleChange}
              // value={formState.values.age || ''}
              variant="outlined"
              size="small"
              className={classes.flexItem}
            />
            <TextareaAutosize
              className={classes.flexItem}
              aria-label="empty textarea"
              placeholder="Empty"
            />
          </div>
          <div className="flex w-full mt-8 justify-end">
            <Button type="submit" color="primary" variant="contained" >
              create
            </Button>
            <Button variant="contained">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </ModalComponent>
  );
}
