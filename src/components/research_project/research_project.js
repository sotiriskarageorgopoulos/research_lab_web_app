import React, {useState, useEffect} from 'react';
import './research_project.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import axios from 'axios';

const ResearchProject = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    const [members,setMembers] = useState([{
        name:"",
        surname:"",
        studyLevel:""
    }])

    const [project, setProject] = useState([{
        income: 0,
        description: "",
        assignmentDate:"",
        title:"",
        isActive: false
    }])

    /*TODO NA FTIAKSW TO ENDPOINT GET PROJECT BY ID OK*/

    useEffect(() => {
        let isSubscribed = true;
        const cancelTokenSource = axios.CancelToken.source();
        let path = window.location.pathname
        let rpid = path.split('/')[2]

        if(isSubscribed) {
            const getMembersOfProject = async() => {
                axios.get(`http://localhost:4568/api/getMembersOfProject/${rpid}`)
                    .then(res => {
                        setMembers(res.data)
                    })
            }

            const getProject = async() => {
                axios.get(`http://localhost:4568/api/getProject/${rpid}`)
                    .then(res => {
                        setProject(res.data)
                    })
            }

            Promise.all([
                getProject(),
                getMembersOfProject()
            ])

        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    return (
    <div className="container-fluid research-project-container">
        <div className="row"> 
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <h2 className="">{project[0].title}</h2>
                <p className="">Assignment year: {project[0].assignmentDate}</p>
                <p className={project[0].isActive ? "active-project" : "completed-project"}>{project[0].isActive ? "Active" : "Completed"}</p>
                <p className="desc-style">{project[0].description}</p>
                <div className="">
                    <h2>Researchers</h2>
                    <ul>
                        {members.map(m => {
                            return <li>{m.name} {m.surname} {m.studyLevel}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResearchProject;