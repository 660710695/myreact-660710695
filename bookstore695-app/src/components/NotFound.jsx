import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const  NotFound = () => {
    const navigate = useNavigate();
    
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div
            style={{
                textAlign:"center"
            }}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist</p>
        </div>
    );
};

export default NotFound;