import React from 'react';
import './course.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const Course = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    return (
        <div className="container-fluid course-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h2>Lorem Ipsum</h2>
                    <p className="course-program">Postgraduate program</p>
                    <p className="course-ects">5 ECTS</p>
                    <p className="course-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h3>Research Members</h3>
                    <ul>
                        <li>R1</li>
                        <li>R1</li>
                        <li>R1</li>
                        <li>R1</li>
                    </ul>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Course