import React, {useState, useEffect} from 'react';
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        width:'100%',
    }

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true;

        if(isSubscribed) {
            const getAllProjects = async() => {
                return axios.get(`http://localhost:4568/api/getAllProjects`)
            }

            const getAllResMembers = async() => {
               return axios.get(`http://localhost:4568/api/getAllResMembers`)
            }

            const getIncomePerYear = async() => {
               return axios.get(`http://localhost:4568/api/getIncomePerYear`)
            }

            const getUniversityBenefits = async() => {
               return axios.get(`http://localhost:4568/api/getUniversityBenefits`)
            }

            const getTotalIncome = async() => {
                return axios.get(`http://localhost:4568/api/getTotalIncome`)
            }

            const getUniversityBenefitsPerYear = async() => {
               return axios.get(`http://localhost:4568/api/getUniversityBenefitsPerYear`)
            }

            axios.all([
                getAllProjects(),
                getUniversityBenefits(),
                getIncomePerYear(),
                getAllResMembers(),
                getTotalIncome(),
                getUniversityBenefitsPerYear()
            ]).then(res => {
                setProjects(res[0].data)
                setUniversityBenefits(res[1].data)
                setIncomePerYear(res[2].data)
                setMembers(res[3].data)
                setTotalIncome(res[4].data)
                setUniversityBenefitsPerYear(res[5].data)
            })
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const [incomePerYear, setIncomePerYear] = useState([{income:0,year:""},])
    const [projects, setProjects] = useState([{assignmentDate:"",title:"",isActive:false}])
    const [members, setMembers] = useState([{academicId:"",name:"",surname:""}])
    const [academicId, setAcademicId] = useState("")
    const [universityBenefits,setUniversityBenefits] = useState([{benefits:0}])
    const [totalIncome, setTotalIncome] = useState([{income:0}])
    const [universityBenefitsPerYear, setUniversityBenefitsPerYear] = useState([{benefits:0,year:""}])
    const navigate = useNavigate()

    const orderProjectsByIncomeAscOrder = () => {
        axios.get(`http://localhost:4568/api/orderProjectsByIncomeAscOrder`)
             .then(res => {
                setProjects(res.data)
             })
    }

    const orderProjectsByIncomeDescOrder = () => {
        axios.get(`http://localhost:4568/api/orderProjectsByIncomeDescOrder`)
             .then(res => {
                setProjects(res.data)
             })
    }

    const getActiveProjects = () => {
        axios.get(`http://localhost:4568/api/getActiveProjects`)
             .then(res => {
                setProjects(res.data)
             })
    }

    const getProjectsByResearcher = () => {
        axios.get(`http://localhost:4568/api/getProjectByResearcher/${academicId}`)
             .then(res => {
                setProjects(res.data)
             })
    }

    const handleAcademicId = (event) => {
        let academicId = event.target.values
        setAcademicId(academicId)
    }

    const goToProjectPage = (rpid) => {
        navigate(`/research_project/${rpid}`)
    }

    const getProjectWithMaxIncome = () => {
        axios.get(`http://localhost:4568/api/getProjectWithMaxIncome`)
            .then(res => {
                setProjects(res.data)
            })
    }

    const getProjectWithMinIncome = () => {
        axios.get(`http://localhost:4568/api/getProjectWithMinIncome`)
            .then(res => {
                setProjects(res.data)
            })
    }

    return (
    <div className="container-fluid research-projects-container">
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-6">
                <div className="text-center">
                    <Button onClick={orderProjectsByIncomeAscOrder} variant="contained"style={sortBtnStyle}>Ascending Order By Income</Button>
                    <Button onClick={orderProjectsByIncomeDescOrder} variant="contained" style={sortBtnStyle}>Descending Order By Income</Button>
                </div>
            </div>
            <div className="col-sm-5"></div>
        </div>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-3">
            <List>
                {
                projects.map((p,i) => {
                    return (
                    <div key={i}>
                        <ListItem className="row">
                            <h2>{p.title}</h2>
                            <p className={p.isActive?"active-project":"completed-project"}>{p.isActive ? "active": "completed"}</p>
                            <p className="year-assignment">Assignment Year: {p.assignmentDate}</p>
                            <Button onClick={() => goToProjectPage(p.rpid)} variant="contained" style={seeDetailsBtnStyle}>See details</Button>
                        </ListItem>
                        <Divider />
                    </div>
                    )
                })}
            </List>
            </div>
            <div className="col-sm-5">
            <form className="forms-style">
                <div className="text-center">
                    <Button onClick={getActiveProjects} variant="contained" style={queryBtn}>active research projects</Button>
                </div>
            </form>
            <form className="forms-style">
                <div className="text-center">
                    <Button onClick={getProjectWithMaxIncome} variant="contained" style={queryBtn}>research project with min income</Button>
                </div>
            </form>
            <form className="forms-style">
                <div className="text-center">
                    <Button onClick={getProjectWithMinIncome} variant="contained" style={queryBtn}>research project with max income</Button>
                </div>
            </form>
            <form className="forms-style">
                 <h3 className="text-center">Search by Researcher</h3>
                 <FormControl
                  fullWidth 
                  style={{margin:"5% auto 5% auto",width:"80%"}}
                  onBlur={handleAcademicId}
                  onClick={handleAcademicId}
                  onChange={handleAcademicId}
                >
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Researcher
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                            name: 'researcher',
                            id: 'uncontrolled-native',
                            }}
                        >
                            <option>Select...</option>
                            {members.map((m,i) => {
                                return <option key={i}
                                value={m.academicId}
                                >{m.name} {m.surname}
                                </option>
                            })}
                        </NativeSelect>
                </FormControl>
                <div className="text-center">
                    <Button onClick={getProjectsByResearcher} variant="contained" style={submitBtnStyle}>Submit</Button>
                </div>
            </form>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="research-projects">
                            <h3 className="text-center text-light">Lab income per year.</h3>
                            <ul>
                                {incomePerYear.map((s,i) => {
                                    return <li key={i} className="research-projects-list-item">{s.year}: {s.income.toLocaleString("de-DE")} &#36;</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="research-projects">
                            <h3 className="text-center text-light">University income: {universityBenefits[0].benefits.toLocaleString("de-DE")} &#36;</h3>
                        </div>
                        <div className="research-projects">
                            <h3 className="text-center text-light">Total income: {totalIncome[0].income.toLocaleString("de-DE")} &#36;</h3>
                        </div>
                        <div className="research-projects">
                            <h3 className="text-center text-light">University income per year.</h3>
                            <ul>
                                {universityBenefitsPerYear.map((u,i) => {
                                    return <li key={i} className="research-projects-list-item">{u.year}: {u.benefits.toLocaleString("de-DE")} &#36;</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
</div>
    )
}
export default ResearchProject