import React from 'react';
import { useDispatch } from 'react-redux';
import { setComponentType } from '../../redux/navbars';
import './publication.css';

const Publication = () => {
    const dispatch = useDispatch()
    dispatch(setComponentType({componentType: 'user'}))
    return (<></>)
}

export default Publication;