import React, {useState, useEffect} from 'react';
import './publications.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import axios from 'axios';

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

    const handlePublicationsPerYear = (event) => {
        let inputName = event.target.name;
        let value = event.target.value;
        setPubsPerYear({...pubsPerYear,[inputName]:value});
    }

    const handleCommonPublications = (event) => {
        let inputName = event.target.name;
        let value = event.target.value;
        setCommonPubs({...commonPubs,[inputName]:value});
    }

    const handleMemberPubsInJournal = (event) => {
        let inputName = event.target.name;
        let value = event.target.value;
        setMemberPubsInJournal({...memberPubsInJournal,[inputName]:value});
    }

    const submitBtnStyle = {
        ...seeDetailsBtnStyle,
        width:'40%',
    }

    const [publications, setPublications] = useState([{
        title:"",
        pid:""
    }])

    const [members, setMembers] = useState([{name:"",surname:"",academicId:""}])
    const [pubsPerYear, setPubsPerYear] = useState({income:""})
    const [commonPubs, setCommonPubs] = useState({date:"",title:"",pid:""})
    const [memberPubsInJournal, setMemberPubsInJournal] = useState({})
    const [totalPubs, setTotalPubs] = useState([{publications:0}])
    const [totalPubsPerYear, setTotalPubsPerYear] = useState([{publications:0,year:""}])

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true

        if(isSubscribed) {
            const getAllPublications = async() => {
                return axios.get(`http://localhost:4568/api/getAllPublications`)
            }
            
            const getAllResMembers = async() => {
                return axios.get(`http://localhost:4568/api/getAllResMembers`)
            }

            const getTotalPublications = async() => {
                return axios.get(`http://localhost:4568/api/getTotalPublications`)
            }

            const getPublicationsPerYear = async() => {
                return axios.get(`http://localhost:4568/api/getPublicationsPerYear`)
            }

            axios.all([
                getPublicationsPerYear(),
                getTotalPublications(),
                getAllResMembers(),
                getAllPublications()
            ]).then(res => {
                setTotalPubsPerYear(res[0].data)
                setTotalPubs(res[1].data)
                setMembers(res[2].data)
                setPublications(res[3].data)
            })
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const getPublicationsByResearcherInDescOrder = async() => {
        let {academicId} = pubsPerYear
        axios.get(`http://localhost:4568/api/getPublicationsByResearcherInDescOrder/${academicId}`)
            .then(res => {
            setPublications(res.data)
        })
    }

    const getPublicationsByResearcherInAscOrder = async() => {
        let {academicId} = pubsPerYear
        axios.get(`http://localhost:4568/api/getPublicationsByResearcherInAscOrder/${academicId}`)
            .then(res => {
            setPublications(res.data)
        })
    }

    const getPublicationsByResearcher = async() => {
        let {order} = pubsPerYear
        if(order === 'asc') {
            getPublicationsByResearcherInAscOrder()
        }
        else {
            getPublicationsByResearcherInDescOrder() 
        }
    }

    const getCommonPublications = async() => {
        let {firstAcademicId, secondAcademicId} = commonPubs
        axios.get(`http://localhost:4568/api/getCommonPublications/${firstAcademicId}/${secondAcademicId}`)
            .then(res => {
                setPublications(res.data)
            })
    } 

    const getPublicationsPerJournal = () => {
        let {academicId} = memberPubsInJournal
        axios.get(`http://localhost:4568/api/getPublicationsPerJournal/${academicId}`)
            .then(res => {
                setPublications(res.data)
            })
    }

    return (
    <div className="container-fluid publications-container">
        <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-7"></div>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <h2>Publications</h2>
                <ul>
                    {publications.map((p,i) => {
                        return <li key={i}><Link to={p.pid !== undefined?"/publication/"+p.pid:""} className="publication-link">{p.publications !== undefined ? "Journal: "+p.title: "Publication: "+p.title}&nbsp;&nbsp;{p.publications !== undefined ? "Publications: "+p.publications: ""}</Link></li>
                    })}
                </ul>
            </div>
            <div className="col-sm-7">
                <div className="row">
                    <div className="col-sm-6">
                        <form className="forms-style">
                        <h4 className="text-center">Member Publications</h4>
                        <FormControl 
                        fullWidth 
                        style={{margin:"5% auto 5% auto"}}
                        onChange={handlePublicationsPerYear} 
                        onClick={handlePublicationsPerYear}
                        onBlur={handlePublicationsPerYear}
                        >
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Researcher
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'academicId',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option>Select...</option>
                                    {members.map((m,i) => {
                                        return <option key={i} value={m.academicId}>{m.name} {m.surname}</option>
                                        })}
                                </NativeSelect>
                        </FormControl>
                        <FormControl 
                        fullWidth 
                        style={{margin:"5% auto 5% auto",width:"80%"}}
                        onChange={handlePublicationsPerYear} 
                        onClick={handlePublicationsPerYear}
                        onBlur={handlePublicationsPerYear}
                        >
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Order
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'order',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option key={1} value={'asc'}>ascending</option>
                                    <option key={2} value={'desc'}>descending</option>
                                </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button onClick={getPublicationsByResearcher} variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                        </form>
                        <form className="forms-style">
                            <h4 className="text-center">Member publications in journal</h4> 
                            <FormControl 
                            fullWidth 
                            style={{margin:"5% auto 5% auto"}}
                            onClick={handleMemberPubsInJournal}
                            onBlur={handleMemberPubsInJournal}
                            onChange={handleMemberPubsInJournal}
                            >
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Researcher 1
                                    </InputLabel>
                                    <NativeSelect
                                        inputProps={{
                                        name: 'academicId',
                                        id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option>Select...</option>
                                        {members.map((m,i) => {
                                          return <option key={i} value={m.academicId}>{m.name} {m.surname}</option>
                                        })}
                                    </NativeSelect>
                            </FormControl>
                            <div className="text-center">
                                <Button onClick={getPublicationsPerJournal} variant="contained" style={submitBtnStyle}>Submit</Button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <form className="forms-style">
                        <h4 className="text-center">Show common publications</h4>
                        <FormControl 
                        fullWidth 
                        style={{margin:"5% auto 5% auto"}}
                        onClick={handleCommonPublications}
                        onBlur={handleCommonPublications}
                        onChange={handleCommonPublications}
                        >
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Researcher 1
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'firstAcademicId',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option>Select...</option>
                                    {members.map((m,i) => {
                                        return <option key={i} value={m.academicId}>{m.name} {m.surname}</option>
                                        })}
                                </NativeSelect>
                        </FormControl>
                        <FormControl 
                        fullWidth 
                        style={{margin:"5% auto 5% auto"}}
                        onClick={handleCommonPublications}
                        onBlur={handleCommonPublications}
                        onChange={handleCommonPublications}
                        >
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Researcher 2
                                </InputLabel>
                                <NativeSelect
                                    inputProps={{
                                    name: 'secondAcademicId',
                                    id: 'uncontrolled-native',
                                    }}
                                >
                                    <option>Select...</option>
                                    {members.map((m,i) => {
                                        return <option key={i} value={m.academicId}>{m.name} {m.surname}</option>
                                        })}
                                </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button onClick={getCommonPublications} variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                        </form>
                        <div className="publications">
                            <p className="text-center text-light">Total Publications: {totalPubs[0].publications.toLocaleString("de-DE")}</p>
                        </div>
                        <div className="publications mt-3">
                            <p>Publications per year</p>
                            <ul className="publications-list">
                                {totalPubsPerYear.map((s,i) => {
                                    return <li key={i} className="text-center text-light">{s.year}&nbsp;&nbsp;{s.publications}</li>
                                })}
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