import React from 'react'
import './research_member.css'
import JH from '../../static/jhend.jpg'
import {Link} from 'react-router-dom'
import {EnvelopeFill, TelephoneFill, Link as WebSiteLink} from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const ResearchMember = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    
    return (
    <div className="container-fluid research-member-container">
        <div className="row">
            <div className="col-sm-3">

            </div>
            <div className="col-sm-6">
                <h2 className="text-center">Jordan Henderson</h2>
                <figure className="img-pos">
                    <img src={JH} className="image-style" alt="sthg"/>
                </figure>
                <div className="info-box">
                    <h3 className="details-title">Details</h3>
                    <a href="mailto:jh@gmail.com" className="info-links"><EnvelopeFill size={20}/>&nbsp;&nbsp;jh@domain.com</a>
                    <a href="tel:58358282595289" className="info-links"><TelephoneFill size={20}/>&nbsp;&nbsp;58358282595289</a>
                    <Link to="" className="info-links"> <WebSiteLink size={20}/>&nbsp;&nbsp;https://jh.com</Link>
                </div>
                <div className="short-cv-style">
                    <h2 className="text-center">SHORT CV</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <h2>Publications</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <h2>Research Projects</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <h2>Research Labs</h2>
                <ul>
                    <li>University Research Lab</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
            </div>
            <div className="col-sm-3">

            </div>
        </div>
    </div>
    )
}

export default ResearchMember