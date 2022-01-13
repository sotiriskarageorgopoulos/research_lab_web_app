import React from 'react';
import './research_members.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import JH from '../../static/jhend.jpg';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {EnvelopeFill, TelephoneFill} from 'react-bootstrap-icons';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const ResearchMembers = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    const seeDetailsBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%"
    }

    const submitBtnStyle = {
        ...seeDetailsBtnStyle,
    }

    const queryBtn = {
        ...seeDetailsBtnStyle,
        width:'100%',
        marginTop:"0%",
        marginBottom:"0%"
    }

    return (
        <div className="container-fluid res-members-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Undergraduate Students
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Postgraduate Students
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            PHD Candidates
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Assistant Professors
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Associate Professors
                        </Link>
                        <Link underline="hover" className="breadcrumb-style" color="inherit" href="/">
                            Professors
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                <List>
                    <ListItem class="row res-members-list-item">
                        <h4>Jordan Henderson</h4>
                        <figure>
                            <img src={JH} className="img-style"/>
                        </figure>
                        <a href="mailto:jh@gmail.com" className="res_member_info"><EnvelopeFill />&nbsp;&nbsp;jh@gmail.com</a>
                        <a href="tel:98992984892" className="res_member_info"><TelephoneFill />&nbsp;&nbsp;98992984892</a>
                        <p className="res_member_info">Professor</p>
                        <p className="res_member_info">Oxford University</p>
                        <p className="res_member_info">ΑΙ Laboratory</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
                    <ListItem class="row res-members-list-item">
                        <h4>Mohamed Salah</h4>
                        <figure>
                            <img src={JH} className="img-style" />
                        </figure>
                        <a href="mailto:jh@gmail.com" className="res_member_info"><EnvelopeFill />&nbsp;&nbsp;ms@gmail.com</a>
                        <a href="tel:98992984892" className="res_member_info"><TelephoneFill /> &nbsp;&nbsp;98992984892</a>
                        <p className="res_member_info">Associate Professor</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
                </List>
                </div>
                <div className="col-sm-7">
                    <div className="number-of-members">
                            <h5 className="each-number-of-member">Members: 39</h5>
                            <h5 className="each-number-of-member">External Members: 10</h5>
                            <h5 className="each-number-of-member">Number of members on each level.</h5>
                            <p className="each-number-of-member">Undergraduate student: 10</p>
                            <p className="each-number-of-member">Postgraduate student: 5</p>
                            <p className="each-number-of-member">PHD Candidates: 5</p>
                            <p className="each-number-of-member">Assistant Professors:6</p>
                            <p className="each-number-of-member">Associate Professors:5</p>
                            <p className="each-number-of-member">Professors:8</p>
                    </div>
                    <form className="forms-style">
                        <h3 className="text-center">Search by surname</h3>
                        <TextField 
                            required
                            name="surname"
                            label="surname"
                            className="mb-3"
                        />
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>External Research Members</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Researcher with min projects</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Researchers without project</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>External member with max projects</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Member with max publications</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-6">
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Members with at least one course</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Members with at least one publication</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Member with min publications</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button variant="contained" style={queryBtn}>Members without publications</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default ResearchMembers