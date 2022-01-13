import React from 'react';
import './announcements.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const Announcements = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    return (
    <div className="container-fluid announcements-container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                    <h2 className="text-center">Announcements</h2>
                    <List>
                        <ListItem className="list-item-style">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>31/07/2015</p>
                            <Link to="/announcement/1" style={{textDecoration: 'none'}}><Button variant="contained" style={{backgroundColor: '#f55a42',textTransform: 'lowercase'}} className="announcement-btn">See details</Button></Link>
                        </ListItem>
                        <Divider />
                        <ListItem className="list-item-style">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>31/07/2015</p>
                            <Link to="/announcement/1" style={{textDecoration: 'none'}}><Button variant="contained" style={{backgroundColor: '#f55a42',textTransform: 'lowercase'}} className="announcement-btn">See details</Button></Link>
                        </ListItem>
                        <Divider />
                        <ListItem className="list-item-style">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>31/07/2015</p>
                            <Link to="/announcement/1" style={{textDecoration: 'none'}}><Button variant="contained" style={{backgroundColor: '#f55a42',textTransform: 'lowercase'}} className="announcement-btn">See details</Button></Link>
                        </ListItem>
                        <Divider />
                    </List>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>)
}

export default Announcements;