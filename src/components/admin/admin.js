import React,{useState} from 'react';
import './admin.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import {
    announcementColumns, 
    labColumns, 
    researchProjectColumns,
    researchMemberProjectColumns,
    courseColumns,
    researchMemberColumns,
    researchMemberPublicationColumns,
    publicationColumns,
    publicationJournalColumns,
    journalColumns,
    publicationAcedemicConferenceColumns,
    academicConferenceColumns
} from './tableColumns';
import axios from 'axios';


const Admin = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))
    const [choice, setChoice] = useState("");
    const [tableDetails, setTableDetails] = useState({
      data:[],
      endpoint:"",
      columns: [],
    })

    const choices = [{
      title:'Lab Table',
      columns: labColumns,
      endpoint: 'http://localhost:4568/api/getAllLabs'
    },{
      title:'Announcement Table',
      columns: announcementColumns,
      endpoint: 'http://localhost:4568/api/getAllAnnouncements'
    },{
      title:'Research Project Table',
      columns: researchProjectColumns,
      endpoint: 'http://localhost:4568/api/getAllProjects'
    },{
      title:'Research_Member_Project Table',
      columns: researchMemberProjectColumns,
      endpoint: 'http://localhost:4568/api/getAllResearchMemberProjects'
    },{
      title:'Course Table',
      columns: courseColumns,
      endpoint: 'http://localhost:4568/api/getAllCourses'
    },{
      title:'Reseach Member Table',
      columns: researchMemberColumns,
      endpoint: 'http://localhost:4568/api/getAllResMembers'
    },{
      title:'Research_Member_Publications Table',
      columns: researchMemberPublicationColumns,
      endpoint: 'http://localhost:4568/api/getResearchMemberPublications'
    },{
      title:'Publications Table',
      columns: publicationColumns,
      endpoint: 'http://localhost:4568/api/getAllPublications'
    },{
      title:'Publications_Journal Table',
      columns: publicationJournalColumns,
      endpoint: 'http://localhost:4568/api/getPublicationJournals'
    },{
      title:'Journal Table',
      columns: journalColumns,
      endpoint: 'http://localhost:4568/api/getAllJournals'
    },{
      title:'Publication_Academic_Conference Table',
      columns: publicationAcedemicConferenceColumns,
      endpoint: 'http://localhost:4568/api/getPublicationAcademicConfs'
    },{
      title:'Academic_Conference Table',
      columns: academicConferenceColumns,
      endpoint: 'http://localhost:4568/api/getAllAcademicConfs'
    }]


    const handleChoice = (event) => {
      setChoice(event.target.value)
      choices.filter(c => choice === c.title)
             .map(c => {
                setTableDetails({...c,data:[]})
             })
    }

    const getData = () => {
      if(tableDetails.endpoint !== undefined) {
        axios.get(tableDetails.endpoint)
        .then(res => setTableDetails({...tableDetails,data: res.data}))
      }
   }

   const submitBtnStyle = {
    backgroundColor: '#f55a42',
    textTransform: 'capitalize',
    width: '50%',
    marginLeft: "5%"
  }
   
    return (
    <div className="container-fluid admin-container">
        <h1 className="text-center">Tables</h1>
        <div className="row mt-3 mb-3">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                        <FormControl
                            fullWidth
                            onClick={handleChoice}
                            onChange={handleChoice}
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Table
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'table',
                                id: 'uncontrolled-native'
                            }}>
                                <option>Select...</option>
                                {choices.map((c,i) => {
                                    return <option key={i} value={c.title}>{c.title}</option>
                                })}
                            </NativeSelect>
                            <div className="text-center mt-3">
                              <Button onClick={getData} variant="contained" style={submitBtnStyle}>Show table</Button>
                            </div>
                        </FormControl>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row mt-3 mb-3">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
                {tableDetails.data.length > 0 ? <DBTable columns={tableDetails.columns} rows={tableDetails.data}/> :""}
            </div>
            <div className="col-sm-1">
            </div>
        </div>
    </div>)
}


const DBTable = ({columns,rows}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={Math.ceil(Math.random() * 100000)}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={Math.ceil(Math.random() * 100000)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={Math.ceil(Math.random()*100000)} align={column.align}>
                          {column.format && (typeof value === 'number'|| typeof value === 'boolean')
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default Admin