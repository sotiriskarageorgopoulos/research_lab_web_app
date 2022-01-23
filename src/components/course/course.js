import React, {useState, useEffect} from 'react';
import './course.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import axios from 'axios';

const Course = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    const [course,setCourse] = useState([{
        title:"",
        ects:"",
        description:"",
        studyLevel:""
    }])

    const [member, setMember] = useState([{
        name:"",
        surname:"",
        level:""
    }])

    useEffect(() => {
        let path = window.location.pathname
        let cid = path.split('/')[2]
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true

        if(isSubscribed) {
            const getCourse = async() => {
                axios.get(`http://localhost:4568/api/getCourse/${cid}`)
                    .then(res => {
                        setCourse(res.data)
                    })
            }

            const getResearcherByCourse = async() => {
                axios.get(`http://localhost:4568/api/getResearcherByCourse/${cid}`)
                    .then(res => {
                        setMember(res.data)
                    })
            }

            getResearcherByCourse()
            getCourse()
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])
    

    return (
        <div className="container-fluid course-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h2>{course[0].title}</h2>
                    <p className="course-program">{course[0].studyLevel}</p>
                    <p className="course-ects">{course[0].ects} ECTS</p>
                    <p className="course-desc">{course[0].description}</p>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h3>Professor</h3>
                    <ul>
                        <li>{member[0].name} {member[0].surname} {member[0].level}</li>
                    </ul>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Course