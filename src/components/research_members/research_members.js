import React, {useState, useEffect} from 'react';
import './research_members.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {EnvelopeFill, TelephoneFill} from 'react-bootstrap-icons';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    const navigate = useNavigate()
    const [resMembers,setResMembers] = useState([{
        name:"",
        surname: "",
        email:"",
        tel:"",
        image:"",
        academicId:"",
        level:""
    }])
    const [totalMembers, setTotalMembers] = useState([{members:0}])
    const [totalExternalMembers, setTotalExternalMembers] = useState([{members:0}])
    const [totalMembersPerLevel, setTotalMembersPerLevel] = useState([{level:"",members:0}])
    const [surname, setSurname] = useState("")
    
    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true;

        if(isSubscribed) {
            const getAllMembers = () => {
               return axios.get(`http://localhost:4568/api/getAllResMembers`)
            }

            const getTotalMembers = () => {
               return axios.get(`http://localhost:4568/api/getTotalMembers`)
            }

            const getTotalExternalMembers = () => {
                return axios.get(`http://localhost:4568/api/getTotalExternalMembers`)
            }

            const getTotalMembersPerLevel = () => {
                return axios.get(`http://localhost:4568/api/getTotalMembersPerLevel`)
            }

            axios.all([getAllMembers(),getTotalMembers(),getTotalExternalMembers(),getTotalMembersPerLevel()])
                 .then((res) => {
                    setResMembers(res[0].data) 
                    setTotalMembers(res[1].data)
                    setTotalExternalMembers(res[2].data)
                    setTotalMembersPerLevel(res[3].data)
                 })
                 .catch(err => {
                     console.error(err)
                 })

        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const goToResearchMemberPage = (academicId) => {
        navigate(`/research_member/${academicId}`)
    } 

    const getMemberBySurname = () => {
        axios.get(`http://localhost:4568/api/getMemberBySurname/${surname}`)
            .then(res => {
                setResMembers(res.data)
            })
    }
    
    const getMembersByLevel = (level) => {
        axios.get(`http://localhost:4568/api/getMembersByLevel/${level}`)
            .then(res => {
                setResMembers(res.data)
            })
    }

    const getMemberWithMinProjects = () => {
        axios.get(`http://localhost:4568/api/getMemberWithMinProjects`)
             .then(res => {
                 setResMembers(res.data)
             })
    }

    const getMembersWithoutProjects = () => {
        axios.get(`http://localhost:4568/api/getMembersWithoutProjects`)
        .then(res => {
            setResMembers(res.data)
        }) 
    }

    const getExternalMemberWithMaxProjects = () => {
        axios.get(`http://localhost:4568/api/getExternalMemberWithMaxProjects`)
        .then(res => {
            setResMembers(res.data)
        }) 
    }

    const getMemberWithMaxPublications = () => {
        axios.get(`http://localhost:4568/api/getMemberWithMaxPublications`)
        .then(res => {
            setResMembers(res.data)
        }) 
    }

    const getMembersWithAtLeastOneCourse = () => {
        axios.get(`http://localhost:4568/api/getMembersWithAtLeastOneCourse`)
        .then(res => {
            setResMembers(res.data)
        })  
    }

    const getMembersWithAtLeastOnePublication = () => {
        axios.get(`http://localhost:4568/api/getMembersWithAtLeastOnePublication`)
        .then(res => {
            setResMembers(res.data)
        })  
    }

    const getMemberWithMinPublications = () => {
        axios.get(`http://localhost:4568/api/getMemberWithMinPublications`)
        .then(res => {
            setResMembers(res.data)
        })    
    }

    const getMembersWithoutPublications = () => {
        axios.get(`http://localhost:4568/api/getMembersWithoutPublications`)
        .then(res => {
            setResMembers(res.data)
        })    
    }

    const getExternalMembers = () => {
        axios.get(`http://localhost:4568/api/getExternalMembers`)
            .then(res => {
                setResMembers(res.data)
            })
    }

    const handleSurname = (event) => {
        let surname = event.target.value
        setSurname(surname)
    }

    return (
        <div className="container-fluid res-members-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link onClick={() => getMembersByLevel('Professor')} underline="hover" className="breadcrumb-style" color="inherit">
                            Professors
                        </Link>
                        <Link onClick={() => getMembersByLevel('Associate Professor')} underline="hover" className="breadcrumb-style" color="inherit">
                            Associate Professors
                        </Link>
                        <Link onClick={() => getMembersByLevel('Assistant Professor')} underline="hover" className="breadcrumb-style" color="inherit">
                            Assistant Professors
                        </Link>
                        <Link onClick={() => getMembersByLevel('Postdoctoral Researcher')} underline="hover" className="breadcrumb-style" color="inherit">
                            Postdoctoral Researchers
                        </Link>
                        <Link onClick={() => getMembersByLevel('PHD Candidate')} underline="hover" className="breadcrumb-style" color="inherit">
                            PHD Candidates
                        </Link>
                        <Link onClick={() => getMembersByLevel('Postgraduate Student')} underline="hover" className="breadcrumb-style" color="inherit">
                            Postgraduate Students
                        </Link>
                        <Link onClick={() => getMembersByLevel('Undergraduate Student')} underline="hover" className="breadcrumb-style" color="inherit">
                            Undergraduate Students
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-3">
                <List>
                    {resMembers.map((r,i) => {
                        return (
                            <div key={i}>
                                <ListItem className="row res-members-list-item">
                                    <h4>{r.name} {r.surname}</h4>
                                    <figure>
                                        <img src={`data:image/jpeg;base64,${r.image}`} alt={r.name+" "+r.surname} className="img-style"/>
                                    </figure>
                                    <a href={"mailto:"+r.email} className="res_member_info"><EnvelopeFill />&nbsp;&nbsp;{r.email}</a>
                                    <a href={"tel:"+r.tel} className="res_member_info"><TelephoneFill />&nbsp;&nbsp;{r.tel}</a>
                                    <p className="res_member_info">{r.level}</p>
                                    <p className="res_member_info">{r.projects !== undefined ? "projects: "+r.projects: ""}</p>
                                    <p className="res_member_info">{r.publications !== undefined ? "publications: "+r.publications: ""}</p>
                                    <Button variant="contained" onClick={() => goToResearchMemberPage(r.academicId)} style={seeDetailsBtnStyle}>See details</Button>
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    })}
                </List>
                </div>
                <div className="col-sm-7">
                    <div className="number-of-members">
                            <h5 className="each-number-of-member">Members: {totalMembers[0].members}</h5>
                            <h5 className="each-number-of-member">External Members: {totalExternalMembers[0].members}</h5>
                            <h5 className="each-number-of-member">Number of members on each level.</h5>
                            {totalMembersPerLevel.map((s,i) => {
                                return <p key={i} className="each-number-of-member">{s.level}: {s.members}</p>
                            })}
                    </div>
                    <form className="forms-style">
                        <h3 className="text-center">Search by surname</h3>
                        <TextField 
                            required
                            name="surname"
                            label="surname"
                            className="mb-3"
                            defaultValue={surname}
                            onChange={handleSurname} 
                            onClick={handleSurname}
                            onBlur={handleSurname}
                        />
                        <div className="text-center">
                            <Button onClick={getMemberBySurname} variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getExternalMembers} variant="contained" style={queryBtn}>External Research Members</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMemberWithMinProjects} variant="contained" style={queryBtn}>Researcher with min projects</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMembersWithoutProjects} variant="contained" style={queryBtn}>Researchers without project</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getExternalMemberWithMaxProjects} variant="contained" style={queryBtn}>External member with max projects</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMemberWithMaxPublications} variant="contained" style={queryBtn}>Member with max publications</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-6">
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMembersWithAtLeastOneCourse} variant="contained" style={queryBtn}>Members with at least one course</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMembersWithAtLeastOnePublication} variant="contained" style={queryBtn}>Members with at least one publication</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    <div className="text-center">
                                        <Button onClick={getMemberWithMinPublications} variant="contained" style={queryBtn}>Member with min publications</Button>
                                    </div>
                                </form>
                                <form className="forms-style">
                                    {/*TODO NA PERASW ENAN POU DEN EXEI PUBLICATIONS */}
                                    <div className="text-center">
                                        <Button onClick={getMembersWithoutPublications} variant="contained" style={queryBtn}>Members without publications</Button>
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