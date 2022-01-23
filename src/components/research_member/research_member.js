import React, {useState, useEffect} from 'react'
import './research_member.css'
import {Link} from 'react-router-dom'
import {EnvelopeFill, TelephoneFill, Link as WebSiteLink} from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import Button from '@mui/material/Button';
import axios from 'axios';

const ResearchMember = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    return (
    <div className="container-fluid research-member-container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <ResearchMemberInfo />
                <ResearchMemberPublications />
                <ResearchMemberProjects />
                <ResearchMemberLab />
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    )
}

const ResearchMemberInfo = () => {
    useEffect(() => {
        let isSubscribed = true;
        const cancelTokenSource = axios.CancelToken.source();
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        
        if(isSubscribed) {
            const getResMember = async() => {
                axios.get(`http://localhost:4568/api/getMember/${academicId}`)
                    .then(res => {
                        setResMember(res.data)
                    })
            }

            getResMember()
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const [resMember, setResMember] = useState([{
        name:"",
        surname: "",
        email:"",
        tel:"",
        image:"",
        academicId:"",
        level:"",
        shortCV: ""
    }])
    if(resMember.length === 1){
        return (
            <>
                <h2 className="text-center">{resMember[0].name} {resMember[0].surname}</h2>
                    <figure className="img-pos">
                        <img src={`data:image/jpeg;base64,${resMember[0].image}`} className="image-style" alt={resMember[0].name+" "+resMember[0].surname}/>
                    </figure>
                    <div className="info-box">
                        <h3 className="details-title">Details</h3>
                        <p className="text-center text-light">{resMember[0].level}</p>
                        <a href={"mailto:"+resMember[0].email} className="info-links"><EnvelopeFill size={20}/>&nbsp;&nbsp;{resMember[0].email}</a>
                        <a href={"tel:"+resMember[0].tel} className="info-links"><TelephoneFill size={20}/>&nbsp;&nbsp;{resMember[0].tel}</a>
                        <Link to="" className="info-links"> <WebSiteLink size={20}/>&nbsp;&nbsp;{resMember[0].webPage}</Link>
                    </div>
                    <div className="short-cv-style">
                        <h2 className="text-center">SHORT CV</h2>
                        <p>
                            {resMember[0].shortCV}
                        </p>
                    </div>
                    
            </>
        )
    } 
    return (<></>)
}

const ResearchMemberPublications = () => {
    const [publications,setPublications] = useState([{date:"",title:""}])

    useEffect(() => {
        let isSubscribed = true;
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        const cancelTokenSource = axios.CancelToken.source();

        if(isSubscribed) {
            const getPublicationsOfResMember = async() => {
                axios.get(`http://localhost:4568/api/getPublicationsByResearcherInDescOrder/${academicId}`)
                    .then(res => {
                        setPublications(res.data)
                    })
            }

            getPublicationsOfResMember()
            }
            return () => {
                isSubscribed = false
                cancelTokenSource.cancel()
            }
    },[])

    const seeDetailsBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%"
    }

    const queryBtn = {
        ...seeDetailsBtnStyle,
        width:'100%',
        marginTop:"0%",
        marginBottom:"0%"
    }

    const getPublicationsByResearcherInDescOrder = () => {
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        axios.get(`http://localhost:4568/api/getPublicationsByResearcherInDescOrder/${academicId}`)
            .then(res => {
                setPublications(res.data)
            })
    }

    const getPublicationsByResearcherInAscOrder = () => {
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        axios.get(`http://localhost:4568/api/getPublicationsByResearcherInAscOrder/${academicId}`)
            .then(res => {
                setPublications(res.data)
            })
    }

    if(publications.length > 0) {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Publications</h2>
                        <ul>
                            {publications.map(p => {
                                return <li>{p.date.slice(0,10)+" "+p.title}</li>
                            })}
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <form className="forms-style">
                            <div className="text-center">
                                <Button onClick={getPublicationsByResearcherInDescOrder} variant="contained" style={queryBtn}>Publications Descending Order</Button>
                            </div>
                        </form>    
                        <form className="forms-style">
                            <div className="text-center">
                                <Button onClick={getPublicationsByResearcherInAscOrder} variant="contained" style={queryBtn}>Publications Ascending Order</Button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        )
    } 
    return <></> 
}

const ResearchMemberProjects = () => {
    useEffect(() => {
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        let isSubscribed = true;
        const cancelTokenSource = axios.CancelToken.source();

        if(isSubscribed) {
            const getProjectsOfResMember = async() => {
                axios.get(`http://localhost:4568/api/getProjectByResearcher/${academicId}`)
                    .then(res => {
                        setProjects(res.data)
                    })
            }

            getProjectsOfResMember()
        }

        return () => {
            isSubscribed = false
            cancelTokenSource.cancel()
        }
    },[])

    const [projects,setProjects] = useState([{assignmentDate:"",title:""}])
    if(projects.length > 0) {
        return (
            <>
                <h2>Research Projects</h2>
                <ul>
                    {projects.map(p => {
                        return <li>{p.assignmentDate+" "+p.title}</li>
                    })}
                </ul>
            </>
        )
    }
    return <></>
}

const ResearchMemberLab = () => {
    useEffect(() => {
        let path = window.location.pathname
        let academicId = path.split("/")[2]
        let isSubscribed = true;
        const cancelTokenSource = axios.CancelToken.source();

        if(isSubscribed) {
            const getMainLabOfMember = async() => {
                axios.get(`http://localhost:4568/api/getLabOfMember/${academicId}`)
                    .then(res => {
                        setLab(res.data)
                    })
            }

            getMainLabOfMember()
        }

        return () => {
            isSubscribed = false
            cancelTokenSource.cancel()
        }
    },[])
    const [lab,setLab] = useState([{university:"",webPage:"",title:"",image:""}])
    if(lab.length === 1) {
        return (
            <>
                <h2>Lab</h2>
                <ul>
                    <img src={`data:image/jpeg;base64,${lab[0].image}`} className="" style={{width: "100px", height: "100px"}} alt={lab[0].name+" "+lab[0].surname}/>
                    <li><b>Title:</b> {lab[0].title}</li>
                    <li><b>Web Page:</b> <a href={lab[0].webPage} className="lab-web-page-link">{lab[0].webPage}</a></li>
                    <li><b>University:</b> {lab[0].university}</li>
                </ul>
            </>
        )
    }
    return <></>
}

export default ResearchMember