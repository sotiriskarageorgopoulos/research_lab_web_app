import React,{useState} from 'react';
import './insert_rows.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';
import {choices} from './choices.js'
import axios from 'axios'

const InsertRows = () => {
    const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width: '50%',
        marginLeft: "5%"
    }

    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))

    const [choice, setChoice] = useState({
                                            title: '',
                                            inputs: [{
                                                name: '',
                                                type: '',
                                                show: '',
                                                data: [],
                                                endpoint: '',
                                                selectProp: ''
                                            }]
                                        })
    const [display, setDisplay] = useState(false)

    const handleChoice = (event) => {
        setDisplay(false)
        let [c] = choices.filter(c => c.title === event.target.value)
        if(c !== undefined) {
            c.inputs.filter(c => c.data !== undefined && c.endpoint !== undefined) 
                .map(c => {
                    axios.get(c.endpoint)
                        .then(res => {
                            c.data = res.data
                        })
                })
            setChoice(c) 
        }
    }

    const submitChoice = () => {
       setDisplay(true)
    }
   
    return (
        <div className="container-fluid insert-rows-container">
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h1 className="text-center">Tables</h1>
                        <FormControl
                            fullWidth
                            style={{
                             margin: "5% auto 5% auto"
                            }}
                            onClick={handleChoice}
                            onChange={handleChoice}
                        >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                choose
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'choice',
                                id: 'uncontrolled-native'
                            }}>
                                <option>Select...</option>
                                {choices.map((c,i) => {
                                    return <option key={i} value={c.title}>{c.title}</option>
                                })}
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button onClick={submitChoice} variant="contained" style={submitBtnStyle}>Submit</Button>
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
                  {display ? <InsertForm {...choice}/>: ""}  
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

const InsertForm = (choice) => {
    const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width: '50%',
        marginLeft: "5%"
    }

    const imageUploadBtn = {
        ...submitBtnStyle,
        width: '100%',
        marginBottom: "5%"
    }

    const [formValues, setFormValues] = useState()

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

    const handleFormValues = (event) => {
        if(event.target.type === 'file') {
            if(event.target.files[0] !== undefined) {
                toBase64String(event.target.files[0])
                .then(image => {
                    setFormValues({...formValues,image})
                })
            }
        } 
        else if(event.target.type === 'datetime-local') {
            
            if(choice.title === 'Insert Research Project') {
                let name = event.target.name
                let value = event.target.value.slice(0,10)
                setFormValues({...formValues,[name]:value})
            }else {
                let name = event.target.name
                let d = event.target.value.split("T")
                let value = d[0]+" "+d[1]+":00"
                setFormValues({...formValues,[name]:value})
            }
        }
        else {
            let name = event.target.name
            let value = event.target.value
            setFormValues({...formValues,[name]:value})
        }
    }

    const insertRow = () => {
        console.log(formValues)
        axios.post(choice.endpoint,formValues)
    }

    return (
        <form className="forms-style">
            <h3 className="text-center">{choice.title}</h3>
            {choice.inputs.map((c,i) => {
                if(c.type === 'text') {
                    return (
                        <TextField
                            key={i}
                            required
                            onClick={handleFormValues}
                            onChange={handleFormValues}
                            name={c.name}
                            label={c.show}
                            type="text"
                            className="mb-3"
                            defaultValue = {c.default !== undefined? c.default:""}
                            inputProps = {{
                                readOnly: c.default !== undefined ? true : false
                            }}
                        />  
                    )
                } else if(c.type === 'multiline_text') {
                    return (
                        <TextField
                            key={i}
                            onClick={handleFormValues}
                            onChange={handleFormValues}
                            required
                            multiline
                            name={c.name}
                            label={c.show}
                            className="mb-3"
                            inputProps={{
                                maxLength: 255
                            }}/>
                    )
                } else if(c.type === 'button') {
                    return (
                        <div key={i}>
                            <input
                                accept="image/*"
                                style={{
                                    display: 'none'
                                }}
                                id="raised-button-file"
                                name="image"
                                multiple
                                onClick={handleFormValues}
                                onChange={handleFormValues}
                                type="file"/>
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" style={imageUploadBtn} component="span">
                                    Upload Image
                                </Button>
                            </label>    
                        </div>
                    )
                } else if(c.type === 'number') {
                    return (
                        <TextField
                            key={i}
                            required
                            onClick={handleFormValues}
                            onChange={handleFormValues}
                            type="number"
                            name={c.name}
                            label={c.show}
                            className="mb-3"/>
                    )
                } else if (c.type === 'date') {
                    return (
                        <TextField
                            key={i}
                            required
                            onClick={handleFormValues}
                            onChange={handleFormValues}
                            type="datetime-local"
                            name={c.name}
                            label={c.name}
                            className="mb-3"/>
                    )
                } else if (c.type === 'boolean') {
                    return (
                    <FormControl
                            key={i}
                            fullWidth
                            onClick={handleFormValues}
                            onChange={handleFormValues}
                            style={{
                                margin: "5% auto 5% auto"
                            }}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            {c.show}
                        </InputLabel>
                        <NativeSelect
                            inputProps={{
                                name: c.name,
                                id: 'uncontrolled-native'
                            }}>
                            <option>Select...</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </NativeSelect>
                    </FormControl>  
                    )
                } else if(c.type === 'select') {
                    return (
                        <FormControl
                                key={i}
                                fullWidth
                                onClick={handleFormValues}
                                onChange={handleFormValues}
                                style={{
                                    margin: "5% auto 5% auto"
                                }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                {c.show}
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                    name: c.name,
                                    id: 'uncontrolled-native'
                                }}>
                                <option>Select...</option>
                                {c.data.map((d,i) => {
                                    let id = c.name
                                    if(c.selectProp !== undefined){
                                        let prop = c.selectProp
                                        return <option key={i} value={d[id]}>{d[prop]}</option>
                                    }
                                    else if(c.endpoint === undefined) {
                                        return <option key={i} value={d}>{d}</option>
                                    } 
                                    else {
                                        return <option key={i} value={d[id]}>{d[id]}</option>
                                    }
                                })}
                            </NativeSelect>
                        </FormControl>  
                        )
                }
            })}
            <div className="text-center">
                <Button onClick={insertRow} variant="contained" style={submitBtnStyle}>Submit</Button>
            </div>
        </form>
    )
}


export default InsertRows;