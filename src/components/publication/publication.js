import React, {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import './publication.css';
import axios from 'axios';

const Publication = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    const [pub,setPub] = useState([{
        title:"",
        content:"",
        date:"",
        city:""
    }])

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let path = window.location.pathname
        let pid = path.split('/')[2]
        let isSubscribed = true
        if(isSubscribed) {
            const getPublication = async() => {
                axios.get(`http://localhost:4568/api/getPublication/${pid}`)
                    .then(res => {
                        setPub(res.data)
                    })
            }

            getPublication()
        }
        return () => {
            cancelTokenSource.cancel()
            isSubscribed = false
        }
    },[])

    return (
        <div className="container-fluid publication-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h2>{pub[0].title}</h2>
                    <p className="pub-date">Date: {pub[0].date}</p>
                    <p className="pub-city">City: {pub[0].city}</p>
                    <p className="publication-desc">{pub[0].content}</p>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Publication;