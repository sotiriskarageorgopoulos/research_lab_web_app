import React from 'react';
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
import Divider from '@mui/material/Divider';
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


const Admin = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))

    return (
    <div className="container-fluid admin-container">
        <h1 className="text-center">Tables</h1>
        <div className="row mt-3 mb-3">
            <div className="col-sm-4">
                <h2 className="text-center">Lab Table</h2>
                <DBTable columns={labColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Announcement Table</h2>
                <DBTable columns={announcementColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Lab Table</h2>
                <DBTable columns={researchProjectColumns} rows={[]}/>
            </div>
        </div>
        <Divider />
        <div className="row mt-3 mb-3">
            <div className="col-sm-4">
                <h2 className="text-center">Research_Member_Project Table</h2>
                <DBTable columns={researchMemberProjectColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Course Table</h2>
                <DBTable columns={courseColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Reseach Member Table</h2>
                <DBTable columns={researchMemberColumns} rows={[]}/>
            </div>
        </div>
        <Divider />
        <div className="row mt-3 mb-3">
            <div className="col-sm-4">
                <h2 className="text-center">Research_Member_Publications Table</h2>
                <DBTable columns={researchMemberPublicationColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Publications Table</h2>
                <DBTable columns={publicationColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Publications_Journal Table</h2>
                <DBTable columns={publicationJournalColumns} rows={[]}/>
            </div>
        </div>
        <Divider />
        <div className="row mt-3 mb-3">
            <div className="col-sm-4">
                <h2 className="text-center">Journal Table</h2>
                <DBTable columns={journalColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Publication_Academic_Conference Table</h2>
                <DBTable columns={publicationAcedemicConferenceColumns} rows={[]}/>
            </div>
            <div className="col-sm-4">
                <h2 className="text-center">Academic_Conference Table</h2>
                <DBTable columns={academicConferenceColumns} rows={[]}/>
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
                  key={column.id}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
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