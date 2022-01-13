import React from 'react';
import './research_project.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const ResearchProject = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    return (
    <div className="container-fluid research-project-container">
        <div className="row"> 
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <h2 className="">Lorem ipsum dolor sit amet</h2>
                <p className="">Assignment year: 2020</p>
                <p className="active-project">Active</p>
                <p className="desc-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
                </p>
                <div className="">
                    <h2>Researchers</h2>
                    <ul>
                        <li>R1</li>
                        <li>R1</li>
                        <li>R1</li>
                        <li>R1</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResearchProject;