import React, { ReactElement, useEffect, useState } from 'react';
import { Box, Button, LinearProgress, CircularProgress, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import studentApi from 'src/api/studentApi';
import StudentTable from './components/StudentTable';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import Modal from '@material-ui/core/Modal';
import { selectStudentFilter, selectStudentList, selectStudentLoading, studentActions } from './studentSlice';
import FormStudentModal from './components/FormStudentModal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: '100%',
    position: 'relative',
    padding: '40px 80px'
  },
  loading: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: '100%'
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
}));

interface Props {
  
}

export default function Student({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false);
  const studentList = useAppSelector(selectStudentList);
  const loading = useAppSelector(selectStudentLoading);
  
  const handleOpen = () => {
    setOpen(true);
  };
  function handleUpdate() {
    handleOpen();
  }

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 115
      })
    )
  }, [dispatch])
  
  return (
    <div className={classes.root}>
      {loading && <LinearProgress className={classes.loading}/>}
      <Box component="span">
        <Typography className={classes.title}>List student</Typography>
        <div className={classes.buttonWrap}>
          <Button className={classes.buttonAction} onClick={handleOpen} variant="contained" color="primary">
            Add new
          </Button>
        </div>
        <StudentTable handleUpdate={handleUpdate} studentList={studentList}/>
      </Box>
    </div>
  );
}
