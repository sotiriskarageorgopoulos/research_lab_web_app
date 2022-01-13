import React from 'react';
import './update_rows.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';

const UpdateRows = () => {
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
        <div className="container-fluid update-container">
            <div className="row mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Course Title</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            name="new_course_title"
                            label="new course title"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Announcement Title</h3>
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
                                name: 'announcement title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            name="new_announcement_title"
                            label="new announcement title"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Announcement Content</h3>
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
                                name: 'announcement title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            multiline
                            name="new_announcement_content"
                            label="new announcement content"
                            className="mb-3"/>
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
                        <h3 className="text-center">Update Short CV</h3>
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
                        <TextField required name="new_cv" label="new short cv" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Study Level</h3>
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
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                new study level
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'new_study_level'
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
                        <h3 className="text-center">Update Profile Image</h3>
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
                        <input
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
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <Divider/>
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Address</h3>
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
                        <TextField required name="new_address" label="new address" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Tel</h3>
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
                        <TextField required name="new_tel" label="new tel" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Web Page</h3>
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
                        <TextField required name="new_web_page" label="new web page" className="mb-3"/>
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
                        <h3 className="text-center">Update Course Description</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            multiline
                            name="course_desc"
                            label="new course description"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Course ECTS</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            type="number"
                            name="course_ects"
                            label="ECTS"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Project's Progress</h3>
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
                                name: 'project title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                active
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'active'
                            }}>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
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
                        <h3 className="text-center">Update Journal's Web Page</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            multiline
                            name="web_page"
                            label="new web page"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Lab's Title</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required name="lab_title" label="new lab title" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Update Lab's Description</h3>
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
                                name: 'course title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            multiline
                            name="lab_desc"
                            label="new lab description"
                            inputProps={{
                            maxLength: 255
                        }}
                            className="mb-3"/>
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
                        <h3 className="text-center">Update Lab's Web Page</h3>
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
                                name: 'lab title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            multiline
                            name="lab_web_page"
                            label="new web page"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateRows;