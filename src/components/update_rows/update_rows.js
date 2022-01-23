import React, {useState} from 'react';
import './update_rows.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';
import axios from 'axios';
import {choices} from './choices';

const UpdateRows = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))
    const [choice,setChoice] = useState("")

    const [formData, setFormData] = useState({
        title: '',
        endpoint: '',
        updEndpoint: '',
        data: [],
        selectShow: [],
        pk:"",
        inputType: "",
        attr: ""
    })

    const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width: '50%',
        marginLeft: "5%"
    }

    const getFormData = () => {
        axios
            .get(formData.endpoint)
            .then(res => {
              let data = res.data
              setFormData({...formData,data: data})
            })
    }

    const handleChoice = (event) => {
        setChoice(event.target.value)

        choices.filter(c => c.title === choice)
               .map(c => {
                    setFormData({...c,data:[]})
                })
    }

    return (
        <div className="container-fluid update-container">
            <div className="row mb-3">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h1 className="text-center">Tables</h1>
                        <FormControl
                            fullWidth
                            onClick={handleChoice}
                            onChange={handleChoice}
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Choices
                            </InputLabel>
                            <NativeSelect>
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
                    {formData.data.length > 0 ? <UpdateForm {...formData}/>: ""}
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

const UpdateForm = ({title,data,updEndpoint,selectShow,pk,inputType,attr}) => {
    const [id, setId] = useState("")

    const handleId = (event) => {
        setId(event.target.value)
    }

    const updInputProps = {id,pk,updEndpoint,inputType,attr}

    return (
        <form className="forms-style">
            <h3 className="text-center">{title}</h3>
            <FormControl
                fullWidth
                onClick={handleId}
                onChange= {handleId}
                style={{
                    margin: "5% auto 5% auto"
            }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native"> 
            </InputLabel>
             <NativeSelect
                inputProps={{
                    name: 'id'
             }}>
                <option>Select...</option>
                {data.map((d,i) => {
                    if(selectShow.length == 2) {
                        let name = selectShow[0]
                        let surname = selectShow[1]
                        return <option key={i} value={d[pk]}>{d[name]} {d[surname]}</option>
                    }
                    return <option key={i} value={d[pk]}>{d.title}</option>
                })}
            </NativeSelect>
            </FormControl>
            <UpdateInput {...updInputProps}/>
        </form>
    )
}

const UpdateInput = ({id,pk,updEndpoint,inputType,attr}) => {
    const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width: '50%',
        marginLeft: "5%"
    }
    
    const imageUploadBtn = {
        ...submitBtnStyle,
        width: '30%',
        marginBottom: "5%"
    }

    const [value,setValue] = useState("")

    const toBase64String = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => {
                let imgStr = reader.result.split(",")
                resolve(imgStr[1]) 
            }
            reader.onerror = (err) => reject(err)
        })
    }

    const handleValue = (event) => {
        console.log(event)
        if(inputType === 'button') {
            toBase64String(event.target.files[0])
            .then(img => {
                setValue(img)
            })
        }else {
            setValue(event.target.value)
        }
    }

    const updateRow = () => {
        console.log(attr)
        if(value !== "") {
            axios.put(updEndpoint,{[pk]:id,[attr]:value})
            console.log({[pk]:id,[attr]:value})
            window.location.reload(false)
        }
    }

    console.log("hii "+inputType)

    if(inputType === "text") {
        return (
            <>
                <TextField
                    onClick = {handleValue}
                    onChange = {handleValue}
                    onBlur = {handleValue}
                    required
                    name="new_value"
                    label="new value"
                    className="mb-3"/>
                <div className="text-center">
                   <Button onClick={updateRow} variant="contained" style={submitBtnStyle}>Submit</Button>
                </div>
            </>
        )
    } else if(inputType === "boolean") {
        return (
            <>
                <FormControl
                    fullWidth
                    onClick={handleValue}
                    onChange= {handleValue}
                    style={{
                        margin: "5% auto 5% auto"
                }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native"> 
                    new value
                </InputLabel>
                <NativeSelect>
                    <option>Select...</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </NativeSelect>
                </FormControl>
                <div className="text-center">
                   <Button onClick={updateRow} variant="contained" style={submitBtnStyle}>Submit</Button>
                </div>
            </>
        )
    } 
    else if(inputType === "button") {
        return (
            <>
            <input
              onClick={handleValue}
              onChange= {handleValue}
              accept="image/*"
              style={{
                display: 'none'
              }}
              id="raised-button-file"
              multiple
              type="file"/>
              <label htmlFor="raised-button-file">
                  <Button variant="contained" style={imageUploadBtn} component="span">
                    Upload Image
                  </Button>
              </label>    
              <div className="text-center">
                  <Button onClick={updateRow} variant="contained" style={submitBtnStyle}>Submit</Button>
              </div>           
            </>
        )
    }
    return <></>
}

export default UpdateRows;