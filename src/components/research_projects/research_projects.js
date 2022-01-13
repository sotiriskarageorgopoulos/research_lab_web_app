import React from 'react';
import './research_projects.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const ResearchProject = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    const seeDetailsBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%",
        marginBottom: "5%"
    }

    const sortBtnStyle = {
        ...seeDetailsBtnStyle,
        width:'40%',
        color:'#fff'
    }

    const queryBtn = {
        ...seeDetailsBtnStyle,
        width: '100%',
        marginTop: '0%',
        marginBottom: '0%',
    }

    const submitBtnStyle = {
        ...seeDetailsBtnStyle,
        width:'40%',
    }

    return (
    <div className="container-fluid research-projects-container">
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-4">
                <div className="text-center">
                    <Button variant="contained"style={sortBtnStyle}>Ascending Order</Button>
                    <Button variant="contained" style={sortBtnStyle}>Descending Order</Button>
                </div>
            </div>
            <div className="col-sm-7"></div>
        </div>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-3">
            <List>
                    <ListItem class="row">
                        <h2>Lorem Ipsum sit amet, consectetur adipiscing elit</h2>
                        <p className="active-project">active</p>
                        <p className="year-assignment">Assignment Year: 22/01/2020</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
                    <ListItem class="row">
                        <h2>Lorem Ipsum sit amet, consectetur adipiscing elit</h2>
                        <p className="completed-project">completed</p>
                        <p className="year-assignment">Assignment Year: 31/07/2015</p>
                        <Button variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                    </ListItem>
                    <Divider />
            </List>
            </div>
            <div className="col-sm-7">
            <form className="forms-style">
                <div className="text-center">
                    <Button variant="contained" style={queryBtn}>active research projects</Button>
                </div>
            </form>
            <form className="forms-style">
                <div className="text-center">
                    <Button variant="contained" style={queryBtn}>research project with min income</Button>
                </div>
            </form>
            <form className="forms-style">
                <div className="text-center">
                    <Button variant="contained" style={queryBtn}>research project with max income</Button>
                </div>
            </form>
            <form className="forms-style">
                 <h3 className="text-center">Search by Researcher</h3>
                 <FormControl fullWidth style={{margin:"5% auto 5% auto",width:"80%"}}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Researcher
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                            name: 'researcher',
                            id: 'uncontrolled-native',
                            }}
                        >
                            <option value={'r2'}>r2</option>
                            <option value={'r3'}>r3</option>
                            <option value={'r3'}>r4</option>
                        </NativeSelect>
                </FormControl>
                <div className="text-center">
                    <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                </div>
            </form>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="research-projects">
                            <h3 className="text-center text-light">Lab income per year.</h3>
                            <ul>
                                <li className="research-projects-list-item">2021: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2020: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2019: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2018: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2017: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2016: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2015: 200.000 &#36;</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="research-projects">
                            <h3 className="text-center text-light">University income: 500.000 &#36;</h3>
                        </div>
                        <div className="research-projects">
                            <h3 className="text-center text-light">Total income: 2.000.000 &#36;</h3>
                        </div>
                        <div className="research-projects">
                            <h3 className="text-center text-light">University income per year.</h3>
                            <ul>
                                <li className="research-projects-list-item">2021: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2020: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2019: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2018: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2017: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2016: 200.000 &#36;</li>
                                <li className="research-projects-list-item">2015: 200.000 &#36;</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</div>
    )
}

export default ResearchProject