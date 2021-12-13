import React, { ReactElement, useEffect, useState } from 'react';
import { Box, Button, LinearProgress, CircularProgress, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import studentApi from 'src/api/studentApi';
import StudentTable from './components/StudentTable';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import Modal from '@material-ui/core/Modal';
import { selectStudentFilter, selectStudentList, selectStudentLoading, studentActions } from './studentSlice';
import { ModalStudent } from './components/ModalStudent';
import { Student } from 'src/models';

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

export default function StudentComponent({}: Props): ReactElement {
  const classes = useStyles();
  const dispatch = useAppDispatch()
  const [isUpdate, setIsUpdate] = useState(false);
  const studentList = useAppSelector(selectStudentList);
  const loading = useAppSelector(selectStudentLoading);
  const [modalIsOpen, setModalOpen] = useState(false);
  
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  function handleUpdateStudent() {
    handleOpen();
    setIsUpdate(true);
  }
  async function handleSubmitForm(student: Student) {
    const conditionSubmit = isUpdate ? updateStudent : saveStudent;
    conditionSubmit(student);
  }

  async function saveStudent(value: Student) {
    try {
      // await mutateAsync(value);
      // toast.success(EMessage.CREATE_SUCCESS);
      handleClose();
    } catch (error) {
      // const { message } = error.response;
      // toast.error(message);
    }
  }

  async function updateStudent(value: Student) {
    try {
      // await mutateUpdateBook(value);
      // toast.success(EMessage.UPDATE_SUCCESS);
      handleClose();
    } catch (error) {
      // const { message } = error.response;
      // toast.error(message);
    }
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
        <StudentTable handleUpdate={handleUpdateStudent} studentList={studentList}/>
      </Box>
      <ModalStudent 
        isLoading={false}
        modalIsOpen={modalIsOpen}
        modalClose={handleClose}
        onSubmitForm={handleSubmitForm}
        isUpdate={isUpdate}
      />
    </div>
  );
}
