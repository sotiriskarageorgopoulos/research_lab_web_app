import React, {useState, useEffect} from 'react';
import './announcements.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Announcements = () => {
    const dispatch = useDispatch()
    const [announcements,setAnnouncements] = useState([])
    const navigate = useNavigate()

    dispatch(setComponentType({componentType: 'user'}))

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true

        if(isSubscribed) {
            const getAllAnnouncements = async () => {
                axios.get("http://localhost:4568/api/getAllAnnouncements")
                .then(res => {
                    const a = res.data
                    setAnnouncements(a)
                })
            }
            getAllAnnouncements()
        }
        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    const goToAnnouncementPage = (aid) => {
        navigate(`/announcement/${aid}`)
    }
    
    return (
    <div className="container-fluid announcements-container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                    <h2 className="text-center">Announcements</h2>
                    <List>
                        {announcements.map(a => {
                            return (
                                <>
                                <ListItem className="list-item-style">
                                    <p>{a.title}</p>
                                    <p>{a.date}</p>
                                    <Button onClick={() => goToAnnouncementPage(a.aid)} variant="contained" style={{backgroundColor: '#f55a42',textTransform: 'lowercase'}} className="announcement-btn">See details</Button>
                                </ListItem>
                                <Divider />
                                </>
                            )
                        })}
                    </List>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>)
}

export default Announcements;