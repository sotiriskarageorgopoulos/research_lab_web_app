import React from 'react';
import './announcement.css';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';

const Announcement = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))

    return (
    <div className="container-fluid announcement-container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Date: 14/04/2014</p>
                <p className="announcement-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra. Sit amet nulla facilisi morbi tempus iaculis urna id. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Dictumst quisque sagittis purus sit amet volutpat consequat. Lobortis scelerisque fermentum dui faucibus in ornare quam. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Ultricies mi eget mauris pharetra et ultrices. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Blandit volutpat maecenas volutpat blandit aliquam. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Turpis egestas pretium aenean pharetra magna ac. Nunc mattis enim ut tellus elementum sagittis vitae. Faucibus vitae aliquet nec ullamcorper sit amet. Bibendum est ultricies integer quis auctor elit. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Tellus molestie nunc non blandit massa enim nec. Nulla malesuada pellentesque elit eget gravida cum. Elit pellentesque habitant morbi tristique. Neque laoreet suspendisse interdum consectetur.
Lectus magna fringilla urna porttitor rhoncus dolor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Integer eget aliquet nibh praesent tristique magna sit.</p>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    )
}

export default Announcement;