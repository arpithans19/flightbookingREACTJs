import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../store/actions/UserAction';


function DeleteUser(){
    const user = useSelector(state => state.userReducer.user)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const deleteUserById = () => {
        dispatch(deleteUser(id));
    }
    useEffect(() => { deleteUserById(); }, [id]);

    return (
        <div className='alert'>

            {
                user !== null && 
                alert("deleted successfully!!!" +id )
                
            }
        </div>
    )


}
export default DeleteUser;