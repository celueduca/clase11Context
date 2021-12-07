import React, { useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import AuthContext from '../../context/AuthContext'
import {useContext} from 'react'

import { AiOutlineHome, AiOutlineInstagram, AiOutlineContacts, AiOutlineLogout } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Header = () => {
    const history = useHistory();

    const { user } = useContext(AuthContext);

    const handleHome = () => history.push('/')
    const handleInstagram = () => history.push('/instagram')
    const handleContactUs = () => history.push('/contactUs')
    const handleChangePassword = () => history.push('/changePassword')
    
    return (
        <div className="header">
            <ul>
                <li onClick={() => handleHome()}><AiOutlineHome/></li>
                <li onClick={() => handleInstagram()}><AiOutlineInstagram/></li>
                <li onClick={() => handleContactUs()}><AiOutlineContacts/></li>
                <li onClick={() => handleChangePassword()}><RiLockPasswordLine/></li>
                <li><AiOutlineLogout/></li>
            </ul>
        </div>
    )
}

export default Header
