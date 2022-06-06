import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
    const [isAuth, setAuth] = useState(false);

  return (
    <div>
        {isAuth === false ? <Navigate to="/login" /> : <Navigate to="/posts" />}
    </div>
  )
}
