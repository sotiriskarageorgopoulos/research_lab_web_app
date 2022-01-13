import React from 'react';
import './insert_rows.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch} from 'react-redux';
import {setComponentType} from '../../redux/navbars';

const InsertRows = () => {
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
        <div className="container-fluid insert-rows-container">
            <div className="row mt-3 mb-3">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Research Project</h3>
                        <TextField required name="rpid" label="rpid" className="mb-3"/>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField
                            required
                            multiline
                            name="rp_description"
                            label="rp_description"
                            className="mb-3"
                            inputProps={{
                            maxLength: 255
                        }}/>
                        <TextField
                            required
                            type="datetime-local"
                            name="assignment_date"
                            label="assignment_date"
                            className="mb-3"/>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                is active
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'researcher',
                                id: 'uncontrolled-native'
                            }}>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField
                            required
                            type="number"
                            name="income"
                            label="income"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Announcement</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                lid
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'researcher',
                                id: 'uncontrolled-native'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                                <option value={'l3'}>l3</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField required multiline name="content" label="content" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Course</h3>
                        <TextField required name="cid" label="cid" className="mb-3"/>
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
                                name: 'researcher',
                                id: 'uncontrolled-native'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                                <option value={'l3'}>l3</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField
                            required
                            multiline
                            name="c_description"
                            label="c_description"
                            className="mb-3"/>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                study level
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'researcher',
                                id: 'uncontrolled-native'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                                <option value={'l3'}>l3</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required type="number" name="ects" label="ECTS" className="mb-3"/>
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
                        <h3 className="text-center">Insert Research Member</h3>
                        <TextField required name="academic_id" label="academic id" className="mb-3"/>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                lid
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'lid'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required name="r_name" label="r_name" className="mb-3"/>
                        <TextField required name="r_surname" label="r_surname" className="mb-3"/>
                        <TextField required name="email" label="email" className="mb-3"/>
                        <TextField required name="web_page" label="web_page" className="mb-3"/>
                        <TextField required name="tel" label="tel" className="mb-3"/>
                        <TextField
                            required
                            multiline
                            name="short_cv"
                            label="short_cv"
                            className="mb-3"/>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                study level
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'study_level'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <TextField required name="address" label="address" className="mb-3"/>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                external member
                            </InputLabel>
                            <NativeSelect
                                inputProps={{
                                name: 'is_external_member'
                            }}>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
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
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Publication</h3>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField required type="datetime-local" name="date" label="date" className="mb-3"/>
                        <TextField required multiline name="content" label="content" className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                    <form className="forms-style">
                        <h3 className="text-center">Insert Academic Conference</h3>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField
                            required
                            multiline
                            name="ac_description"
                            label="ac_description"
                            className="mb-3"/>
                        <TextField
                            required
                            type="datetime-local"
                            name="date"
                            label="date"
                            className="mb-3"/>
                        <TextField required name="city" label="city" className="mb-3"/>
                        <TextField required name="country" label="country" className="mb-3"/>
                        <TextField
                            required
                            name="scientific_subject"
                            label="scientific_subject"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Journal</h3>
                        <TextField required name="title" label="title" className="mb-3"/>
                        <TextField
                            required
                            multiline
                            name="j_description"
                            label="j_description"
                            inputProps={{
                            maxLength: 255
                        }}
                            className="mb-3"/>
                        <TextField required name="web_page" label="web_page" className="mb-3"/>
                        <TextField
                            required
                            name="scientific_subject"
                            label="scientific_subject"
                            className="mb-3"/>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                    <form className="forms-style">
                        <h3 className="text-center">Insert Publication_Academic_Conference</h3>
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
                                name: 'conference_title'
                            }}>
                                <option value={'l1'}>l1</option>
                                <option value={'l2'}>l2</option>
                            </NativeSelect>
                        </FormControl>
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                    <form className="forms-style">
                        <h3 className="text-center">Insert Publication_Journal</h3>
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
            </div>
            <Divider/>
            <div className="row">
                <div className="col-sm-4">
                    <form className="forms-style">
                        <h3 className="text-center">Insert Research_Member_Publication</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                academic_id
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
                        <h3 className="text-center">Insert Research_Member_Project</h3>
                        <FormControl
                            fullWidth
                            style={{
                            margin: "5% auto 5% auto"
                        }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                academic_id
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
                        <div className="text-center">
                            <Button variant="contained" style={submitBtnStyle}>Submit</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    )
}

export default InsertRows;