import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

   const submitBtnStyle = {
        backgroundColor: '#f55a42',
        textTransform: 'capitalize',
        width:'50%',
        marginLeft:"5%"
    }

   const adminObj = {
       email: "",
       password: ""
   }

   const [admin,setAdmin] = useState(adminObj)
   const navigate = useNavigate()

   const authAdmin = (event) => {
       event.preventDefault()
       if(admin.email === 'admin@domain.com' && admin.password === '123') {
           navigate('/admin')
       }
   } 

   const handleInputs = (event) => {
        let inputName = event.target.name
        let value = event.target.value
        setAdmin({...admin,[inputName]:value})
   }

    return (
        <div className="container-fluid login-container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form className="forms-style" onSubmit={authAdmin}>
                        <h3 className="text-center">Admin Login</h3>
                        <TextField 
                            required
                            name="email"
                            label="email"
                            className="mb-3"
                            onClick={handleInputs}
                            onChange={handleInputs}
                            onBlur={handleInputs}
                        />
                        <TextField 
                            required
                            name="password"
                            label="password"
                            className="mb-3"
                            onClick={handleInputs}
                            onChange={handleInputs}
                            onBlur={handleInputs}
                        />
                        <div className="text-center">
                            <Button type="submit" variant="contained" style={submitBtnStyle}>Login</Button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    )
}

export default Login