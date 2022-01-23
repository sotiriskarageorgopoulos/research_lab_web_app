import React, {useState} from 'react';
import './delete_rows.css';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';
import axios from 'axios';

const DeleteRows = () => {
    const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width: '50%',
        marginLeft: "5%"
    }

    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))

    const [formData,setFormData] = useState({
        title:'',
        endpoint: ``,
        delEndpoint: ``,
        data: [],
        selectShow: []
    })
    const [choice, setChoice] = useState([])

    const choices = [
        {
            title:'Delete Publication',
            endpoint: `http://localhost:4568/api/getAllPublications`,
            delEndpoint: `http://localhost:4568/api/deletePublication/`,
            pk: "pid",
            selectShow: [
                "title"
            ]
        },
        {
            title: 'Delete Journal',
            endpoint: `http://localhost:4568/api/getAllJournals`,
            delEndpoint: `http://localhost:4568/api/delJournal/`,
            pk: "jid",
            selectShow: [
                "title"
            ]
        },
        {
            title:'Delete Academic Conference',
            endpoint: `http://localhost:4568/api/getAllAcademicConfs`,
            delEndpoint: `http://localhost:4568/api/delAcademicConf/`,
            pk: "acid",
            selectShow: [
                "title"
            ]
        },
        {
            title:'Delete Member',
            endpoint: 'http://localhost:4568/api/getAllResMembers',
            delEndpoint: `http://localhost:4568/api/delResMember/`,
            pk: "academicId",
            selectShow: [
                "name",
                "surname"
            ]
        },
        {
            title: 'Delete Project',
            enpoint: `http://localhost:4568/api/getAllProjects`,
            delEndpoint: `http://localhost:4568/api/delProject`,
            pk: "rpid",
            selectShow: [
                "title" 
            ]
        },
        {
            title: 'Delete Announcement',
            endpoint: `http://localhost:4568/api/getAllAnnouncements`,
            delEndpoint: `http://localhost:4568/api/delAnnouncement/`,
            pk: "aid",
            selectShow: [
                "title" 
            ]
        },
        {
            title: 'Delete Lab',
            endpoint: `http://localhost:4568/api/getAllLabs`,
            delEndpoint: `http://localhost:4568/api/delLab/`,
            pk: "lid",
            selectShow: [
                "title" 
            ]
        },
        {
            title: 'Delete Course',
            endpoint: `http://localhost:4568/api/getAllCourses`,
            delEndpoint: `http://localhost:4568/api/delCourse/`,
            pk: "cid",
            selectShow: [
                "title" 
            ]
        }
    ]

    const handleChoice = (event) => {
        setChoice(event.target.value)
        
        choices.filter(c => c.title === choice)
               .map(c => {
                   setFormData({...c,data:[]})
               })
    }

    const getFormData = () => {
        axios
        .get(formData.endpoint)
        .then(res => {
            setFormData({...formData,data:res.data})      
        })
    }

    return (
        <div className="container-fluid delete-container">
            <div className="row mb-3">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h1 className="text-center">Tables</h1>
                        <FormControl
                            fullWidth
                            onChange={handleChoice}
                            onClick={handleChoice}
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                table
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'j_title'
                            }}>
                                <option>Select...</option>
                                {choices.map((c,i) => {
                                    return <option key={i} value={c.title}>{c.title}</option>
                                })}
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button onClick={getFormData} variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    {formData.data.length > 0 ? <DelForm submitBtnStyle={submitBtnStyle} {...formData}/>: ""}
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

const DelForm = ({submitBtnStyle,title, data, delEndpoint,pk,selectShow}) => {
    const [delId, setDelId] = useState("")
    const handleDelId = (event) => {
        let delId = event.target.value
        console.log(delId)
        setDelId(delId)
    }

    const deleteRow = () => {
        let endpoint = delEndpoint.concat(delId)
        axios.delete(endpoint)
        window.location.reload(false)
    }

    return (
        <form className="forms-style">
            <h3 className="text-center">{title}</h3>
            <FormControl
                fullWidth
                style={{
                    margin: "5% auto 5% auto"
                }}
                onBlur={handleDelId}
                onClick={handleDelId}
                onChange={handleDelId}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    id
                </InputLabel>
                <NativeSelect
                    inputProps={{
                        name: 'id'
                }}>
                    <option>Select...</option>
                    {data.map(d => {
                        if(selectShow.length == 2) {
                            let name = selectShow[0]
                            let surname = selectShow[1]
                            return <option key={d[pk]} value={d[pk]}>{d[name]} {d[surname]}</option>
                        }
                        let id = d[pk]
                        console.log(id)
                        return <option key={id} value={id}>{d[selectShow[0]]}</option>
                    })}
                </NativeSelect>
                <div className="text-center mt-3">
                    <Button onClick={deleteRow} variant="contained" style={submitBtnStyle}>Submit</Button>
                </div>
            </FormControl> 
        </form>
    )
}

export default DeleteRows;