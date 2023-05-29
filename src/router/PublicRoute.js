import React, {useState} from 'react';
import { Navigate, } from 'react-router-dom';

import { useSelector } from "react-redux";


const PublicRoute = ({
    children
  }) => {
    let access_token = useSelector((state) => state?.loginreducers?.access_token);
    if (access_token) {
      return <Navigate to='/list'/>;
    }
    return children ;
  };


export default PublicRoute