import React from 'react';
import './publications.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const Publications = () => {
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

    const submitBtnStyle = {
        ...seeDetailsBtnStyle,
        width:'40%',
    }

    return (
    <div className="container-fluid publications-container">
        <div className="row">
            <div className="col-sm-4">
                <div className="text-center">
                    <Button variant="contained" style={sortBtnStyle}>Ascending Order</Button>
                    <Button variant="contained" style={sortBtnStyle}>Descending Order</Button>
                </div>
            </div>
            <div className="col-sm-7"></div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <h2>Publications</h2>
                <ul>
                    <li><Link to="/publication/1" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                    <li><Link to="" className="publication-link">Lorem ipsum dolor sit amet</Link></li>
                </ul>
            </div>
            <div className="col-sm-7">
                <div className="row">
                    <div className="col-sm-6">
                        <form className="forms-style">
                        <h4 className="text-center">Show publications per year</h4>
                        <FormControl fullWidth style={{margin:"5% auto 5% auto"}}>
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
                        <FormControl fullWidth style={{margin:"5% auto 5% auto",width:"80%"}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Order
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'researcher',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'asc'}>ascending</option>
                                    <option value={'desc'}>descending</option>
                                </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                        </form>
                        {/*query 9 PROSOXI */}
                        <form className="forms-style">
                            <h4 className="text-center">Show publications per journal</h4>
                            <FormControl fullWidth style={{margin:"5% auto 5% auto"}}>
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Researcher 1
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
                    </div>
                    <div className="col-sm-6">
                        <form className="forms-style">
                        <h4 className="text-center">Show common publications</h4>
                        <FormControl fullWidth style={{margin:"5% auto 5% auto"}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Researcher 1
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'researcher1',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'r2'}>r2</option>
                                    <option value={'r3'}>r3</option>
                                    <option value={'r3'}>r4</option>
                                </NativeSelect>
                        </FormControl>
                        <FormControl fullWidth style={{margin:"5% auto 5% auto"}}>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Researcher 2
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'researcher2',
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
                        <div className="publications">
                            <p className="text-center text-light">Total Publications: 1.000</p>
                        </div>
                        <div className="publications mt-3">
                            <p>Average publications per year</p>
                            <ul className="publications-list">
                                <li className="text-center text-light">2020 10.4</li>
                                <li className="text-center text-light">2019 10.4</li>
                                <li className="text-center text-light">2018 10.4</li>
                                <li className="text-center text-light">2017 10.4</li>
                                <li className="text-center text-light">2016 10.4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Publications