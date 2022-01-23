import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, {useEffect,useState} from 'react';
import {Carousel} from 'react-responsive-carousel';
import images from './images'
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './home.css';

const Home = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    return (
        <div>
            <FirstPart />
            <SecondPart />
        </div>
    )
}

const FirstPart = () => {
    return (
        <div className="container-fluid carousel-container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                <h2 className="research-laboratory-title">Research Laboratory</h2>
                <Carousel>
                    {images.map(i => {
                        return (
                            <img key={uuidv4()} src={i.image} alt={i.desc}/>
                        )
                    })}
                </Carousel>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

const SecondPart = () => {
    const [announcements, setAnnouncements] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        let isSubscribed = true
        if(isSubscribed) {
            const getFiveRecentAnnouncements = async() => {
                axios.get("http://localhost:4568/api/getFiveRecentAnnouncements")
                .then(res => {
                    const a = res.data
                    setAnnouncements(a)
                })
            }

            getFiveRecentAnnouncements()
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
        <div className="container-fluid second-container">
            <div className="row">
                <div className="col-sm-6">
                    <h2 className="announcements-title">Announcements</h2>
                    <List>
                        {announcements.map((a,i) => {
                            return (
                                <div key={i}>
                                    <ListItem className="list-item-style">
                                        <p>{a.title}</p>
                                        <p>{a.date}</p>
                                        <Button onClick={() => goToAnnouncementPage(a.aid)} variant="contained" style={{backgroundColor: '#f55a42',textTransform: 'lowercase'}} className="announcement-btn">See details</Button>
                                    </ListItem>
                                    <Divider />
                                </div>
                            )
                        })}
                        
                    </List>
                    <Link to="/announcements" className="announcements-link">See all announcements...</Link>
                </div>
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592033.4316639958!2d-78.35814647557183!3d38.79946357854625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64debe9f190df%3A0xf2af37657655f6b1!2sMaryland%2C%20USA!5e0!3m2!1sen!2sgr!4v1641405527438!5m2!1sen!2sgr" 
                    allowFullScreen="" 
                    loading="lazy" className="map-style"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home;