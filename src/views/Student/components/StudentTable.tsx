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
import FormStudentModal from './FormStudentModal';

const useStyles = makeStyles({
  root: {
    width: '100%',
    'th, td': {
      color: '#fff'
    }
  },
  container: {
    maxHeight: 440,
  },
  rowColor: {
    color: '#fff'
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

export interface StudentTableProps {
  studentList: Student[];
  handleUpdate: () => void;
}

export default function StudentTable({ studentList, handleUpdate }: StudentTableProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const dispatch = useAppDispatch()
  const [selectedStudent, setSelectedStudent] = useState<Student>();
  const filter = useAppSelector(selectStudentFilter)
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

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter, formState.values])

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditClose = () => {
    setOpenEditDialog(false);
  };
  const handleRemoveOpen = (student: Student) => {
    setOpen(true);
    setSelectedStudent(student);
  };
  const dialogContent = (
    <div className={classes.contentDialog}>
      Are you sure to remove student named?
    </div>
  );

  const handleRemoveConfirm = async (student: Student) => {
    try {
      console.log(student);
      // await studentApi.remove(student?.id || '');
      const newFilter = {...filter}
      dispatch(studentActions.setFilter(newFilter));
    } catch (error) {
      console.log('failed to fetch student');
      
    }
  }
  
  const handleEditOpen = async (student: Student) => {
    console.log(student);
    setOpenEditDialog(true);
    setSelectedStudent(student);
    /* eslint-disable */
    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        id: student.id,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt,
        name: student.name,
        age: student.age.toString(),
        mark: student.mark.toString(),
        city: student.city,
        gender: student.gender,
      },
      touched: {
        ...prevFormState.touched
      }
    }))
    // setFormState(...formState, data);
  }
  // const hasError = (field: any) => (!!(formState.touched[field] && formState.errors[field]))
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
  

  const handleSubmit = async () => {
    // await studentApi.update(formState.values);
    const newFilter = {...filter}
    dispatch(studentActions.setFilter(newFilter));
  }

  return (
    <TableContainer className={classes.container}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.rowColor}>ID</TableCell>
            <TableCell className={classes.rowColor}>Name</TableCell>
            <TableCell className={classes.rowColor}>Gender</TableCell>
            <TableCell className={classes.rowColor}>Mark</TableCell>
            <TableCell className={classes.rowColor}>City</TableCell>
            <TableCell className={classes.rowColor} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            studentList.map((student, idx) => (
              <TableRow key={student.id}>
                <TableCell className={classes.rowColor}>{ student.id }</TableCell>
                <TableCell className={classes.rowColor}>{ student.name }</TableCell>
                <TableCell className={classes.rowColor}>{ student.gender }</TableCell>
                <TableCell className={classes.rowColor}>{ student.mark }</TableCell>
                <TableCell className={classes.rowColor}>{ student.city }</TableCell>
                <TableCell className={classes.rowColor} className={classes.flexWrap} align="right">
                  <Button onClick={() => handleRemoveOpen(student)} className={classes.buttonForm} variant="contained" color="secondary">Delete</Button>
                  <Button onClick={handleUpdate} className={classes.buttonForm} variant="contained" color="primary">Edit</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {/* <FormStudentModal  open={openEditDialog} handleSubmit={handleSubmit} handleClose={handleEditClose}/> */}
      {/* <AlertDialog open={openEditDialog} handleSubmit={handleSubmit} handleClose={handleEditClose} title="Add Student" dialogContent={dialogEditContent}/> */}
      {/* <AlertDialog open={open} handleSubmit={() => handleRemoveConfirm(selectedStudent as Student)} handleClose={handleClose} title="Remove a Student" dialogContent={dialogContent}/> */}
    </TableContainer>
  );
}
