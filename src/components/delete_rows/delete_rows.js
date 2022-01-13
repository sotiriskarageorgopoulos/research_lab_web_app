import React from 'react';
import './delete_rows.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';

const DeleteRows = () => {
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
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'admin'}))

    return (
        <div className="container-fluid delete-container">
            <div className="row mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Publication</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                publication title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'p_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Journal</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                journal title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'j_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Academic Conference</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                conference title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'conference title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <Divider/>
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Research Member</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                academic id
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'academic_id'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Course</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                course title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'course_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Lab</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                lab title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'lab_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Announcement</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                announcement title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'announcement_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Delete Research Project</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                project title
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'project_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteRows;