import React from 'react';
import './courses.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const Courses = () => {
    const seeDetailsBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%",
        marginBottom: "5%"
    }

    const queryBtn = {
        ...seeDetailsBtnStyle,
        width: '100%',
        marginTop: '0%',
        marginBottom: '0%',
    }

    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    return (
    <div className="container-fluid courses-container">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Undergraduate Program
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Postgraduate Program
                        </Link>
                    </Breadcrumbs>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-3">
            <List>
                    <ListItem class="row">
                        <h3>Lorem Ipsum sit amet, consectetur adipiscing elit</h3>
                        <p className="course-ects">5 ECTS</p>
                        <p className="year-assignment">Postgraduate Program</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
                    <ListItem class="row">
                        <h2>Lorem Ipsum sit amet, consectetur adipiscing elit</h2>
                        <p>5 ECTS</p>
                        <p className="year-assignment">Undergraduate Program</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
            </List>
            </div>
            <div className="col-sm-6">
                <form className="forms-style">
                    <div className="text-center">
                        <Button variant="contained" style={queryBtn}>Dissertations</Button>
                    </div>
                </form>
                <div className="courses">
                    <h2 className="text-center text-light">Dissertations Subjects</h2>
                    <p className="text-center text-light">Undergraduate Program: 10</p>
                    <p className="text-center text-light">Postgraduate Program: 10</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Courses