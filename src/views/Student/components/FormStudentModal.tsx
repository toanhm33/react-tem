import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Student } from 'src/models';
import { Button, DialogContentText, TextField } from '@material-ui/core';
// import AlertDialog from 'components/Common/Dialog';
// import studentApi from 'api/studentApi';
import { selectStudentFilter, selectStudentList, studentActions } from '../studentSlice';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  table: {

  },
  flexWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  buttonForm: {
    width: '40%',
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    color: '#3f51b5',
    textAlign: 'center'
  },
  buttonAction: {
    marginLeft: 20
  },
  contentDialog: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  textField: {
    width: '48%',
    marginBottom: 15
  },
  buttonWrap: {
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

export interface FormStudentModalProps {
  // studentList: Student[];
  handleSubmit: any,
  open: boolean,
  handleClose: () => void,

}

export default function FormStudentModal({ handleSubmit, open, handleClose }: FormStudentModalProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      name: '',
      age: '',
      mark: '',
      city: '',
      gender: ''
    },
    touched: {},
    errors: {}
  })

  const handleChange = (event: any) => {
    event.persist()
    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...prevFormState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...prevFormState.touched,
        [event.target.name]: true
      }
    }))
  }
  const dialogEditContent = (
    <div className={classes.contentDialog}>
      <TextField
        className={classes.textField}
        // error={hasError('password') || hasError('email')}
        fullWidth
        label="Name"
        name="name"
        autoComplete="true"
        onChange={handleChange}
        value={formState.values.name || ''}
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textField}
        // error={hasError('password') || hasError('email')}
        fullWidth
        label="Age"
        name="age"
        autoComplete="true"
        onChange={handleChange}
        value={formState.values.age || ''}
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textField}
        // error={hasError('password') || hasError('email')}
        fullWidth
        label="Mark"
        name="mark"
        autoComplete="true"
        onChange={handleChange}
        value={formState.values.mark || ''}
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textField}
        // error={hasError('password') || hasError('email')}
        fullWidth
        label="City"
        name="city"
        autoComplete="true"
        onChange={handleChange}
        value={formState.values.city || ''}
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textField}
        // error={hasError('password') || hasError('email')}
        fullWidth
        label="Gender"
        name="gender"
        autoComplete="true"
        onChange={handleChange}
        value={formState.values.gender || ''}
        variant="outlined"
        size="small"
      />
    </div>
  );
  useEffect(() => {
  }, [])

  return (
    <>
      {/* <AlertDialog open={open} handleSubmit={handleSubmit} handleClose={handleClose} title="Add Student" dialogContent={dialogEditContent}/> */}
    </>
  );
}
