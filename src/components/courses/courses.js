import React, {useState, useEffect} from 'react';
import './courses.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Courses = () => {
    const seeDetailsBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%",
        marginBottom: "5%"
    }

    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true

        if(isSubscribed) {
            const getAllCourses = async() => {
                axios.get(`http://localhost:4568/api/getAllCourses`)
                    .then(res => {
                        setCourses(res.data)
                    })
            }

            getAllCourses()
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const [courses, setCourses] = useState([{ects:0,title:"",studyLevel:"",cid:""}])

    const navigate = useNavigate();
    
    const goToCoursePage = (cid) => {
        navigate(`/course/${cid}`)
    }

    const getCourseByLevel = (studyLevel) => {
        axios.get(`http://localhost:4568/api/getCourseByLevel/${studyLevel}`)
            .then(res => {
                setCourses(res.data)
            })
    }
    
    return (
    <div className="container-fluid courses-container">
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link onClick={() => getCourseByLevel('Undergraduate Program')} underline="hover" className="breadcrumb-style" color="inherit">
                            Undergraduate Program
                        </Link>
                        <Link onClick={() => getCourseByLevel('Postgraduate Program')} underline="hover" className="breadcrumb-style" color="inherit">
                            Postgraduate Program
                        </Link>
                    </Breadcrumbs>
            </div>
            <div className="col-sm-4"></div>
        </div>
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
            <List>
                {courses.map((c,i) => {
                    return (
                        <div key={i}>
                            <ListItem className="row">
                                <h3>{c.title}</h3>
                                <p className="course-ects">ECTS: {c.ects}</p>
                                <p className="year-assignment">{c.studyLevel}</p>
                                <Button onClick={() => goToCoursePage(c.cid)} variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
            </List>
            </div>
            <div className="col-sm-6">
            </div>
        </div>
    </div>)
}

export default Courses