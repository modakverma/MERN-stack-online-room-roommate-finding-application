import React from 'react'
import Login from './Login';
import './Auth.css';

const BaseModal = ({onBackdropClick,isModalVisible}) => {
   if(!isModalVisible){
    return null;
   }
  return (
    <>
    <div onClick={onBackdropClick} className='backdrop-container'>
    </div>
        <Login onBackdropClick={onBackdropClick} />
    </>
  )
}

export default BaseModal
