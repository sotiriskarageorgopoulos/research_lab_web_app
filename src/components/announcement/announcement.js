import React, {useState, useEffect} from 'react';
import './announcement.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import axios from 'axios';

const Announcement = () => {
    const dispatch = useDispatch()
    const [announcement,setAnnouncement] = useState([{
        title:"",
        date:"",
        content:""
    }])
    dispatch(setComponentType({componentType: 'user'}))

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true

        if(isSubscribed) {
            const getAnnouncement = async() => {
                let path = window.location.pathname
                let aid = path.split("/")[2]
                axios.get(`http://localhost:4568/api/getAnnouncement/${aid}`)
                    .then(res => {
                        const a = res.data
                        setAnnouncement(a)
                })
            }
            getAnnouncement()
        }

        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    return (
    <div className="container-fluid announcement-container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <h2>{announcement[0].title}</h2>
                <p>Date: {announcement[0].date.slice(0,16)}</p>
                <p className="announcement-content">{announcement[0].content}</p>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    )
}

export default Announcement;